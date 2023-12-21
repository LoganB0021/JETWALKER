'use client'
import React, { useState } from "react";

interface Props {
  label?: string;
  className?: string;
  divClassName?: string;
  text?: string;
}

export const Jtw = ({ label = "BUTTON", className, divClassName, text = "BUTTON" }: Props): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-[261px] h-[51px] relative all-[unset] box-border ${
        isHovered ? "bg-[#0500ff]" : ""
      } ${className}`}
    >
      <div
        className={`[font-family:'Inter-Bold',Helvetica] w-[261px] left-0 tracking-[0] text-[32px] -top-px h-[51px] font-bold text-center leading-[normal] absolute ${
          isHovered ? "text-white underline" : "text-black"
        } ${divClassName}`}
      >
        {isHovered ? label : text}
      </div>
    </button>
  );
};
