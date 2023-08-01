import { Box } from '@mui/material';
import Nav from '../src/components/Nav';
import WelcomePanel from '../src/components/dashboard/Panels/WelcomePanel';
import Dashboard from '../src/components/dashboard/Dashboard';
import Footer from '../src/components/Footer/Footer';

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
      <WelcomePanel />
      <Dashboard />
      <Footer />
    </Box>
  );
}
