import { Typography, Box, List, ListItem } from '@mui/material';

export default function Dashboard() {
  const listItemBaseStyles = {
    color: 'text.main',
    padding: 0,
  };

  const activeListItemStyles = {
    color: 'text.white',
    borderBottom: '3px solid #F71735',
    padding: 0,
    marginTop: '4px',
    paddingBottom: '3px',
  };

  const listItems = [
    'Settings and Profile',
    'Tarrif plan',
    'Personal Details',
    'Payment Details',
    'Watch History',
  ];
  return (
    <>
      <Box
        sx={{
          width: '90%',
          color: 'text.white',
          py: 0,
          px: 6,
          mt: '-1.5rem',
        }}
      >
        <List
          sx={{
            display: 'flex',
            mt: '-2rem',
          }}
        >
          {listItems.map((listItem, index) => (
            <ListItem key={index}>
              <Box
                sx={
                  listItem === 'Settings and Profile'
                    ? activeListItemStyles
                    : listItemBaseStyles
                }
              >
                {listItem}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
