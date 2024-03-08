import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

const ConfessTextBox = (): React.JSX.Element => {
    return(
        <Box 
        display={"flex"} 
        flexDirection={"column"} 
        alignItems={"center"}  
        >
            <TextField 
            size='medium' 
            id='confesstextbox' 
            label='enter text' 
            variant='standard' 
            multiline maxRows={5}
            sx={{ marginBottom: 2}}/>
            <Button variant='contained' disableElevation sx={{color: "black"}}>
                Submit
            </Button>
        </Box>
    );
}

export default ConfessTextBox;