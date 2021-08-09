//CardItem index.js

import { useState } from "react";
import CardInfo from "../CardInfo";
import styles from "./CardItem.module.css" 
/* import CardInfo from "./../../components/CardInfo"
 */
function CardItem(props){
    //recibe un array (data keys) con los keys a a listar del json
    const {dataKeys} = props;    
    const {name, image} = props.data;
    const [lyrics, setLyrics] = useState(false)    

    function showLyrics(e){
        setLyrics(e.target.attributes.lyrics.value);
    }
    function hideLyrics(e){
        setLyrics("");
    }

    return (
        <>
            <article className={styles.card}>
                <section className={styles.nameContainer}>
                    <h2>{name}</h2>
                </section>
                <section className={styles.cap}>
                    <h2>{name}</h2>
                    <ul>
                        {dataKeys.map((item, key)=>{  
                            const value = props.data[item]
                            return <li key={key} className={styles.item}>
                                        { 
                                            item === 'link' ?                                     
                                                <a href={value} className={styles.itemKey} >+Info</a> 
                                            : item === 'lyrics' ?                                             
                                                <p className={styles.itemKey}  >Lyrics</p> 
                                            : <p className={styles.itemKey}>{item}:</p>
                                        }
                                        {
                                            item === "link" ? 
                                            <></>
                                            : item=== "lyrics" ?
                                                <p className={styles.itemLyric} lyrics={value} onClick={showLyrics}>Sing Out Loud...</p>
                                            : <p className={styles.itemValue}>
                                                {value ? value : "No info"}
                                            </p>
                                        }                                    
                                </li>
                        })}
                    </ul> 
                </section>
                <section className={styles.imgContainer}>
                    <img className={styles.cardImg} src={image} alt={name}/>
                </section> 
                { lyrics && <CardInfo lyrics={lyrics} callback={hideLyrics}/> } 
            </article>
        </>  
    )
}
export default CardItem;