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
          px: { xs: 3, sm: 12, md: 12, lg: 12 },
          py: 6,
          color: 'text.white',
        }}
      >
        <Box
          sx={{
            pb: 8,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
              md: 'row',
              lg: 'row',
            },
            alignItems: {
              xs: 'center',
            },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: {
              xs: 5,
              sm: 3,
              md: 3,
              lg: 3,
            },
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
