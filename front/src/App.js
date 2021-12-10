import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Mainpage from './components/Mainpage/Mainpage'
import Profile from './components/Prifile/Profile'
import Logout from './components/Logout/Logout'

import './App.css'

function App() {
  return (
    <>
    <Header/>
    <main className='container'>
    <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/mainpage' element={ <Mainpage />}/>
      <Route path='/profile' element={ <Profile />}/>
      <Route path='/logout' element={ <Logout />}/>

    </Routes>
    </main>
    </>

  );
}

export default App;
