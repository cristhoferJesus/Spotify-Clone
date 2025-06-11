import './App.css';
import { Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Dashboard from './components/Dashboard/Dashboard';
import SpotifyCallback from './pages/SpotifyCallback';

import Home from './pages/Home';
import Login from './pages/Login'
import Playlist from './pages/Playlist'
import Library from './pages/Library';




function App({ spotifyApi }) {
	return (
		<Box className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/callback" element={<SpotifyCallback />} />
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>							
							<Dashboard spotifyApi={spotifyApi} />
						</ProtectedRoute>
					}
				>
					<Route path="" element={<Home />} />
					<Route path="playlist/:id" element={<Playlist spotifyApi={spotifyApi}  />} />
					<Route path="library" element={<Library spotifyApi={spotifyApi}  />} />
				</Route>

				<Route path="*" element={<Navigate to="/dashboard"  />} />
			</Routes>
		</Box>
	);
}


export default App;
