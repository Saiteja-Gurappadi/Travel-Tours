import './App.css';
import AllPrograms from './Components/ALL Programs/AllPrograms.js';
import Destinations from './Components/Destinations/Destinations.js';
import Firstpage from './Components/FirstPage/Firstpage.js';
import Nav from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Store from './Components/Store/Store.js';
import Blog from './Components/Blog/Blog.js';
import Contactus from './Components/ContactUS/Contactus.js';


function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route index element={<Firstpage/>} />
      <Route path='/destinations' exact Component={Destinations}/>
      <Route path='/allprograms' exact element={<AllPrograms/>}/>
      <Route path='/store' exact element={<Store/>}/>
      <Route path='/blog' exact element={<Blog/>}/>
      <Route path='/contact' exact element={<Contactus/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
