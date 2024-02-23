import { Box, Typography } from "@mui/material";

const ConfessTitleCard = (): React.JSX.Element => {
    return (
        <Box 
        textAlign={"center"} 
        sx={{color: "black"}}>
            <Typography variant="h1">
                CONFESS
            </Typography> 
        </Box>
    );
};

export default ConfessTitleCard;