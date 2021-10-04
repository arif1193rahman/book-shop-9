import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
