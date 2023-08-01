import { useState } from 'react';
import { Box, Switch, FormControlLabel } from '@mui/material';

export default function SettingsSwitch({}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '9rem',
      }}
    >
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={checked ? 'Yes' : 'No'}
      />
    </Box>
  );
}
