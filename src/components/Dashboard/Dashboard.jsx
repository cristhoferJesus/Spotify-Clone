import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';

import Player from "../Player/Player";
import SideNav from '../SideNav/SideNav';

import { getAccessTokenFromStorage } from "../../utils/getAccessTokenFromStorage";


const Dashboard = ( { spotifyApi } ) => {
    const token = useState(getAccessTokenFromStorage());
    const  [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const onMount = async () => {
            await spotifyApi.setAccessToken(token);
            setIsLoading(false);
        };

        if (token) {
            onMount();
        }




    }, []);

    


    return (
        <Box
            sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
        
        >
            
            {!isLoading && (

                <Box
                    sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}
                
                >
                    <SideNav spotifyApi={spotifyApi} token={token} />
                    <Outlet />
                </Box>

            )}
            {token && !isLoading && <Player spotifyApi={spotifyApi} token={token} />}


        </Box>
    )
}


export default Dashboard;