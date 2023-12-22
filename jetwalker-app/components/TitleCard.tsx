import React from "react";

export const TitleCard = (): JSX.Element => {
    return (
        <div className="relative w-[896px] h-[189px]">
            <div className="absolute w-[803px]
             h-[94px] top-[28px] left-[47px] 
             [font-family:'Inter-Bold',Helvetica] 
             font-bold text-black text-[128px] 
             text-center tracking-[0] 
             leading-[normal]"
            >
            JET WALKER   
            </div>
            <div className="absolute w-[479px]
             h-[51px] top-[144px] left-[209px] 
             [font-family:'Inter-Bold',Helvetica] 
             font-bold text-black text-[32px] 
             text-center tracking-[0] 
             leading-[normal]"
            >
            welcome, digital traveler    
            </div>
        </div>
    )
}