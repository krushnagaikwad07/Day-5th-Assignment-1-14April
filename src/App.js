import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './component/Assignment1/Home';
import Contact from './component/Assignment1/Contact';

function App() {
  return (
   <>
   <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/contact" element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
