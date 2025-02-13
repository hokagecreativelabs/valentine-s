"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navbar";

const fullText = 
  `My Dearest Love,
  As I sit down to write this, I find myself lost in the endless reasons why I adore you.
  You are the poetry that my heart whispers in quiet moments,
  the light that turns my ordinary days into something extraordinary.
  Every smile of yours is a sunrise in my soul, and every touch is a melody only we understand.
  So here I am, ink on paper, trying to put into words
  what my heart has known since the moment I met you—
  I love you, endlessly, truly, forever.
  Yours always, Cashew`;

export default function LoveLetter() {
  const router = useRouter();
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 40);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-red-100 px-6 relative pt-24">
      {/* Paper effect container */}
      <motion.div
        className="bg-white shadow-2xl rounded-lg p-8 max-w-xl border border-red-400 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url('/paper-texture.jpg')", 
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-red-600 text-center mb-4 italic font-[Cedarville Cursive]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A Letter for You 💌
        </motion.h1>

        <div
          ref={scrollRef}
          className="max-h-60 overflow-hidden relative text-lg text-gray-700 font-serif leading-relaxed"
        >
          <motion.pre
            className="whitespace-pre-wrap font-[Dancing Script] text-[#5A3E36] fade-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayText}
          </motion.pre>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </motion.div>

      {index === fullText.length && (
        <motion.button
          onClick={() => router.push("/surprise")}
          className="mt-6 px-6 py-3 bg-red-700 text-white rounded-full text-lg font-semibold shadow-md hover:bg-red-900 transition flex items-center gap-2 border-2 border-yellow-400 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>📜 Thank you for being mine!</span>
        </motion.button>
      )}
    </div>
  );
}
