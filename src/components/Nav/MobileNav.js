import { Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileNav() {

  const iconContainerStyles = {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'primary.main',
  };
  return (
    <Box
      sx={{
        bgColor: '#000',
        color: 'text.white',
        display: 'flex',
        justifyContent: 'space-between',
        px: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
        },
        py: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 5,
        },
      }}
    >
      <Typography sx={{ color: 'secondary.main' }} variant="h3">
        etvnet
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={iconContainerStyles}>
          <SearchIcon sx={{ fontSize: '2rem' }} />
        </Box>
        <Box sx={iconContainerStyles}>
          <MenuIcon sx={{ fontSize: '2rem' }} />
        </Box>
      </Box>
    </Box>
  );
}
