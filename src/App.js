import { Fragment } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import CardContainer from './Components/CardContainer/CardContainer';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import NewsDetails from './Components/NewsDetails/NewsDetails';


function App() {
  return <Fragment>
    <Header/>
    <NavBar/>
    <Search/>
    <Home/>
    <CardContainer/>
    {/* <NewsDetails/> */}
  </Fragment>
}

export default App;
