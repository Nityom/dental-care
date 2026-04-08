import React, { useState, useEffect } from "react";

const CONVEX_HTTP_URL = import.meta.env.VITE_CONVEX_HTTP_URL;
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "917771970889";

const normalizeTimeTo24h = (timeValue) => {
  if (!timeValue) return "";

  const trimmed = String(timeValue).trim();
  if (/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmed)) {
    return trimmed;
  }

  const match12h = trimmed.match(/^(\d{1,2}):([0-5]\d)\s*(AM|PM)$/i);
  if (!match12h) return trimmed;

  const rawHour = Number(match12h[1]);
  const minute = match12h[2];
  const meridiem = match12h[3].toUpperCase();

  let hour = rawHour % 12;
  if (meridiem === "PM") hour += 12;

  return `${String(hour).padStart(2, "0")}:${minute}`;
};

const generateTimeSlots = () => {
  const slots = [];
  let totalMinutes = 9 * 60 + 30; // 09:30
  const endMinutes = 20 * 60; // 20:00

  while (totalMinutes <= endMinutes) {
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
    totalMinutes += 30;
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    dental_problem: ""
  });

  const [errors, setErrors] = useState({});
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const doctors = ["Dr.Tarun Pandey", "Dr.Sindhuja Pandey"];
  const dental_problems = [
    "Misaligned or Irregular teeth", "Spacing between teeth", "Crooked teeth",
    "Bad breath", "Stained teeth", "Toothache", "Bleeding gums", "Tooth Decay",
    "Cavities", "Impacted tooth", "Swelling in gums", "Loose teeth",
    "Missing teeth", "Teeth Grinding"
  ];

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!formData.date || !formData.doctor) {
        setBookedSlots([]);
        return;
      }

      if (!CONVEX_HTTP_URL) {
        console.error("Missing VITE_CONVEX_HTTP_URL in environment");
        return;
      }

      try {
        const response = await fetch(`${CONVEX_HTTP_URL}/appointments/booked-slots`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            appointment_date: formData.date,
            doctor_name: formData.doctor
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch booked slots: ${response.status}`);
        }

        const result = await response.json();
        setBookedSlots((result.bookedSlots || []).map(normalizeTimeTo24h));
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, [formData.date, formData.doctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    const requiredFields = [
      'name', 'email', 'phone', 'doctor', 'date', 'time', 'dental_problem'
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field} is required`;
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (formData.time && bookedSlots.includes(formData.time)) {
      newErrors.time = "This time slot is already booked";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (!CONVEX_HTTP_URL) {
      alert("Convex HTTP URL is missing. Please set VITE_CONVEX_HTTP_URL in .env.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        appointment_date: formData.date,
        appointment_time: normalizeTimeTo24h(formData.time),
        dental_problem: formData.dental_problem,
        doctor_name: formData.doctor,
        full_name: formData.name,
        phone: formData.phone,
        notes: formData.email ? `Email: ${formData.email}` : undefined
      };

      const response = await fetch(`${CONVEX_HTTP_URL}/appointments/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.error || "Could not save appointment");
      }

      const whatsappMessage = `*Appointment Booking Details*\nDoctor: ${formData.doctor}\nPatient Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${normalizeTimeTo24h(formData.time)}\nDental Problem: ${formData.dental_problem}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

      // Mark slot as booked in the current UI state before redirect.
      const normalizedSelectedTime = normalizeTimeTo24h(formData.time);
      setBookedSlots((prevSlots) =>
        prevSlots.includes(normalizedSelectedTime)
          ? prevSlots
          : [...prevSlots, normalizedSelectedTime]
      );

      window.location.href = whatsappUrl;

      setTimeout(() => {
        alert("If WhatsApp did not open, please tap the three dots (•••) and select 'Open in Safari'.");
      }, 1500);

      setFormData({
        name: "", email: "", phone: "", doctor: "", date: "", time: "", dental_problem: ""
      });

      alert("Appointment request sent successfully!");

    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending appointment request. Please try again.");
    }

    setIsSubmitting(false);
  };

  const getTodayDate = () => new Date().toISOString().split("T")[0];
  const getMaxDate = () => {
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split("T")[0];
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1e1b1e] mb-1 text-center">Book Online</h1>
      <p className="text-sm text-gray-700 mb-6 text-center">
        Book your orthodontic visit online—fast, easy, and professional care.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Inputs remain unchanged ... */}

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-sm">Name*</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]" />
          {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-sm">Email*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]" />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 font-medium text-sm">Phone*</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]" />
          {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
        </div>

        {/* Doctor */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-sm">Select Doctor*</label>
          <select name="doctor" value={formData.doctor} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]">
            <option value="">Select a Doctor</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>{doctor}</option>
            ))}
          </select>
          {errors.doctor && <span className="text-red-500 text-xs">{errors.doctor}</span>}
        </div>

        {/* Dental Problem */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-sm">Select Dental Problem*</label>
          <select name="dental_problem" value={formData.dental_problem} onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]">
            <option value="">Select a Dental Problem</option>
            {dental_problems.map((problem, index) => (
              <option key={index} value={problem}>{problem}</option>
            ))}
          </select>
          {errors.dental_problem && <span className="text-red-500 text-xs">{errors.dental_problem}</span>}
        </div>

        {/* Date & Time */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-sm">Date*</label>
            <input type="date" name="date" value={formData.date}
              min={getTodayDate()} max={getMaxDate()} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]" />
            {errors.date && <span className="text-red-500 text-xs">{errors.date}</span>}
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-sm">Time*</label>
            <select name="time" value={formData.time} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]">
              <option value="">Select a Time</option>
              {TIME_SLOTS.map((slot, index) => (
                <option key={index} value={slot} disabled={bookedSlots.includes(slot)}>
                  {slot} {bookedSlots.includes(slot) ? "(Booked)" : ""}
                </option>
              ))}
            </select>
            {errors.time && <span className="text-red-500 text-xs">{errors.time}</span>}
            {formData.date && bookedSlots.length === TIME_SLOTS.length && (
              <p className="text-red-500 text-xs mt-1">All slots booked for this date.</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 font-medium rounded-md transition-all duration-300 border-2 ${
            isSubmitting
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#1e1b1e] text-white hover:bg-transparent hover:text-[#1e1b1e] hover:border-[#1e1b1e]"
          }`}
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default Form;
