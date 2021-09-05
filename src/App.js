import React, { useState, useEffect  } from "react"
import Menu from './Component/Menu/Menu';
import HomePage from './Component/HomePage/HomePage';
import AboutPage from './Component/AboutPage/AboutPage'
import Contact from './Component/Contact/Contact';
import Education from './Component/Education/Education';
import Projects from './Component/Projects/Projects'
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Blog from './Component/Blog/Blog';
import Blogdetails from './Component/Blog/BlogDetils';
import Error404 from './Component/Error/Error404';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
require('dotenv').config();

function App() {

  // const [currentTheme, currentTheme] = useState(false);
  const [isDayTheme, setIsDayTheme] = useState(JSON.parse(localStorage.getItem('IsDayTheme')));
  const changeTheme = () => {
    setIsDayTheme(!isDayTheme)
    localStorage.removeItem('IsDayTheme');
    localStorage.setItem('IsDayTheme', !isDayTheme);
}

  // useEffect(() => {
  //   console.log(localStorage.getItem('IsDayTheme'));
  // })
  // console.log(isDayTheme);

  return (
    <div className={(isDayTheme) ? 'App day_theme' : 'App' }>
      <BrowserRouter>
        <Menu changetheme={changeTheme} curentDayTheme={isDayTheme} />
        <Switch>
          <Route path="/" exact component={ HomePage } />
          <Route path="/about" exact component={ AboutPage } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/education" exact component={ Education } />
          <Route path="/projects" exact component={ Projects } />
          {/* <Route path="/work-experience" exact component={ WorkExperience } /> */}
          <Route path="/blog" exact component={ Blog } />
          <Route path="/blog/page/:page_no" component={ Blog } />
          <Route path="/blog/:content_id" exact component={ Blogdetails } />
          <Route component={ Error404 } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
