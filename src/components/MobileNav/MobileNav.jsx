import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, List } from '@mui/icons-material';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';




const MobileNav = () => {

    const [value, setValue] = useState(0);
    const nav = useNavigate();

    return (
		<Box sx={{ display: { xs: 'block', md: 'none' } }}>
			<BottomNavigation
				sx={{ backgroundColor: 'background.paper', color: 'text.secondary' }}
				showLabels
				value={value}
				onChange={(e, value) => setValue(value)}
			>
                <BottomNavigationAction  label="Home"  icon={<Home />} onClick={()=> nav('/')} />
                <BottomNavigationAction  label="Ditt bibliotek"  icon={<List />} onClick={()=> nav('/library')} />

            </BottomNavigation>
		</Box>
	);
}

export default MobileNav;