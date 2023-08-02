import { Typography, Box } from '@mui/material';

export default function SettingsBox({ text, settingsProp }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        alignItems: 'center',
        width: '30rem',
        height: '3rem',
      }}
    >
      <Typography sx={{ color: 'text.main', width: '18rem' }}>
        {text}
      </Typography>
      {settingsProp}
    </Box>
  );
}