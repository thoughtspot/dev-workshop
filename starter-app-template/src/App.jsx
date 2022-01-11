import './App.css';
import { Route, Routes} from "react-router-dom";
import BurgerMenu from './components/burger/burgermenu';

import About from './components/about';


function App() {


 return (
   <div className="App">
     
     <header>
       <BurgerMenu/> 
     </header>

     <Routes>
       <Route path="/" element={<h1>Home</h1>} />
       <Route path="/about" element={<About />} />
     </Routes>
  ThoughtSpot Everywhere Starter App. 
   </div>
 );
}
export default App;
