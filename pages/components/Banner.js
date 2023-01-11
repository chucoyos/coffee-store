import styles from '../../styles/Banner.module.css'
const Banner = (props) => {
  return (
    <>
      <div className={styles.container}>
        <h1>Coffee Connosieur</h1>
        <p>Coffee description</p>
        <button 
          className={styles.button} 
          onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </>
  )
} 

export default Banner