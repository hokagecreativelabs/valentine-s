"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBackward, FaPlay, FaPause } from "react-icons/fa"; // Icons for back, play, and pause

export default function Navigation() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false); // Music play state
  const [audio, setAudio] = useState(null); // To store the audio instance

  // Initialize the audio only on the client-side
  useEffect(() => {
    const audioInstance = new Audio('/my.mp3'); // Reference to your audio file
    setAudio(audioInstance); // Set the audio instance in state

    // Clean up on unmount
    return () => {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    };
  }, []); // Empty dependency array ensures this only runs once, after the component mounts

  // Function to toggle music play/pause
  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
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
