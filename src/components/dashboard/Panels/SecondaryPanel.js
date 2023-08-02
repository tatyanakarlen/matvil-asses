import { Box, List, ListItem } from '@mui/material';

export default function SecondaryPanel() {
  const listItemBaseStyles = {
    color: 'text.main',
  };

  const activeListItemStyles = {
    color: 'text.white',
    borderBottom: '3px solid #F71735',
    marginTop: '6px',
    paddingBottom: '6px',
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
          color: 'text.white',
          // py: 0,
          // px: 6,
          px: {
            xs: 0,
            sm: 1,
            md: 6,
            lg: 6,
            // px right left
          },
          py: {
            xs: 1,
            sm: 1,
            md: 1,
            lg: 0,
            // py top bottom
          },

          mt: {
            xs: '2.5rem',
            sm: '2.5rem',
            md: '-1.5rem',
            lg: '-1.5rem',
            xl: '-1.5rem',
          },
        }}
      >
        <List
          sx={{
            display: 'flex',
            mt: '-2rem',
            overflow: 'scroll',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {listItems.map((listItem, index) => (
            <ListItem
              sx={{ justifyContent: 'start', whiteSpace: 'nowrap' }}
              key={index}
            >
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
