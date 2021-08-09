import styles from "./Button.module.css"

function Button(props){
    const { text, onClick } = props;
    return <>
    <button className={styles.button} onClick={onClick}>{text}</button>
    
    </>
}

export default Button;