import { Typography, Box, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useMediaQuery } from '@mui/material';

export default function WelcomePanel() {
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );

  return (
    <>
      <Box
        sx={{
          width: '100%',
          color: 'text.white',
          bgcolor: {
            xs: 'primary.mainMobile',
            sm: 'primary.mainMobile',
            md: 'primary.dark',
            lg: 'primary.dark',
            xl: 'primary.dark',
          },

          px: {
            xs: 2,
            sm: 3,
            md: 8,
            lg: 8,
          },
          py: {
            xs: 1,
            sm: 2,
            md: 7,
            lg: 5,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: {
              xs: 0,
              sm: 0,
              md: 4,
              lg: 4,
              xl: 4,
            },
            borderBottom: {
              md: '1px solid rgb(66 65 65)',
              lg: '1px solid rgb(66 65 65)',
              xl: '1px solid rgb(66 65 65)',
            },
          }}
        >
          <Typography
            variant="h7"
            sx={{
              color: 'text.white',
              mt: {
                xs: 1,
                sm: 1,
              },
            }}
          >
            Your dashboard /
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: {
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 2,
              },
            }}
          >
            <Typography variant="h4">
              Hello,{' '}
              <Typography
                sx={{ fontSize: '2rem', color: 'text.main' }}
                component="span"
              >
                Vasya P.
              </Typography>
            </Typography>
            {!isSmallScreen && (
              <Box>
                <Typography
                  variant="h7"
                  sx={{ mr: 40, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <AddCircleOutlineIcon
                    sx={{
                      fontSize: '2rem',
                      mb: {
                        xs: 2,
                        sm: 2,
                      },
                    }}
                  />
                  Edit Profile
                </Typography>
              </Box>
            )}
            <Button
              sx={{
                py: {
                  xs: 2,
                  sm: 2,
                  md: 1,
                  lg: 1,
                },
                px: {
                  xs: 1,
                  sm: 1,
                  md: 2.5,
                  lg: 2.5,
                },

                color: 'text.white',
                border: '1px solid rgb(66 65 65)',
              }}
              variant="outlined"
            >
              {!isSmallScreen && 'Logout'}

              <LoginIcon
                sx={{
                  ml: {
                    md: 1,
                    lg: 1,
                  },
                  fontSize: {
                    xs: '2rem',
                    sm: '2rem',
                    md: '1.5rem',
                    lg: '2rem',
                  },
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
