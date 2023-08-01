import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: '#0075FF',
        },
        colorPrimary: {
          '&.Mui-checked': {
            // Controls checked color for the thumb
            color: '#0075FF',
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          
          backgroundColor: 'white',
          '.Mui-checked.Mui-checked + &': {
            // Controls checked color for the track
            
            backgroundColor: '#0075FF',
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#323233',
      dark: '#1c1c1c',
    },
    secondary: {
      main: '#F71735',
      dark: '#0075FF',
      //    greyText:
    },
    text: {
      main: '#a1a1a3',
      white: '#FFFFFF',
    },
  },
});

// palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
