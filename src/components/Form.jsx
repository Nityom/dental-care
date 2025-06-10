import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

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

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"
  ];

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!formData.date || !formData.doctor) return;
      
      const { data, error } = await supabase
        .from("appointments")
        .select("time")
        .eq("date", formData.date)
        .eq("doctor", formData.doctor);

      if (error) {
        console.error("Error fetching booked slots:", error);
      } else {
        setBookedSlots(data.map((slot) => slot.time));
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
    const requiredFields = ['name', 'email', 'phone', 'doctor', 'date', 'time', 'dental_problem'];
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field} is required`;
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    // Add validation for booked slots
    if (formData.time && bookedSlots.includes(formData.time)) {
      newErrors.time = "This time slot is already booked";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Insert into Supabase
      const { error } = await supabase.from("appointments").insert([{ ...formData }]);
      if (error) throw error;

      // Format WhatsApp message
      const whatsappMessage = `*Appointment Booking Details*
 Doctor: ${formData.doctor}
 Patient Name: ${formData.name}
 Email: ${formData.email}
 Phone: ${formData.phone}
 Date: ${formData.date}
 Time: ${formData.time}
 Dental Problem: ${formData.dental_problem}`;

      const phoneNumber = "917771970889";
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

      setFormData({
        name: "", email: "", phone: "", doctor: "", date: "", time: "", dental_problem: ""
      });
      alert("Appointment request sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending appointment request.");
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
          <label htmlFor="doctor" className="mb-1 font-medium text-sm">Select Doctor*</label>
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
          <label htmlFor="dental_problem" className="mb-1 font-medium text-sm">Select Dental Problem*</label>
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
            <label htmlFor="date" className="mb-1 font-medium text-sm">Date*</label>
            <input type="date" name="date" value={formData.date}
              min={getTodayDate()} max={getMaxDate()} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]" />
            {errors.date && <span className="text-red-500 text-xs">{errors.date}</span>}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="time" className="mb-1 font-medium text-sm">Time*</label>
            <select 
              name="time" 
              value={formData.time} 
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a3a3a]"
            >
              <option value="">Select a Time</option>
              {timeSlots.map((slot, index) => (
                <option 
                  key={index} 
                  value={slot}
                  disabled={bookedSlots.includes(slot)}
                >
                  {slot} {bookedSlots.includes(slot) ? '(Booked)' : ''}
                </option>
              ))}
            </select>
            {errors.time && <span className="text-red-500 text-xs">{errors.time}</span>}
            {formData.date && bookedSlots.length === timeSlots.length && (
              <p className="text-red-500 text-xs mt-1">All slots booked for this date.</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 font-medium rounded-md transition-all duration-300 border-2 ${
            isSubmitting
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-[#1e1b1e] text-white hover:bg-transparent hover:text-[#1e1b1e] hover:border-[#1e1b1e]'
          }`}
        >
          {isSubmitting ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
};

export default Form;
