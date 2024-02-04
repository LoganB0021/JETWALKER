'use client'
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

interface Props {
  href: string; // The path to navigate to
  label?: string;
  className?: string;
  divClassName?: string;
  text?: string;
}

const JetWalkerButton1 = ({ href, label = "BUTTON", className, divClassName, text = "BUTTON" }: Props): React.JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} passHref>
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
    </Link>
  );
};

export default JetWalkerButton1;
