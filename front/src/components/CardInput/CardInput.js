import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './cardinput.module.css'
import { useThemeContext } from '../../context/themeContext'

function Cabinet() {

  const { isLightTheme , setTheme} = useThemeContext()

  const inputs = [
    useInput({ name: 'title', type: 'title', id: 'title'}),
    useInput({ name: 'text', type: 'text', id: 'text'}),
    useInput({ name: 'price', type: 'price', id: 'price'}),
  ]

  const categories = [
    'nails',
    'eyebrows',
    'make up'
  ]


  return (
    <>

    {isLightTheme && <div className={styles.card_input_container_light}>
    <form className={styles.card_input_box_light}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
         <select>
           {categories.map((el) => <option value={el}>{el}</option>)}
        </select>    
        <button className={styles.button_light} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}

    {!isLightTheme && <div className={styles.card_input_container_dark}>
    <form className={styles.card_input_box_dark}>
        {inputs.map(el => <Input 
          key={el.attrs.id}
          id={el.attrs.id}
          name={el.attrs.name}
          type={el.attrs.type}
          value={el.attrs.value}
          handleChange={el.handleChange}
          />)}
         <select>
           {categories.map((el) => <option value={el}>{el}</option>)}
        </select>    
        <button className={styles.button_dark} variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>}
    
    </>
 
  )


}

export default Cabinet
