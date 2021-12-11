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
import './App.css'
import {checkUser} from './redux/actions/user.actions'

function App() {
  
  const user = useSelector((state) => state.user.value)
  const dispach = useDispatch()

  useEffect(() => {
    dispach(checkUser())
  }, [])
  
  return (
    <>
    <Header/>
    <main className='container'>
    <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/mainpage' element={ <Mainpage />}/>
      <Route path='/cardinput' element={ <CardInput />}/>
      <Route path='/logout' element={ <Logout />}/>
      <Route path='/profilepage' element={ <ProfilePage />}/> 
      <Route path='/detail' element={<CardDetailPage/>}/>
      {/* последний роут - для верстки, для подключения добавления карточек работайте в CardInput */}
      <Route path='/maps' element={<MapsTest/>}/>
      {/* test maps */}

    </Routes>
    </main>
    </>

  );
}

export default App;
