import Home from "./pages/home";
import Activities from './pages/activities';
import CovidData from "./pages/covidData";
import Vacafy from "./pages/vacafy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} >
          </Route>
          <Route exact path="/covid-data" component={CovidData}>
          </Route>
          <Route exact path="/activities" component={Activities}></Route>
          <Route exact path="/vacafy-my-home" component={Vacafy}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
