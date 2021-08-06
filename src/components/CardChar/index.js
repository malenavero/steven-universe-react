//CardChar index.js

import styles from "./CardChar.module.css" 

function CardChar(props){
    //recibe un array (data keys) con los keys a a listar del json
    const {dataKeys} = props;    
    const {name, image} = props.data;

    return (
        <article className={styles.card}>
            <section className={styles.nameContainer}>
                <h2 /* className={styles.name} */>{name}</h2>
            </section>
            <section className={styles.cap}>
                <h2>{name}</h2>
                <ul>
                    {dataKeys.map((item, key)=>{  
                        const value = props.data[item]
                        return <li key={key} className={styles.item}>
                                    { item === 'link' ? <a href={value} className={styles.itemKey} >Link</a> : <p className={styles.itemKey}>{item}:</p>}
                                    <p className={styles.itemValue}>{item === "link" ? "" : value ? value :"No hay info"}</p>
                               </li>
                    })}
                </ul>   
            </section>
            <section className={styles.imgContainer}>
                <img className={styles.cardImg} src={image} alt={name}/>
            </section>
        </article>  
    )
}

export default CardChar;