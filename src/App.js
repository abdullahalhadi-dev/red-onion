import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Sign Up/SignUp";
import Contact from "./components/Pages/Contact/Contact";
import About from "./components/Pages/About/About";
import Service from "./components/Pages/Service/Service";




function App() {
  return (
    <div>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>   
    </div>
  );
}

export default App;
