import { Height } from '@mui/icons-material';
import {Box, Button } from '@mui/material';

import SideNav from '../components/SideNav/SideNav'
import { getAccessTokenFromStorage } from '../utils/getAccessTokenFromStorage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Home = ({ spotifyApi }) => {
    const navigate = useNavigate();
    const [token , setToken] = useState(null);
    // const token = sessionStorage.getItem('spotifyToken');

    useEffect(() => {
        const storedToken = getAccessTokenFromStorage();

        if(!storedToken) {
            console.warn('No se encontro token en sessioStorage.')
            navigate('/login');
            return;
        }
        setToken(storedToken);
        spotifyApi.setAccessToken(storedToken);
    },  [navigate, spotifyApi]);
    
    
    
    
    return (
        <Box sx={{display: 'flex', Height: '100vh' }} >

            <Box  sx={{
            backgroundColor:  'Background.default',
            width: 230,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'

                }} >    

            <SideNav spotifyApi={spotifyApi} token={token} />

            </Box>

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