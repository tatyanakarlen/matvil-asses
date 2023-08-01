import { Typography, Box, Select, MenuItem } from '@mui/material';
import SettingsSwitch from './SettingsSwitch';
import SettingsBox from './SettingsBox';
import SettingsSelect from './SettingsSelect';

export default function Settings() {
  const resolutions = [
    { value: 'HD', label: 'HD' },
    { value: 'BLU-RAY', label: 'BLU-RAY' },
    { value: 'VHS', label: 'VHS' },
  ];

  const qualities = [
    { value: 'HIGH', label: 'HIGH' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'LOW', label: 'LOW' },
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
          text={'Quality of picture for archives'}
          settingsProp={<SettingsSelect data={resolutions} />}
        />
        <SettingsBox
          text={'Quality of picture for live viewing'}
          settingsProp={<SettingsSelect data={qualities} />}
        />
      </Box>
    </>
  );
}
