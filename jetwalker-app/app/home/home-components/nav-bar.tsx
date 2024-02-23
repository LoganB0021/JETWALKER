import { Box } from "@mui/material";
import JetWalkerButton1 from "./jet-walker-button1";

const NavBar = (): React.JSX.Element => {
  return (
    <Box 
    display={"flex"} 
    flexDirection={"row"} 
    justifyContent={"center"}
    flexWrap={"wrap"}
    >
        <JetWalkerButton1 href="/" text="CONTACT" label="CONTACT" />
        <JetWalkerButton1 href="/photos" text="PHOTO" label="PHOTO" />
        <JetWalkerButton1 href="/confess" text="CONFESS" label="CONFESS" />
        <JetWalkerButton1 href="/" text="VIDEO" label="VIDEO" />
        <JetWalkerButton1 href="/" text="SCRIPTURES" label="SCRIPTURES" />
        <JetWalkerButton1 href="/" text="SHOP" label="SHOP" />
        <JetWalkerButton1 href="/" text="HOME" label="HOME" />
    </Box>
    
  );
};

export default NavBar;

