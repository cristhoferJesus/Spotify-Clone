import { Box, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useOutletContext } from "react-router-dom";

import PlaylistItem from '../components/PlaylistItem/PlaylistItem'

const Library = () => {
    const { spotifyApi, token } = useOutletContext();

    const [albumlist, setAlbumlist] =  useState([]);
    const  [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log("Ejecutando useEffect con: ", { spotifyApi, token });

		if (!spotifyApi || !token) return;

		spotifyApi.setAccessToken(token);

		async function getPlaylists() {
			try {
                spotifyApi.setAccessToken(token);
				const data = await spotifyApi.getUserPlaylists();
				console.log("Playlists recibidas:", data.body.items);
				setAlbumlist(data.body.items);
				setLoading(false);
			} catch (error) {
				console.error("Error al obtener playlists:", error);
			}
		}

		getPlaylists(); // ✅ llama la función correctamente
	}, [spotifyApi, token]);


    const renderPlaylistItems = () => {
        if (loading){
            return [1, 2, 3, 4, 5, 6, 7].map((e, i) => <PlaylistItem loading={loading} key={i} />)
        }

        return albumlist.map((playlist, i) => <PlaylistItem key={i} loading={loading} {...playlist} />)
        
    };



    return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'none' },
				backgroundColor: 'background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>

            <Typography py={3} sx={{ color: 'text.primary', fontSize: 30}} >
                Ditt bibliotek
            </Typography>

            <List>
                {renderPlaylistItems()}
            </List>

        </Box>
	);
}
 
export default Library;