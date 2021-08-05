// Info taken from: UncleJerry23/steven-universe-graphql-api 
import styles from './Home.module.css';
// Components
import CardHome from '../../components/CardHome';
import Nav from '../../components/Nav';
// Img
import logo from './../../img/logo.png';
import watermelon from './../../img/watermelon.png';
import cookieCat from './../../img/cookieCat.png';
import shield from './../../img/shield.png';
//
import { Link } from 'react-router-dom';



function Home() { 

  return (
    <>
    <Nav /> 
      <main className = {styles.main}>               
        <img className = {styles.logo} src={logo} alt='logo steven universe'/>
        <div className = {styles.cardContainer}>
          <Link to="/characters"> <CardHome title="Characters"  img={watermelon}/></Link>
          <Link to="/episodes">   <CardHome title="Episodes"    img={cookieCat}/> </Link>
          <Link to="/songs">      <CardHome title="Songs"       img={shield}/>    </Link>
        </div>
      </main>      
    </>
  );
}

export default Home;
