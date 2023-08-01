import {
  Typography,
  Box,
  Select,
  MenuItem,
} from '@mui/material';
import SettingsSwitch from './SettingsSwitch';
import SettingsBox from './SettingsBox';

export default function Settings() {
  const options = [
    { value: 'HD', label: 'HD' },
    { value: 'BLU-RAY', label: 'BLU-RAY' },
    { value: 'VHS', label: 'VHS' },
  ];
  return (
    <>
      <Typography sx={{ mt: 10 }} variant="h5">
        Settings
      </Typography>

      <Box
        sx={{
          borderTop: '1px solid rgb(66 65 65)',
          mt: 3,
          pt: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <SettingsBox
          text={'Open video in new window'}
          settingsProp={<SettingsSwitch />}
        />
        <SettingsBox
          text={'Open video in new window'}
          settingsProp={<SettingsSwitch />}
        />
        <SettingsBox
          text={'Open video in new window'}
          settingsProp={<SettingsSwitch />}
        />

        <Select defaultValue="HD" sx={{ color: 'red' }}>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
}
