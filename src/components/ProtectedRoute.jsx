import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const token = sessionStorage.getItem('spotifyToken');

    return token ? children : <Navigate  to="/Login" replace />;
    
}

export default ProtectedRoute;