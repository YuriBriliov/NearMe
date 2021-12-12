import styles from './modal.module.css'


function Modal({closeModal}) {

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      Modal
      <button onClick={() => {closeModal(false)}}>close</button>
      </div>
    </div>

  )
}

export default Modal
