
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
