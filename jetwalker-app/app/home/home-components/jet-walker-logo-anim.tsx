'use client'
import { useState } from "react";

interface Props {
    className?: string;
}

const JetWalkerLogoAnim = ({ className }: Props): React.JSX.Element => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative ${isHovered ? "w-[413px] h-[396px]" : "w-[373px] h-[306px]"} ${className}`}
        >
            <img
                className={`absolute ${isHovered ? "w-[372px] left-[20px] top-0 object-cover h-[372px]" : "w-[375px] -left-px -top-px h-[308px]"}`}
                alt="The Jet Walker"
                src={isHovered ? "/AltJetWalker.png" : "/TheJetWalker.jpg"}
            />
        </div>
    );
};

export default JetWalkerLogoAnim;


