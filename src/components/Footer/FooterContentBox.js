import { Typography, Box } from '@mui/material';

export default function FooterContentBox({ data }) {
  return (
    <>
      <Box
        sx={{
          color: 'text.white',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {data.map((item, index) => (
          <Typography variant="h7" key={index}>
            {item}
          </Typography>
        ))}
      </Box>
    </>
  );
}
