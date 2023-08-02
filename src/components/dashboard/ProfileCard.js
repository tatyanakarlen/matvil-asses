import { Typography, Box, Button } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export default function ProfileCard({ name, color, user }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            backgroundColor: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PermIdentityIcon sx={{ fontSize: '2rem' }} />
        </Box>
        <Typography sx={{ color: 'text.main' }}>{name}</Typography>
      </Box>
      <Box>
        {user.primary === true ? (
          <Button
            variant="text"
            sx={{
              color: 'secondary.dark',
              mt: {
                sx: 2,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
              },
            }}
          >
            Main Profile
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              color: 'secondary.main',
              mt: {
                sx: 0,
                sm: 0,
                md: 0,
                lg: 9,
                xl: 9,
              },
              outline: '0.1px solid #F71735',
            }}
          >
            Delete Profile
          </Button>
        )}
      </Box>
    </Box>
  );
}
