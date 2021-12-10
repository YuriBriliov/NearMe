import Input from '../Input/Input'
import useInput from '../../hooks/useInput'
import styles from './profile.module.css'

function Cabinet() {

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
    <div className={styles.card_input_container}>
    <form className={styles.card_input_box}>
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
        <button variant="primary" type="submit">
          Submit
        </button>
      </form>
    </div>

  )



}

export default Cabinet
