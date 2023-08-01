import { Typography, Box } from '@mui/material';
import FooterContentBox from './FooterContentBox';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export default function Footer() {
  const footerContent = ['About company', 'Contact Us', 'Terms Of Use'];

  return (
    <>
      <Box
        sx={{
          mt: 6,
          width: '100%',
          bgcolor: 'primary.main',
          px: 12,
          py: 6,
          color: 'text.white',
        }}
      >
        <Box
          sx={{
            pb: 8,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 2,
            borderBottom: '1px solid rgb(66 65 65)',
          }}
        >
          <FooterContentBox data={footerContent} />
          <FooterContentBox data={footerContent} />
          <FooterContentBox data={footerContent} />
          <FooterContentBox data={footerContent} />
          <ArrowCircleUpIcon sx={{ fontSize: '3rem', color: 'text.main' }} />
        </Box>
        <Typography sx={{ textAlign: 'center', mt: 5, color: 'text.main' }}>
          2002-2005 Ethnic TV Corporation Television Network Matvil Corp
        </Typography>
      </Box>
    </>
  );
}
