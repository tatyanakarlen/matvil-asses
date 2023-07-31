import { Container, Typography, Box } from '@mui/material';
import Nav from '../src/components/Nav';
import Panel from '../src/components/Panel';
import Dashboard from '../src/components/dashboard/Dashboard';

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
    </Box>
  );
}
