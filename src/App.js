import Menu from './Component/Menu/Menu';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          {/* <Route path="/" exact component={} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
