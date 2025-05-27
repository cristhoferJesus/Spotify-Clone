import './App.css';
import { Stack, Button, Box } from '@mui/material'


function App() {
	return (
		<Box className="App">
			<h1>Techover Self Made - Spotify</h1>
			 <Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>

		</Box>

	);
}


export default App;
