
import * as styles from "./CardHome.module.css"

function CardHome(props){
    const {title, img} = props;
    return (
        <>
            <article className={styles.cardHome}>                
                <img className={styles.cardImg} src={img} alt="watermelon dog"></img>
                <span className={styles.titleContainer}>
                    <p className={styles.cardTitle}>{title}</p>
                </span>               
            </article>
        </>
    )
}

export default CardHome;