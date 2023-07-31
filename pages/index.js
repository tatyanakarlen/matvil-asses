import { Container, Typography, Box } from '@mui/material';
import Nav from '../src/components/Nav';
import Panel from '../src/components/Panel';
import Dashboard from '../src/components/Dashboard';

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
      <Panel />
      <Dashboard />
      <Typography variant="h1" sx={{ color: 'white' }}>
        Hello World!
      </Typography>
    </Box>
  );
}
