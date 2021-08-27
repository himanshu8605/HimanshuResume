
import './App.css';
import Particle from "react-particles-js";
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import particlesConfig from "./assets/particlesConfig.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";


function App() {
  
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
      <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/Home' component={Home} />
                        
                         <Route path='*' component={NotFound} /> 
                    </Switch>
                </Router>
                </div>
                </>
    );
}

export default App;
