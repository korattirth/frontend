import './App.css';
import Navbar from './app/layout/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './app/features/account/Login';
import Ragister from './app/features/account/Ragister';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element ={<Login />} />
        <Route path='/ragister' element ={<Ragister />} />
      </Routes>
    </>
  );
}

export default App;
