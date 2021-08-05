import Nav from "./../../components/Nav"
import styles from "./Characters.module.css"
import {useState, useEffect} from 'react'
import CardChar from "./../../components/CardChar"
import logo from "./../../img/logo.png"


function Characters(){
    const [charData, setCharData] = useState(false);

    useEffect(()=>{
        fetchData();    

    },[])

    async function fetchData(){
        const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/charactersSeeds/charactersFixed.json");
        const dataToJson = await getData.json();
        setCharData(dataToJson);
        
    }

    

    return (
        <>
        <Nav /> 
          <main className = {styles.main}>               
            <img className = {styles.logo} src={logo} alt='logo steven universe'/>
            <div className={styles.cardContainer}>
                {   charData && (
                        charData.map((item, index)=>{                                     
                            return <CardChar key={index} data={charData[index]}/>
                     }) 
                     )
                    
                }                
            </div>
          </main>      
        </>
      );


}

export default Characters;