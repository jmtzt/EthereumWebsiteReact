import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        
        <Switch>
          
          <Route exact path="/"> 
            <Login/>   
          </Route>
          
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
