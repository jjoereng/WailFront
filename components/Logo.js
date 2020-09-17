import styles from './Logo.module.scss';

/*
* Black, white, red
*/


function Logo(props) {
    const color = props.color;
    return <a href={`/images/${color}logo.png`}><img className={styles.responsive} src={`/images/${color}logo.png`}  alt="wail" /></a>
  }
  
  export default Logo;