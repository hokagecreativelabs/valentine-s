"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const reasons = [
  "You always make me smile.",
  "Your laughter is contagious.",
  "You listen to me even when I talk nonsense.",
  "You inspire me to be better.",
  "You make every moment special.",
  "Your kindness is unmatched.",
  "You believe in me when I doubt myself.",
  "You look beautiful, always.",
  "Your hugs feel like home.",
  "You’re my biggest supporter.",
  "You have the cutest expressions.",
  "You’re my safe place.",
  "Your voice is my favorite sound.",
  "You never fail to make me feel loved.",
  "You understand me better than anyone.",
  "You’re my peace.",
  "You love me at my worst.",
  "You’re my happiness.",
  "You’re my best friend.",
  "I just love you, and that’s reason enough.",
  "Forever wouldn’t be enough with you."
];

export default function ReasonsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-6 py-10 pt-24">
      <motion.h1 
        className="text-4xl font-bold text-red-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        21 Reasons Why I Love You ❤️
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {reasons.map((reason, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-5 rounded-xl shadow-md border border-pink-200 text-center text-lg text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {index + 1}. {reason}
          </motion.div>
        ))}
      </div>

      {/* Closing Quote */}
      <motion.div 
        className="mt-10 text-xl text-center text-gray-700 italic"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p>May our love be as steadfast as Ruth’s, as joyful as the Songs of Solomon, and as unbreakable as a threefold cord in God’s hands.</p>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        onClick={() => router.push("/memory-lane")}
        className="mt-10 px-6 py-3 bg-pink-500 text-white rounded-lg text-lg hover:bg-pink-700 transition shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        One last thing... 💌
      </motion.button>
    </div>
  );
}
