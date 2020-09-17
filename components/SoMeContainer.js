import styles from './SoMeContainer.module.scss';

/*
* facebook, deezer, itunes, spotify, youtube
*/
function SoMeContainer(props) {
    return <div className={styles.someContainer}>{props.children}</div>
}
  
export default SoMeContainer;