'use client'
import Link from "next/link"; // Import Link from Next.js
interface Props {
    href: string;
    text: string;
}

const JetWalkerDotComBoard = ({ href, text }: Props): React.JSX.Element => {
    return (
        <Link href={href} passHref replace>
            <div className="flex h-[84px]">
                <div className="w-[300px] h-[84px] font-bold text-black text-[32px] text-center bg-white flex justify-center items-center">
                    {text}
                </div>
            </div>
        </Link>
    );
};

export default JetWalkerDotComBoard;
