import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Sports from './components/Sports/Sports';
import TotalService from './components/TotalService/TotalService';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
           <Switch>
               <Route exact path="/">
                   <Home></Home>
               </Route>
               <Route path="/home">
                   <Home></Home>
               </Route>
               <Route path="/sports">
                   <Sports></Sports>
               </Route>
               <Route path="/services">
                   <Services></Services>
               </Route>
               <Route path="/about">
                   <About></About>
               </Route>
               <Route path="/totalService">
                   <TotalService></TotalService>
               </Route>
               <Route exact path="*">
                   <ErrorPage></ErrorPage>
               </Route>
           </Switch>
           <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
