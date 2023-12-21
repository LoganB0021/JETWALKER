import React from "react";
import { Jtw } from "./Jtw";

export const NavBarLinks = (): JSX.Element => {
  return (
    <div className="relative w-[1688px] h-[86px] bg-white">
      <Jtw
        className="!absolute !left-[1260px] !w-[215px] !top-[17px]"
        divClassName="!w-[215px]"
        text="CONTACT"
        label="CONTACT"
      />
      <Jtw
        className="!absolute !left-[1104px] !w-[156px] !top-[17px]"
        divClassName="!w-[156px]"
        text="PHOTO"
        label="PHOTO"
      />
      <Jtw
        className="!absolute !left-[756px] !w-[186px] !top-[17px]"
        divClassName="!w-[186px]"
        text="CONFESS"
        label="CONFESS"
      />
      <Jtw
        className="!absolute !left-[942px] !w-[162px] !top-[17px]"
        divClassName="!w-[162px]"
        text="VIDEO"
        label="VIDEO"
      />
      <Jtw
        className="!absolute !left-[520px] !w-[236px] !top-[17px]"
        divClassName="!w-[236px]"
        text="SCRIPTURES"
        label="SCRIPTURES"
      />
      <Jtw
        className="!absolute !left-[362px] !w-[158px] !top-[17px]"
        divClassName="!w-[158px]"
        text="SHOP"
        label="SHOP"
      />
      <Jtw
        className="!absolute !left-[213px] !w-[149px] !top-[17px]"
        divClassName="!w-[149px]"
        text="HOME"
        label="HOME"
      />
    </div>
  );
};

