import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Odd from "./components/Odd";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element = {<Home />} />
        <Route path="/odd" exact element = {<Odd />} />
      </Routes>
    </Router>
  );
};

export default App; 