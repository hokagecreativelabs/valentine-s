"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const images = [
  "/1.jpg", 
  "/2.jpg",  
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/mine.jpg",
  "/7.jpg",
  "/9.jpg",
];

export default function MemoryLane() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasMounted, setHasMounted] = useState(false); // Hydration fix
  const router = useRouter();

  // Ensure the component has mounted before rendering
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevent rendering before hydration
  }

  return (
    <div className="min-h-screen bg-red-50 py-10 px-6 flex flex-col items-center transition-all duration-500 ease-in-out pt-24">
      <motion.h1 
        className="text-4xl font-bold text-red-600 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Memory Lane 📸
      </motion.h1>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-10">
        {images.map((src, index) => (
          <motion.img 
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            className="w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <motion.img 
            src={selectedImage}
            alt="Selected Memory"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            ✖
          </button>
        </div>
      )}

      <motion.button
        onClick={() => router.push("/our-story")}
        className="mt-8 px-6 py-3 bg-red-500 text-white rounded-lg text-lg hover:bg-red-700 transition shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        See Our Story 📖
      </motion.button>
    </div>
  );
}
