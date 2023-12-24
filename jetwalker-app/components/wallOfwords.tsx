import React from "react";

export const WallOfWords = (): JSX.Element => {
    return (
        <div className="w-[326px] h-[361px]">
            <div className="relative w-[328px] h-[361px] top-0 left-0 bg-white">
                <div className="relative w-[282px] h-[271px] left-[22px] bg-[url(/WoWTriangle.png)] bg-[100%_100%]">
                    <div className="absolute w-[240px] h-[35px] top-[225px] left-[21px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
                        wall of words
                    </div>
                </div>
            </div>
        </div>
    );
};
