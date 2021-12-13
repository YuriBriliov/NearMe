import styles from './modal.module.css'


function Modal({active, setActive, children}) {

  return (
    <div className={styles.modalBackground}>
      
  lalala
      <button onClick={() => {setActive(false)}}>close</button>
    </div>

  )
}

export default Modal
