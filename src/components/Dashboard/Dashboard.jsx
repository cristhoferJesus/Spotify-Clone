import React from "react";
import { Box } from "@mui/material";
import { Routes, Route } from 'react-router-dom';
import  Home from '../../pages/Home';

const Dashboard = ( { spotifyApi } ) => {
    return (
        <Box>
            <Box>
                <Routes>
                    <Route path="/playlist/:id" element={<div>Palylist</div>} />
                    <Route path="/library" element={<div>Hello chris</div>} />
                    <Route path="/" element={< Home />} />
                </Routes>
            </Box>
        </Box>
    )
}


export default Dashboard;