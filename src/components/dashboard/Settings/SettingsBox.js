import { Typography, Box } from '@mui/material';

export default function SettingsBox({ text, settingsProp }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: {
          xs: 1,
          sm: 1,
          md: 1,
          lg: 10,
        },

        alignItems: 'center',
        height: {
          xs: '4rem',
          sm: '3rem',
          md: '3rem',
          lg: '3rem',
        },
        overflow: 'hidden',
      }}
    >
      <Typography variant="body1" sx={{ color: 'text.main', width: '18rem' }}>
        {text}
      </Typography>
      {settingsProp}
    </Box>
  );
}
