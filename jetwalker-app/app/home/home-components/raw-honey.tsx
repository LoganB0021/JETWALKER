import Link from "next/link";

interface Props {
    href: string; // The path to navigate to
  }

const RawHoney = ({href}: Props): React.JSX.Element => {
    return (
        <Link href={href} passHref>
            <div className="relative w-[286px] h-[286px] rounded-[143px] border border-solid border-black">
                <div className="absolute w-[148px] h-[38px] top-[36px] left-[68px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[normal]">
                    Raw Honey
                </div>
                <div className="absolute w-[130px] h-[130px] top-[78px] left-[76px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal]">
                    EP
                </div>
            </div>
        </Link>
            
    );
};

export default RawHoney;
