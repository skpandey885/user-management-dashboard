import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import UserDetails from './pages/userDetails';


function App() {
  return (


    <BrowserRouter>

<Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path = "users/signup" element={<SignUp/>}/>
  <Route path = "users/login" element={<LogIn/>}/>
  <Route path = "users/details" element={<UserDetails/>}/>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
