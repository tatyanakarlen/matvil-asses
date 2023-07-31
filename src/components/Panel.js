import { Container, Typography, Box, Button, Divider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Panel() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          color: 'text.white',
          py: 5,
          px: 8,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: 4,
            borderBottom: '1px solid rgb(66 65 65) ',
          }}
        >
          <Typography variant="h7" sx={{ color: 'text.white' }}>
            Your dashboard /
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2,
            }}
          >
            <Typography variant="h4">
              Hello,{' '}
              <Typography
                sx={{ fontSize: '2rem', color: 'text.main' }}
                component="span"
              >
                Vasya P.
              </Typography>
            </Typography>

            <Box>
              <Typography
                variant="h7"
                sx={{ mr: 40, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <AddCircleOutlineIcon sx={{ fontSize: '2rem' }} />
                Edit Profile
              </Typography>
            </Box>
            <Button
              sx={{
                py: 1,
                fontSize: '0.7rem',
                color: 'text.white',
                border: '1px solid rgb(66 65 65)',
              }}
              variant="outlined"
            >
              Logout
              <LoginIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
