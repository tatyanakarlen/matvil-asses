import { Box, Select, MenuItem } from '@mui/material';

export default function SettingsSelect({ data }) {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Select
        defaultValue={data[0].value}
        sx={{
          color: 'black',
          backgroundColor: 'text.white',
          width: '9rem',
          height: '2.2rem',
        }}
      >
        {data.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
