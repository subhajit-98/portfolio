import Menu from './Component/Menu/Menu';
import HomePage from './Component/HomePage/HomePage';
import AboutPage from './Component/AboutPage/AboutPage'
import Contact from './Component/Contact/Contact';
import Education from './Component/Education/Education';
import Projects from './Component/Projects/Projects'
import WorkExperience from './Component/WorkExperience/WorkExperience';
import Blog from './Component/Blog/Blog';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={ HomePage } />
          <Route path="/about" exact component={ AboutPage } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/education" exact component={ Education } />
          <Route path="/projects" exact component={ Projects } />
          <Route path="/work-experience" exact component={ WorkExperience } />
          <Route path="/blog" exact component={ Blog } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
