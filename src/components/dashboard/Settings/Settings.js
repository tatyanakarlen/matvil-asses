import {
  Typography,
  Box,
  Select,
  MenuItem,
} from '@mui/material';
import SettingsSwitch from './SettingsSwitch';
import SettingsBox from './SettingsBox';

export default function Settings() {
  const resolutions = [
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
          {resolutions.map((resolution) => (
            <MenuItem
              key={resolution.value}
              value={resolution.value}
              disabled={resolution.disabled}
            >
              {resolution.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
}
