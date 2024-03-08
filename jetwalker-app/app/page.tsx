'use client'
import JetWalkerDotComBoard from "./home/home-components/jet-walker-dot-com-board";
import { useEffect, useState } from 'react';
import { Howl } from 'howler';

export default function Home() {
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    console.log("Home function");

    const newSound = new Howl({
      src: ["/100,000 (Unfinished).wav"],
      autoplay: false, // Don't autoplay on page load
      html5: true,
    });

    setSound(newSound);

    // Cleanup function to stop the sound when the component unmounts
    return () => {
      newSound.stop();
      newSound.unload();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const playSound = () => {
    if (sound) {
      sound.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <JetWalkerDotComBoard href="/home" />
      <button
        className="w-[261px] h-[51px] relative all-[unset] box-border bg-red"
        onClick={playSound}
      >
        Play Music
      </button>
    </div>
  );
}
