import { Container, Typography, Box } from '@mui/material';
// import { theme } from '../utils/theme';
import Nav from '../src/components/Nav';

export default function Home() {
  return (
    <Box
      sx={{
        padding: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'primary.dark',
      }}
    >
      <Nav />
      <Typography variant="h1" sx={{ color: 'white' }}>
        Hello World!
      </Typography>
    </Box>
  );
}
