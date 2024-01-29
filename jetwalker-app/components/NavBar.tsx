import React from "react";
import { Jtw } from "./Jtw";

export const NavBarLinks = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center w-full h-[86px] bg-white">
      <Jtw href="/" text="CONTACT" label="CONTACT" />
      <Jtw href="/" text="PHOTO" label="PHOTO" />
      <Jtw href="/confess" text="CONFESS" label="CONFESS" />
      <Jtw href="/" text="VIDEO" label="VIDEO" />
      <Jtw href="/" text="SCRIPTURES" label="SCRIPTURES" />
      <Jtw href="/" text="SHOP" label="SHOP" />
      <Jtw href="/" text="HOME" label="HOME" />
    </div>
  );
};

