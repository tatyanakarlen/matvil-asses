import { Typography, Box, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function DesktopNav() {
  const listItemBaseStyles = {
    color: 'text.main',
  };

  const activeListItemStyles = {
    color: 'text.white',
    borderBottom: '3px solid #F71735',
    padding: 0,
    margin: '3px 16px 0px 16px',
  };

  const menuItems = [
    'About',
    'Dashboard',
    'Serials',
    'Movies',
    'Shows',
    'Kids',
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '5rem',
        bgcolor: 'primary.main',
        py: 5,
        px: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ color: 'secondary.main' }} variant="h3">
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
          {menuItems.map((listItem, index) => (
            <ListItem
              sx={
                listItem === 'Dashboard'
                  ? activeListItemStyles
                  : listItemBaseStyles
              }
              key={index}
            >
              {listItem}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <SearchIcon sx={{ color: 'text.white' }} />
        <Typography sx={{ ml: 2, color: 'text.white' }}>Search</Typography>
      </Box>
    </Box>
  );
}
