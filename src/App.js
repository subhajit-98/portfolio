import Menu from './Component/Menu/Menu';
import HomePage from './Component/HomePage/HomePage';
import AboutPage from './Component/AboutPage/AboutPage'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={ HomePage } />
          <Route path="/about" exact component={ AboutPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
