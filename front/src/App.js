import { Routes, Route, useNavigate, useLocation, useParams } from "react-router-dom";
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Mainpage from './components/Mainpage/Mainpage'
import CardInput from './components/CardInput/CardInput'
import Logout from './components/Logout/Logout'
import ProfilePage from './components/ProfilePage/ProfilePage'
import CardDetailPage from './components/CardDetailPage/CardDetailPage'
import Places from './components/Places/Places'
import { useThemeContext } from './context/themeContext'
import Modal from './components/Modal/Modal'



import './App.css'

function App() {

   let location = useLocation();
   let navigate = useNavigate();
   let background = location.state && location.state.background;


    const { isLightTheme , setTheme} = useThemeContext()

    function closeModal() {  
      console.log('baba');    
      navigate(-1)
    }
  

  return (
    <>
    <Header/>
    {isLightTheme && <main className='container'>

    <Routes location={background || location}>
      <Route path='/' element={ <Mainpage />}/>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/cardinput' element={ <CardInput />}/>
      <Route path='/logout' element={ <Logout />}/>
      <Route path='/profilepage' element={ <ProfilePage />}/> 
      <Route path='/detail' element={<CardDetailPage/>}/>
      <Route path='/places' element={<Places/>}/>
    </Routes>   

      {background && 
      <Routes>
        <Route path='/register' element={ <Register closeModal={closeModal}/>}/>
        <Route path='/login' element={<Login closeModal={closeModal}/>} />
        <Route path='/detail' element={<CardDetailPage closeModal={closeModal}/>}/>
      </Routes>}  

    </main>}

    {!isLightTheme && <main className='container_dark'>
    <Routes location={background || location}>
      <Route path='/login' element={ <Login />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/' element={ <Mainpage />}/>
      <Route path='/cardinput' element={ <CardInput />}/>
      <Route path='/logout' element={ <Logout />}/>
      <Route path='/profilepage' element={ <ProfilePage />}/> 
      <Route path='/detail' element={<CardDetailPage/>}/>
      <Route path='/places' element={<Places/>}/>
    </Routes>

    {background && 
      <Routes>
        <Route path='/register' element={ <Register closeModal={closeModal}/>}/>
        <Route path='/login' element={<Login closeModal={closeModal}/>} />
        <Route path='/detail' element={<CardDetailPage closeModal={closeModal}/>}/>
      </Routes>}

    </main>}



    </>

  );
}

export default App;
