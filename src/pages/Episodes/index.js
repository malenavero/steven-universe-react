import Nav from "./../../components/Nav"
import styles from "./Episodes.module.css"
import {useState, useEffect} from 'react'
import CardChar from "./../../components/CardChar"
import logo from "./../../img/logo.png"


function Episodes(){
    const [epiData, setEpiData] = useState(false);
    const dataKeys = ["season", "episode", "link"]

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/episodesSeeds/episodesFixed.json");
        const dataToJson = await getData.json();
        setEpiData(dataToJson);        
    }

    

    return (
        <>
        <Nav /> 
          <main className = {styles.main}>               
            <img className = {styles.logo} src={logo} alt='logo steven universe'/>
            <div className={styles.cardContainer}>
                {   epiData && (
                        epiData.map((item, index)=>{                                     
                            return <CardChar key={index} dataKeys={dataKeys} data={epiData[index]}/>
                     }) 
                     )
                    
                }                
            </div>
          </main>      
        </>
      );


}

export default Episodes;