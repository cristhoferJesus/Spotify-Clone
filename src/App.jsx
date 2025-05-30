import './App.css';
import { Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './components/NavPlaylist/ProtectedRoute';

import Dashboard from './components/Dashboard/Dashboard';
import SpotifyCallback from './pages/SpotifyCallback';

import Home from './pages/Home';
import Login from './pages/Login'


function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/callback" element={<SpotifyCallback />} />
				<Route path="/dashboard" element={<ProtectedRoute> <Dashboard spotifyApi={spotifyApi} /> </ProtectedRoute>} />
				<Route path="" element={<Home />} />
				{/* <Route path="/playlist/:id" element={<Playlist spotifyApi={}  />} /> */}
				{/* <Route path="/library" element={<Library spotifyApi={}  />} /> */}
				<Route path="*" element={<Navigate to="/dashboard" />} />
			</Routes>
		</Box>
	);
}


export default App;
