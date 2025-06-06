
import {Box, Button } from '@mui/material';
import React from 'react';




const Home = ({ spotifyApi }) => {

    
    
    
    return (
        <Box sx={{display: 'flex', Height: '100vh' }} >

            <Box sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 5
            }} >
                <img src="/TA-logo.png" alt="Techover" style={{ maxWidth:'50%', maxHeight: '50%' }} />
                <Button size='large'  variant="contained" href="https://www.academy.techover.nu" > Ansök nu! </Button>
            </Box>
        </Box>
        
        
        
        
        
    )
}

export default Home;