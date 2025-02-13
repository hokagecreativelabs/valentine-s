"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBackward, FaPlay, FaPause } from "react-icons/fa"; // Icons for back, play, and pause

export default function Navigation() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false); // Music play state
  const audioRef = React.useRef(new Audio('/my.mp3')); // Replace with your desired MP3 URL

  // Function to toggle music play/pause
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-0 left-0 w-full py-4 px-6 bg-white flex justify-between items-center shadow-md">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-red-600 text-xl hover:text-red-800 transition"
      >
        <FaBackward />
        <span>Go back</span>
      </button>

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="text-red-600 text-xl hover:text-red-800 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
        <span>Play Music</span>
      </button>
    </div>
  );
}
