import Nav from "./../../components/Nav"
import styles from "./Songs.module.css"
import {useState, useEffect} from 'react'
import CardItem from "./../../components/CardItem"
import logo from "./../../img/logo.png"


function Characters(){
    const [charData, setCharData] = useState(false);
    const dataKeys = ["composers", "vocalilist", "lyrics"]


    useEffect(()=>{
        fetchData();    

    },[])

    async function fetchData(){
        const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/songsSeeds/songsFixed.json");
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
                            return <CardItem key={index} dataKeys={dataKeys} data={charData[index]}/>
                     }) 
                     )
                    
                }                
            </div>
          </main>      
        </>
      );


}

export default Characters;