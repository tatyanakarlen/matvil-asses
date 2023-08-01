import { Box } from '@mui/material';
import Nav from '../src/components/Nav/Nav';
import WelcomePanel from '../src/components/dashboard/Panels/WelcomePanel';
import Dashboard from '../src/components/dashboard/Dashboard';
import Footer from '../src/components/Footer/Footer';

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.dark',
        overflow: 'hidden'
      }}
    >
      <Nav />
      <WelcomePanel />
      <Dashboard />
      <Footer />
    </Box>
  );
}
