import { Grid, Avatar, Box, Typography } from '@mui/material';





const SongRow = ({}) => {
    return (
		<Grid
			container
			px={2}
			py={1}
			sx={{
				width: '100%',
				color: 'text.secondary',
				fontSize: 14,
				cursor: 'pointer',
				'&:hover': { backgroundColor: '#ffffff10' }
			}}
		>
			<Grid sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }} item>
				{/* Position */} 1
			</Grid>
			<Grid sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }} item>
				{/* Title */}
                <Avatar src={null} alt={null} variant='square' />
                <Box>
                    <Typography sx={{ fontSize: 16, color: 'text.primary'}} >Respirar</Typography>
                    <Typography sx={{ fontSize: 12, color: 'text.secondary'}} >Jesus Adrian romero</Typography>
                </Box>
			</Grid>
			<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' } }}>
				Zaqueo
			</Grid>
			<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
				3:32
			</Grid>
		</Grid>
	);
};

export default SongRow;