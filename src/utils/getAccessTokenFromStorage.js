export const getAccessTokenFromStorage = () => {

    const tokenFromLocalStorage = sessionStorage.getItem('spotifyToken');

    if (tokenFromLocalStorage  !== null ) {
        return tokenFromLocalStorage;
    }

    return false;

};