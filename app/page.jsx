"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-gradient-to-br from-pink-50 to-red-100 transition-all duration-500 ease-in-out">
      
      {/* Image Section */}
      <motion.div 
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-pink-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }} // Soft float effect
      >
        <img 
          src="/mine.jpg"  // Update to her real photo URL
          alt="Her" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div 
        className="mt-6 md:mt-0 md:ml-10 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.h1 
          className="text-5xl font-bold text-red-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          Happy Valentine’s 💖
        </motion.h1>
        
        <motion.p 
          className="text-xl mt-4 text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          A special experience made just for you.
        </motion.p>

        <motion.button
          onClick={() => router.push("/reasons")}
          className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-700 transition shadow-md"
          whileHover={{ scale: 1.15, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          Would you be my val??
        </motion.button>
      </motion.div>
    </div>  
  );
}
