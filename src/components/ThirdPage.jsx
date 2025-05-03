import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const ThirdPage = () => {
  const cards = [
    {
      title: "General dentistry",
      color: "#a7aaca",
      moreInfo:
        "General dentistry includes cleanings, X-rays, exams, fillings, and other preventative services to maintain oral health.",
    },
    {
      title: "Cosmetic dentistry",
      color: "#b5beba",
      moreInfo:
        "Cosmetic procedures like whitening, veneers, and bonding improve the appearance of your teeth and smile.",
    },
    {
      title: "Restorative dentistry",
      color: "#cbbe91",
      moreInfo:
        "Restorative treatments include crowns, bridges, and dentures to repair or replace damaged teeth.",
    },
  ];

  // Track expanded card indices
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    setExpandedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full min-h-screen text-white flex items-center justify-center px-4 py-12">
      <div
        className="w-full bg-cover bg-center bg-no-repeat rounded-[30px] overflow-hidden p-10"
        style={{ backgroundImage: `url('../assets/back.jpg')` }}
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Elevating Oral Health <br />
              With Personalized <br />
              Services
            </h1>
          </div>
          <div className="lg:w-1/3 flex flex-col justify-between space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit magni facere libero,
              consectetur earum corporis non, mollitia maxime dolores voluptates est et sunt, aliquid a
            </p>
            <button className="inline-flex items-center gap-2 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 self-start">
              All Services <FiArrowUpRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
          {cards.map((card, index) => {
            const isExpanded = expandedCards.includes(index);

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`relative w-full sm:w-[320px] md:w-[300px] bg-opacity-90 rounded-[20px] px-6 py-8 cursor-pointer shadow-md transition-all duration-500 ease-in-out`}
                style={{ backgroundColor: card.color }}
              >
                {/* Rotating Arrow */}
                <div
                  className={`absolute top-3 right-3 bg-black text-white p-2 rounded-full transition-transform duration-500 ease-in-out ${
                    isExpanded ? 'rotate-90' : 'rotate-0'
                  }`}
                >
                  <FiArrowUpRight className="text-lg" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 leading-tight text-black">
                  {card.title.split(" ")[0]} <br /> {card.title.split(" ")[1]}
                </h2>

                {/* Short Description */}
                <p className="text-sm mb-3 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium rerum facere dicta
                  voluptatibus.
                </p>

                <hr className="border-black mb-3" />

                {/* Bullet Points */}
                <ul className="text-sm text-black list-disc list-inside space-y-1">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>

                {/* Expandable More Info */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <p className="text-sm text-black">{card.moreInfo}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
