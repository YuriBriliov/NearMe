import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Mainpage from './components/Mainpage/Mainpage'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Mainpage />}/>

    </Routes>

    </>

  );
}

export default App;
