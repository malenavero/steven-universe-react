import Nav from "./../../components/Nav";
import styles from "./Characters.module.css";
import {useState, useEffect} from 'react';

import logo from "./../../img/logo.png";

import CardItem from "./../../components/CardItem";
import Button from "./../../components/Button";
/* import { data } from "browserslist"; */


function Characters(){    
    const dataKeys = ["species", "gem_type","gender_pronoun"];
    const [displayData, setDisplayData] = useState(false); 
    const [limit, setLimit] =useState(10);
    const [buttonText, setButtonText] = useState("load more...");
    const [totalItems, setTotalItems] = useState(false);


    useEffect(()=>{
        fetchData(limit);
    },[limit])

/*     function dataToArray(json, limit){
      let array = [];
      for(let i in json){
       array.push(json[i])       
      }
      return(array.slice(0,limit))
    } */

    async function fetchData(limit){
        const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/charactersSeeds/charactersFixed.json");
        const dataToJson = await getData.json();
        const displayData = dataToJson.slice(0, limit);
        const items = dataToJson.length;
        setDisplayData(displayData);   
        setTotalItems(items);            
    }

    function loadMore(){
       setLimit(prev => prev + 5);
       
    }


    return (
      <>
        <Nav /> 
          <main className = {styles.main}>               
            <img className = {styles.logo} src={logo} alt='logo steven universe'/>
            <div className={styles.cardContainer}>
                { (displayData) && (
                    displayData.map((item, index)=>{              
                        return <CardItem key={index} dataKeys={dataKeys} data={item}/>
                      }
                    ) 
                  )
                }                
            </div>
            {
              limit < totalItems &&  <Button text={buttonText} onClick={loadMore} />
            }
            
          </main>      
      </>
    )

    /* return (
        <>
        <Nav /> 
          <main className = {styles.main}>               
            <img className = {styles.logo} src={logo} alt='logo steven universe'/>
            <div className={styles.cardContainer}>
                {   charData && (
                        charData.map((item, index)=>{                                    
                            return <CardItem key={index} dataKeys={dataKeys} data=data={item}/>
                     }) 
                     )
                    
                }                
            </div>
          </main>      
        </>
      ); */


}

export default Characters;