
import './App.css'
import Desc from './components/Desc';
import Carousal from './components/Navbar/Carousal';
import Navbar from './components/Navbar/Navbar';
import Order from './components/Order';

import TextDisplay from './components/displaytext';


function App() {
 

  return (
     <div>
      <Navbar/>
      <Carousal/>
      <TextDisplay/>
      <Desc/>
       <Order/>
      

     </div>
  );
}

export default App
