import styles from "./CardInfo.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function CardInfo (props){

    const {lyrics, callback} = props;
    const element = <FontAwesomeIcon icon={faTimesCircle} className={styles.icon}  onClick={callback}  />

    return (
        <div className={styles.container}>
            {element}
            <p className={styles.lyrics}>{lyrics}</p>
        </div>
    )

}

export default CardInfo;