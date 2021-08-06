import styles from "./CardChar.module.css"

function CardChar(props){
    const {name, image} = props.data
    console.log(props)

    return (
            <div className={styles.card}>     
                <p className={styles.name}>{name}</p>
                <div className={styles.imgContainer}>
                    <img className={styles.cardImg} src={image} alt={name}/>
                </div>                
            </div>

)
}

export default CardChar;