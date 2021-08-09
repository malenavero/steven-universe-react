import Nav from "./../../components/Nav";
import styles from "./Characters.module.css";
import {useState, useEffect} from 'react';

import logo from "./../../img/logo.png";

import CardItem from "./../../components/CardItem";
import Button from "./../../components/Button";



function Characters(){    
  const dataKeys = ["species", "gem_type","gender_pronoun"];
  const [displayData, setDisplayData] = useState(false); 
  const [limit, setLimit] =useState(10);
  const [totalItems, setTotalItems] = useState(false);


  useEffect(()=>{
      fetchData(limit);
  },[limit])

  async function fetchData(limit){
      const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/charactersSeeds/charactersFixed.json");
      const dataToJson = await getData.json();
      const displayData = dataToJson.slice(0, limit);
      const items = dataToJson.length;
      setDisplayData(displayData);   
      setTotalItems(items);            
  }

  function loadMore(){
      setLimit(prev => prev + 10);       
  }


  return (
    <>
      <Nav /> 
        <main className = {styles.main}>               
          <img className = {styles.logo} src={logo} alt='logo steven universe'/>
          <div className={styles.cardContainer}>
              { (displayData) && (
                  displayData.map((item, index)=>{
                      if (item.name){
                        return <CardItem key={index} dataKeys={dataKeys} data={item}/>
                      } else {
                        return <></>
                      }        
                    }
                  ) 
                )
              }                
          </div>
          {
            limit < totalItems &&  <Button text="load more..." onClick={loadMore} />
          }            
        </main>      
    </>
  )
}

export default Characters;