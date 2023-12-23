import React from "react";

export const Box = (): JSX.Element => {
    return (
        <div className="relative w-[377px] h-[84px]">
            <div className="fixed w-[379px] h-[84px] top-0 left-0">
                <div className="absolute w-[377px] h-[84px] top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal] bg-white">
                    jetwalker.com
                </div>
            </div>
        </div>
    );
};
