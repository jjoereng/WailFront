import styles from './Logo.module.scss';

/*
* Black, white, red
*/
function Logo(props) {
    const color = props.color;
    return <img className={styles.responsive} src={`/images/${color}logo.png`}  alt="wail" />
  }
  
  export default Logo