import JetWalkerButton1 from "./jet-walker-button1";

const NavBar = (): React.JSX.Element => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full h-[86px] bg-white">
      <JetWalkerButton1 href="/" text="CONTACT" label="CONTACT" />
      <JetWalkerButton1 href="/photos" text="PHOTO" label="PHOTO" />
      <JetWalkerButton1 href="/confess" text="CONFESS" label="CONFESS" />
      <JetWalkerButton1 href="/" text="VIDEO" label="VIDEO" />
      <JetWalkerButton1 href="/" text="SCRIPTURES" label="SCRIPTURES" />
      <JetWalkerButton1 href="/" text="SHOP" label="SHOP" />
      <JetWalkerButton1 href="/" text="HOME" label="HOME" />
    </div>
  );
};

export default NavBar;

