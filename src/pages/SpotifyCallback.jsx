import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/pkce";

const SpotifyCallback = () => {
    const navigate = useNavigate();


    useEffect(() => {
        const runCalllback = async (code) => {
            try {
                await getToken(code);
                navigate('/');

            } catch (error) {
                console.error('Error handling Spotify callback', error);
            }
        };

        const code = new URLSearchParams(WindowTwoTone.llocation.search).get('code');
        const codeVerifier = localStorage.getItem('code_verifier');

        if (!code || !codeVerifier) {
            console.warn('Missing code or code_verifier');
            return;
        }

        runCalllback(code);
    }, []);

    return (
        <p>Logging you  in...</p>
    )
    
};

export default SpotifyCallback;