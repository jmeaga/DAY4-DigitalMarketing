import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
//import { Domain } from '@mui/icons-material';
function App() {
  return (
     <BrowserRouter>
<Routes>
<Route path="/" element={<Signup/>}></Route>
 <Route path="/Signup" element={<Signup/>}></Route>
 <Route path="/Login" element={<Login/>}></Route>
 <Route path="/Home" element={<Home/>}></Route>
 </Routes>
 </BrowserRouter>
    //<Login/>
    //<div><Home/></div>
  );
}

export default App;
