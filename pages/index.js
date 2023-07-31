import { Box } from '@mui/material';
import Nav from '../src/components/Nav';
import Panel from '../src/components/Panel';
import Dashboard from '../src/components/dashboard/Dashboard';

export default function Home() {
  return (
    <Box
      sx={{
        padding: 0,
        width: '100vw',
        bgcolor: 'primary.dark',
      }}
    >
      <Nav />
      <Panel />
      <Dashboard />
    </Box>
  );
}
