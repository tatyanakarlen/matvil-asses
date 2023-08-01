import { Box } from '@mui/material';
import Settings from './Settings/Settings';
import SecondaryPanel from './Panels/SecondaryPanel';
import UserPanel from './Panels/UserPanel';

export default function Dashboard() {
  return (
    <>
      <SecondaryPanel />
      <Box
        sx={{
          color: 'text.white',
          py: 0,
          px: 8,
          mt: 3,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ bgcolor: 'primary.main', borderRadius: '10px', p: 4 }}>
          <UserPanel />
          <Settings />
        </Box>
      </Box>
    </>
  );
}
