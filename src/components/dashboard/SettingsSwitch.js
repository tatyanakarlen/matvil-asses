import { useState } from 'react';
import {
  Typography,
  Box,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
} from '@mui/material';

export default function SettingsSwitch({}) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
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
  );
}
