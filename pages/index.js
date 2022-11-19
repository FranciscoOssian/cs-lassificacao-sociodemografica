import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import BasicSelect from '../src/components/Select'
import { InputNumeros } from '../src/components/InputNumeros';

import {Page} from '../src/components/Page'
import {Form} from '../src/components/Form'

export default function Home() {

  const [classe, setClasse] = useState('')
  const [resp, setResp] = useState(0)

  const [formState, setFormState] = useState({})

  const onSubmit = (event) => {
    const table_1 = [
      [0, 3, 7, 10, 14],
      [0, 3, 7, 10, 13],
      [0, 3, 5, 8,  11],
      [0, 3, 6, 8,  11],
      [0, 3, 6, 6,  6],
      [0, 2, 3, 5,  5],
      [0, 2, 4, 6,  6],
      [0, 2, 4, 6,  6],
      [0, 1, 3, 4,  6],
      [0, 2, 4, 4,  4],
      [0, 1, 3, 3,  3],
      [0, 2, 2, 2,  2],
    ]

    const table_ps = [
      [0, 4],
      [0, 2]
    ]

    const r = 0;

    const getV = (v) => v > 4 ? 4 : v 

    r = [
      table_1[0][getV(formState.bathrooms)],
      table_1[1][getV(formState.employees)],
      table_1[2][getV(formState.automobiles)],
      table_1[3][getV(formState.microcomputers)],
      table_1[4][getV(formState.refrigerators)],
      table_1[5][getV(formState.freezers)],
      table_1[6][getV(formState.washer)],
      table_1[7][getV(formState.dvd)],
      table_1[8][getV(formState.microwave)],
      table_1[9][getV(formState.motorcycle)],
      table_1[10][getV(formState.dryer)],
    ].reduce((partialSum, a) => partialSum + a, 0);

    r = r + formState.grau

    r = r + [
      table_ps[0][formState?.water == true ? 1 : 0],
      table_ps[0][formState?.street == true ? 1 : 0],
    ].reduce((partialSum, a) => partialSum + a, 0);


    setResp(r)

    const between = (x, y) => r >= x && r <=y 

    setClasse(
      between(45, 100) ? 'A' :
      between(38, 44) ? 'B1' :
      between(29, 37) ? 'B2' :
      between(23, 28) ? 'C1' : 
      between(17, 22) ? 'C2' : 
      between(0, 16) ? 'DE' : 'ERRO'
    )

  }

  const FormElementChange = ({target}) => {
    const { value, name } = target
    const resp = formState
    resp[name] = typeof value === 'string' ? parseInt(value) : value
    setFormState(resp)
  }

  return <Page>

    <Form
      id="program"
    >
      <div>
        <InputNumeros id="banheiros"         onChange={FormElementChange} name="bathrooms"/>
        <InputNumeros id="empregados"        onChange={FormElementChange} name="employees" />
        <InputNumeros id="automoveis"        onChange={FormElementChange} name="automobiles" />
        <InputNumeros id="microcomputadores" onChange={FormElementChange} name="microcomputers"/>
        <InputNumeros id="lavaLouca"         onChange={FormElementChange} name="dishwasher"/>
        <InputNumeros id="geladeiras"        onChange={FormElementChange} name="refrigerators"/>
        <InputNumeros id="freezers"          onChange={FormElementChange} name="freezers"/>
        <InputNumeros id="lavaRoupa"         onChange={FormElementChange} name="washer"/>
        <InputNumeros id="DVD"               onChange={FormElementChange} name="dvd"/>
        <InputNumeros id="microOndas"        onChange={FormElementChange} name="microwave"/>
        <InputNumeros id="motocicleta"       onChange={FormElementChange} name="motorcycle"/>
        <InputNumeros id="secadoraDeRoupa"   onChange={FormElementChange} name="dryer"/>
      </div>

      <div>
        <label>Grau de instrução do chefe da família a ascesso a seviços públicos</label> <br />

        <BasicSelect
          value={formState.grau}
          onSetValue={
            (v) => FormElementChange({target:{value: v, name: 'grau'}})
          }
          fields={[{
            label: 'Analfabeto / fund. incompleto',
            value: 0},{
              
            label: 'Fund. I completo / fund. II imcompleto',
            value: 1},{

            label: 'Fund. II completo / Médio incompleto',
            value: 2},{
              
            label: 'Médio completo / Sup. incompleto',
            value: 4},{
              
            label: 'Superior completo',
            value: 7}
          ]}
        />

        <label>Serviços públicos:</label><br />

        <FormGroup>
          <FormControlLabel control={
            <Switch
              onChange={
                () => FormElementChange({target:{value: !formState?.water, name: 'water'}})
              }
            />
          } label="água encanada" />
        </FormGroup>

        <FormGroup>
          <FormControlLabel control={
            <Switch
              onChange={
                () => FormElementChange({target:{value: !formState?.street, name: 'street'}})
              }
              />
          } label="rua pavimentada" />
        </FormGroup>

      </div>


    </Form>

    <div>
      gerar resultado
      <br />
      <Button onClick={onSubmit} variant="contained">GERAR</Button>
    </div>

    <br/>

    <div>
      <br/>
      A Classe é: {classe}
      <br/>
      Pontos: {resp}
    </div>


  </Page>
}
