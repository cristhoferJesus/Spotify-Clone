import { Box, Grid, Typography, Avatar } from "@mui/material";

const Player = ({ spotifyApi }) => {
    return (
		<Box>
			<Grid px={3} sx={{ backgroundColor: 'background.paper', height: 100, cursor: { xs: 'pointer', md: 'auto' }, width: '100%', borderTop: '1px solid #292929' }} container>
				<Grid xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} items>
					<Avatar src={null} alt={null} variant="square" sx={{ width: 56, height: 56, marginRight: 2 }} />
					<Box>
						<Typography sx={{ color: 'text.primary', fontSize: 14 }} > Santidad hay en nombre </Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }} > Cristhofer Jesus </Typography>
					</Box>
				</Grid>
				<Grid
					sx={{ display: { sx: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
					md={4}
					items
				>
					Play knappen
				</Grid>
				<Grid xs={6} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end'}} items>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
}
 
export default Player;
