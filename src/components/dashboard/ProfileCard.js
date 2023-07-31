import { Typography, Box, List, ListItem } from '@mui/material';

export default function ProfileCard({}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'primary.dark',
        width: '15rem',
        height: '15rem',
        borderRadius: '10px', 
        p: 4
      }}
    >
       <Box sx={{display: 'flex', flexDirection: 'column', gap: 1.5}}>
        <Box sx={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'blue'}}>
        </Box>
        <Typography sx={{color: 'text.main'}}>Vasya P</Typography>
        </Box>
    </Box>
  );
}
