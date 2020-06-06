import styles from './SoMeIcon.module.scss';

/*
* facebook, deezer, itunes, spotify, youtube
*/
function SoMeIcon(props) {
    const link = props.link;
    const logo = props.logo;
    return <a  href={link}><img className={styles.someIcon} src={`/images/${logo}.png`}  alt={`wail ${logo}`}/></a>
  }
  
  export default SoMeIcon