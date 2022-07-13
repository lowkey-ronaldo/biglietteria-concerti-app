import { Routes, Route, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './routes/navigation/navigation.component';

import Login from './routes/login/Login';
import Home from './routes/home/home.component';
import Biglietteria from './routes/biglietteria/biglietteria.component';
import Prenotazione from './routes/prenotazione/prenotazione.component';
import { useEffect } from 'react';
import PostTest from './routes/test/PostTest';

const App = () =>  {

  const navigate = useNavigate(); 

  useEffect(() => {
    if(!localStorage.getItem("user")){
      navigate('/login');
    }
  }, [])

  return (
    <>
    
       <Routes>
        <Route path = '/' element = {<Navigation/>} >
          <Route index element = {<Home/>} />
          <Route path='login' element = {<Login/>}  />
          <Route path='biglietteria/*' element={<Biglietteria/>}  />
          <Route path='prenotazione' element={<Prenotazione/>}  />
          <Route path='test' element = {<PostTest/>}  />
        </Route>
      </Routes> 
  </>);
}

export default App;
