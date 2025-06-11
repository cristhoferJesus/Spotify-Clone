import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';

import Player from "../Player/Player";
import SideNav from '../SideNav/SideNav';
import MobileNav from "../MobileNav/MobileNav";

import { getAccessTokenFromStorage } from "../../utils/getAccessTokenFromStorage";


const Dashboard = ( { spotifyApi } ) => {
    const [token, setToken] = useState(null);
    const  [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {

        const storedToken = getAccessTokenFromStorage();

        
        if (storedToken) {
            spotifyApi.setAccessToken(storedToken);
                setToken(storedToken);
                setIsLoading(false);
            };
        




    }, []);

    


    return (
        <Box
            sx={{ width: '100%', height: '125vh', display: 'flex', flexDirection: 'column' }}
        
        >
            
            {!isLoading && (

                <Box
                    sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}
                
                >
                    <SideNav spotifyApi={spotifyApi} token={token} />
                    <Outlet context={{ spotifyApi, token }} />
                </Box>

            )}
            {token && !isLoading && <Player spotifyApi={spotifyApi}  />}
            <MobileNav />


        </Box>
    )
}


export default Dashboard;