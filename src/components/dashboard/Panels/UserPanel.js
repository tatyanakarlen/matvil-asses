import ProfileCard from '../ProfileCard';
import { Typography, Box, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function UserPanel() {
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
      <Typography variant="h5">Profile</Typography>
      <Box sx={{ display: 'flex', mt: 3, gap: 4, flexWrap: 'wrap' }}>
        {users.map((user, index) => (
          <ProfileCard
            user={user}
            key={index}
            name={user.name}
            color={user.primary === true ? 'secondary.dark' : 'secondary.main'}
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
    </>
  );
}
