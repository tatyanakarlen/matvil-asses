import { Typography, Box, List, ListItem, Button } from '@mui/material';
import ProfileCard from './ProfileCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Dashboard() {
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

  const users = [
    {
      name: 'Vasya P',
      primary: true,
    },
    {
      name: 'Polina G',
      primary: false,
    },
  ];

  return (
    <>
      <Box
        sx={{
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
            <ListItem sx={{ justifyContent: 'start' }} key={index}>
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
      <Box
        sx={{
          color: 'text.white',
          py: 0,
          px: 8,
          mt: 3,
        }}
      >
        <Box sx={{ bgcolor: 'primary.main', borderRadius: '10px', p: 4 }}>
          <Typography variant="h5">Profile</Typography>
          <Box sx={{ display: 'flex', mt: 3, gap: 4, flexWrap: 'wrap' }}>
            {users.map((user, index) => (
              <ProfileCard
                user={user}
                key={index}
                name={user.name}
                color={
                  user.primary === true ? 'secondary.dark' : 'secondary.main'
                }
              />
            ))}
            <Box
              sx={{
                position: 'relative',
                bgcolor: 'primary.dark',
                width: '13rem',
                height: '15rem',
                borderRadius: '10px',
                p: 3,
              }}
            >
              <AddCircleOutlineIcon
                sx={{
                  position: 'absolute',
                  top: '45%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '2.5rem',
                }}
              />
              <Button
                sx={{
                  position: 'absolute',
                  width: '100%',
                  bottom: '24px',
                  left: '50%',
                  color: 'text.white',
                  transform: 'translateX(-50%)',
                }}
                variant="text"
              >
                Add Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
