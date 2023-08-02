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
          px: {
            xs: 2,
            sm: 3,
            md: 8,
            lg: 8,
          },
          py: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
          mt: {
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
          },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            bgcolor: {
              xs: 'primary.mainMobile',
              sm: 'primary.mainMobile',
              md: 'primary.dark',
              lg: 'primary.dark',
              xl: 'primary.dark',
            },
            borderRadius: '10px',
            p: 4,
          }}
        >
          <UserPanel />
          <Settings />
        </Box>
      </Box>
    </>
  );
}
