import { Box, Grid, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';

import PlayerControls from '../PlayerControls/PlayerControls';

const Player = ({ spotifyApi, token }) => {
	// state varibler som ska kontrollera vad ska ska visas som infor på våra player
	const [localPlayer, setLocalPlayer] = useState();
	const [is_paused, setPaused] = useState(false);
	const [current_track, setTrack] = useState();
	const [device, setDevice] = useState();
	const [duration, setDuration] = useState();
	const [progress, setProgress] = useState();
	const [playerOverlayIsOpen, setPlayerOverlayIsOpen] = useState(false);

	// conecta våra player
	useEffect(() => {

		if (!token) {
			console.warn("Token no disponible");
			return;
		}





		const script = document.createElement('script');
		script.src = 'https://sdk.scdn.co/spotify-player.js';
		script.async = true;

		document.body.appendChild(script);

		window.onSpotifyWebPlaybackSDKReady = () => {
			console.log("SDK listo")
			const player = new window.Spotify.Player({
				name: 'Esperame 2',
				getOAuthToken: (cb) => {
					console.log('pasando token al player:', token)
					cb(token);
				},
				volume: 0.5
			});

				player.addListener("initialization_error", ({ message }) => {
				console.error("❌ Error de inicialización:", message);
			});
			player.addListener("authentication_error", ({ message }) => {
				console.error("❌ Error de autenticación:", message);
			});
			player.addListener("account_error", ({ message }) => {
				console.error("❌ Error de cuenta:", message);
			});
			player.addListener("playback_error", ({ message }) => {
				console.error("❌ Error de reproducción:", message);
			});












			player.addListener('ready', ({ device_id }) => {
				console.log('Ready with Device ID', device_id);
				setDevice(device_id);
				setLocalPlayer(player);
			});

			player.addListener('not_ready', ({ device_id }) => {
				console.log('Device ID has gone offline', device_id);
			});

			player.addListener('player_state_changed', (state) => {
				if (!state || !state.track_window?.current_track) {
					return;
				}
				console.log(state.track_window.current_track);
				console.log("Estado:", state)

				const duration = state.track_window.current_track.duration_ms / 1000;
				const progress = state.position / 1000;
				setDuration(duration);
				setProgress(progress);
				setPaused(state.paused);
				setTrack(state.track_window.current_track);
			});

			player.connect();
		};
	}, []);

	useEffect(() => {
		if (!localPlayer) return;
		async function connect() {
			await localPlayer.connect();
		}

		// connect();
		return () => {
			localPlayer.disconnect();
		};
	}, [localPlayer]);

	// transfer a user's playback
	useEffect(() => {
		const transferPlayback = async () => {
			if (device) {
				const res = await spotifyApi.getMyDevices();
				console.log(res);
				await spotifyApi.transferMyPlayback([device], false);
			}
		};

		transferPlayback();
	}, [device, spotifyApi]);

	return (
		<Box>
			<Grid
				px={3}
				sx={{
					backgroundColor: 'background.paper',
					height: 100,
					cursor: { xs: 'pointer', md: 'auto' },
					width: '100%',
					borderTop: '1px solid #292929'
				}}
				container
			>
				<Grid xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }} item>
					<Avatar
						src={current_track?.album.images[0].url}
						alt={current_track?.album.name}
						variant="square"
						sx={{ width: 56, height: 56, marginRight: 2 }}
					/>
					<Box>
						<Typography sx={{ color: 'text.primary', fontSize: 14 }}> {current_track?.name} </Typography>
						<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
							{' '}
							{current_track?.artists[0].name}{' '}
						</Typography>
					</Box>
				</Grid>
				<Grid
					sx={{ display: { sx: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}
					md={4}
					item
				>
					<PlayerControls
						progress={progress}
						is_paused={is_paused}
						duration={duration}
						player={localPlayer}
					/>
				</Grid>
				<Grid xs={6} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} item>
					Volume
				</Grid>
			</Grid>
		</Box>
	);
};

export default Player;
