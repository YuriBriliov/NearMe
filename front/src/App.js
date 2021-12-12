import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Mainpage from './components/Mainpage/Mainpage'
import CardInput from './components/CardInput/CardInput'
import Logout from './components/Logout/Logout'
import ProfilePage from './components/ProfilePage/ProfilePage'
import CardDetailPage from './components/CardDetailPage/CardDetailPage'
import MapsTest from './components/MapsTest/MapsTest'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import Places from './components/Places/Places'
import { useThemeContext } from './context/themeContext'


// установка свитчера темы
// yarn add react-switch-selector

import './App.css'
import {checkUser} from './redux/actions/user.actions'

function App() {
  
  const user = useSelector((state) => state.user.value)
  const dispach = useDispatch()

  useEffect(() => {
    dispach(checkUser())
  }, [])
  

    const { isLightTheme , setTheme} = useThemeContext()

  

  return (
    <>
    <Header/>
    {isLightTheme && <main className='container'>

    <Routes>
      <Route path='/' element={ <Mainpage />}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/cardinput' element={ <CardInput />}/>
      <Route path='/logout' element={ <Logout />}/>
      <Route path='/profilepage' element={ <ProfilePage />}/> 
      <Route path='/detail' element={<CardDetailPage/>}/>
      <Route path='/maps' element={<MapsTest/>}/>
      <Route path='/card/:id' element={<CardDetailPage/>}/>
      <Route path='/places' element={<Places/>}/>
    </Routes>
     
    </main>}

    {!isLightTheme && <main className='container_dark'>
    <Routes>
      <Route path='/' element={ <Mainpage />}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/cardinput' element={ <CardInput />}/>
      <Route path='/logout' element={ <Logout />}/>
      <Route path='/profilepage' element={ <ProfilePage />}/> 
      <Route path='/detail' element={<CardDetailPage/>}/>
      <Route path='/maps' element={<MapsTest/>}/>
      <Route path='/card/:id' element={<CardDetailPage/>}/>
      <Route path='/places' element={<Places/>}/>
    </Routes>
    </main>}



    </>

  );
}

export default App;
