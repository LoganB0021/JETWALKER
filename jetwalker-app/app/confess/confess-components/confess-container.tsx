import NavBar from "@/app/home/home-components/nav-bar";
import  ConfessTitleCard from "./confess-title-card";
import ConfessTextBox from "./confess-text-box";
import { Box, Container } from "@mui/material";

const ConfessContainer = (): React.JSX.Element => {
    return (
        <Box sx={{
            bgcolor: "white",
            display: 'flex',
            flexDirection: "column",
            height: '100vh'
        }}>
            <ConfessTitleCard/>
            <NavBar/>
            <ConfessTextBox/>
        </Box>        
    );
  };

  export default ConfessContainer;