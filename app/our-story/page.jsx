"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Added useState and useEffect for hydration

const timelineEvents = [
  {
    date: "✨ The First Hello",
    description: "The moment we first met—who knew we'd be here today? 🥹",
    image: "/10.jpg",
  },
  {
    date: "💌 Our First Date",
    description: "The butterflies, the laughs, and the unforgettable smiles.",
    image: "/8.jpg",
  },
  {
    date: "🎉 First Anniversary",
    description: "A year of love, joy, and crazy adventures together!",
    image: "/1.jpg",
  },
  {
    date: "🌍 Trips & Adventures",
    description: "Every journey we took brought us closer together. ✈️",
    image: "/2.jpg",
  },
  {
    date: "💖 Today & Forever",
    description: "Through every moment, I choose you. Always.",
    image: "/5.jpg",
  },
];

export default function OurStory() {
  // Use state to ensure the component has fully hydrated
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Set to true once the component is mounted
  }, []);

  if (!hasMounted) {
    return null; // Prevent rendering before hydration
  }

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-6 pt-24">
      <motion.h1
        className="text-4xl font-bold text-red-600 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Story 📖
      </motion.h1>

      <div className="relative mx-auto w-full max-w-3xl">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-red-300 w-1 h-full"></div>

        {/* Timeline Items */}
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between w-full mb-10 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.date}
              className="w-32 h-32 rounded-full shadow-md border-4 border-pink-500 object-cover"
            />

            {/* Text */}
            <div className="w-1/2 text-center p-4 bg-white shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-red-600">{event.date}</h2>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <button
          onClick={() => window.location.href = "/love-letter"}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-700 transition shadow-md"
        >
          A Love Letter for you ✍️
        </button>
      </motion.div>
    </div>
  );
}
