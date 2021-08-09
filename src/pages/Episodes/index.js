//EPisodes/index.js
import Nav from "./../../components/Nav";
import styles from "./Episodes.module.css";
import {useState, useEffect} from 'react';

import logo from "./../../img/logo.png";

import CardItem from "./../../components/CardItem";
import Button from "./../../components/Button";

function Episodes(){
    const dataKeys = ["season", "episode", "link"];
    const [data, setData] = useState(false);
    const [limit, setLimit] =useState(10);
    const [totalItems, setTotalItems] = useState(false);    

    useEffect(()=>{
        fetchData();
    },[limit])

    async function fetchData(){
        const getData = await fetch("https://raw.githubusercontent.com/UncleJerry23/steven-universe-graphql-api/master/lib/utils/episodesSeeds/episodesFixed.json");
        const dataToJson = await getData.json();
        const data = dataToJson.slice(0, limit);
        const items = dataToJson.length;
        setData(data);   
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
                { (data) && (
                    data.map((item, index)=>{
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
    );
}

export default Episodes;