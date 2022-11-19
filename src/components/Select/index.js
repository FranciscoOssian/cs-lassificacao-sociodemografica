import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Wrapper } from './styles'

export default function BasicSelect({fields, value, onSetValue}) {

  return <Wrapper>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{value}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          label={value}
          onChange={(e)=>onSetValue(e.target.value)}
        >
            {
                fields.map(
                    (e,i) => <MenuItem key={i} value={e.value}>{e.label}</MenuItem>
                )
            }
        </Select>
      </FormControl>
    </Box>
  </Wrapper>
}
