import TextField from '@mui/material/TextField';
import styled from '@emotion/styled'

const InputContainer = styled.div`
  margin: 10px;
  & * {
    width: 100%;
  }
`

export const InputNumeros = ({ id, value, onChange, name }) => {
    return <>
      <InputContainer>
        <TextField
          name={name}
          onChange={onChange}
          value={value}
          id={id.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(' ', '-')}
          label={`${id}`}
          type="number"
          InputProps={{ inputProps: { min: 0, max: 4 } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </InputContainer>
    </>
  }