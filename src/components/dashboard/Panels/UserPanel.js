import ProfileCard from '../ProfileCard';
import { Typography, Box, Button, Divider } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useMediaQuery } from '@mui/material';

export default function UserPanel() {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'sm')
  );
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
      {isSmallScreen && (
        <Divider
          sx={{
            color: 'rgb(66 65 65)',
            py: 1,
            borderColor: 'rgb(66 65 65)',
          }}
        />
      )}
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
            width: { xs: '100%', sm: '13rem', md: '13rem', lg: '13rem' },
            height: {
              xs: '12rem',
              sm: '15rem',
              md: '15rem',
              lg: '15rem',
            },
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
