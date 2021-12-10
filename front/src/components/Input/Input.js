import styles from './input.module.css'

function Input({id, name, type, value, handleChange}) {

  return (
    <div key={id}>
      <input className={styles.inputfield} type={type} onChange={handleChange} id={id} name={name} placeholder={name}/>
    </div>
  )

}

export default Input 
