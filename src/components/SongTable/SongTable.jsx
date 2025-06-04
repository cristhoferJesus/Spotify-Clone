import { Box, Grid, Divider } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from '../SongRow/SongRow'





const SongTable = ({}) => {



    return (
		<Box
			p={{ xs: 3, md: 4 }}
			sx={{
				flex: 1,
				overflowY: 'auto',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Grid container px={2} py={1} sx={{ width: '100%', color: 'text.secondary', fontSize: 14 }}>
				<Grid sx={{ width: 35, display: 'flex', alignItems: 'center'}} item>
					#
				</Grid>
				<Grid sx={{ flex: 1, display: 'flex', alignItems: 'center'}} item>
					Title
				</Grid>
				<Grid xs={3} item sx={{ display: {xs: 'none', md: 'flex' } }} >
					Almbun
				</Grid>
				<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}} >
					<AccessTimeIcon sx={{ width: 20, height: 20}} />
				</Grid>
			</Grid>
            <Box pb={2} >
				<Divider sx={{ width: '100%', height: 1 }} /> 
			</Box>
			<SongRow />
			<SongRow />
			<SongRow />
		</Box>
	);
    
};


export default SongTable;