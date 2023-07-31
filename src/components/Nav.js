import { theme } from '../../utils/theme';
import { Typography, Box, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Nav() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '5rem',
        bgcolor: 'primary.main',
        py: 5,
        px: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ color: 'red' }} variant="h3">
          etvnet
        </Typography>
        <List
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3,
            ml: 9,
          }}
        >
          <ListItem>About</ListItem>
          <ListItem>Dashboard</ListItem>
          <ListItem>Serials</ListItem>
          <ListItem>Movies</ListItem>
          <ListItem>Shows</ListItem>
          <ListItem>Kids</ListItem>
          <ListItem></ListItem>
        </List>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <SearchIcon />
        <Typography sx={{ ml: 2 }}>Search</Typography>
      </Box>
    </Box>
  );
}
