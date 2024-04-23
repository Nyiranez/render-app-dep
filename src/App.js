// import logo from './logo.svg';
import './App.css';
import {Home} from './pages/home';
import {Contact} from './pages/contact';
import {AboutUs} from './pages/aboutUs';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
