import { Grid, Avatar, Box, Typography, Skeleton } from '@mui/material';
import {formatTime} from '../../utils/formatTime'






const SongRow = ({ images, title, artist, album, duration, i , loading, position, contextUri, spotifyApi }) => {

    const image = images?.length > 0 ? images[0].url : null;








	const onRowClick = async () => {
		const song = { context_uri: contextUri, offset: { position: position }, position_ms: 0 }
		await spotifyApi.play(song);

	};	



    return (
		<Grid
			onClick={onRowClick}
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
				{i + 1}
			</Grid>
			<Grid sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }} item>
				{loading ? (
					<Skeleton variant="rectangular" width={40} height={40} />
				) : (
					<Avatar src={image} alt={null} variant="square" />
				)}

				<Box>
					<Typography sx={{ fontSize: 16, color: 'text.primary' }}>
						{loading ? <Skeleton width={130} height={24} /> : title}{' '}
					</Typography>
					<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
						{loading ? <Skeleton width={50} height={18} /> : artist}
					</Typography>
				</Box>
			</Grid>
			<Grid xs={3} item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
				{loading ? <Skeleton width={50} height={24} /> : album}
			</Grid>
			<Grid xs={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
				{loading ? <Skeleton width={50} height={24} /> : formatTime(duration)}
			</Grid>
		</Grid>
	);
};

export default SongRow;