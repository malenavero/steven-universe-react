import styles from "./Nav.module.css"
import {Link} from "react-router-dom"


function Nav (){
    const navItems = ["Home", "Characters", "Episodes", "Songs"];


    return (
        <ul className={styles.navList}>
            {
                navItems.map((item, index)=>{
                    let linkTo = `/${item}`.toLowerCase();
                    return <Link className={styles.link}to={linkTo} key={index}>{item}</Link>
                })
            }
        </ul>
    )
}

export default Nav;