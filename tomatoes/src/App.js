import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import classes from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Varieties from './components/Varieties/Varieties';
import content from './data/content.json';
import NutritionalValues from './components/NutritionalValues/NutritionalValues';
import Benefit from './components/Benefit/Benefit';

function HomePage(props){


  return(
    <div className="App">
      <Hero />
      <NutritionalValues contentNutritionalValues={content.nutritionalValues}/>
      <Varieties contentVarieties={content.varieties} />
      <Benefit />
      <Footer contentNewsletter={content.newsletter}/>
    </div>
  )
}

export default function App(){

  const [topPos, setTopPos] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
      setTopPos(window.pageYOffset > 100)
      );
    }
  }, []);

  return(
    <Router>
        <div className={`${classes.App__header} ${topPos ? `${classes.App__showHeader}` : ""}`} >
          <Header/>
        </div>
        <Route exact path='/' component={HomePage} />

    </Router>
  );
}
