
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './authentication/PrivateRoute';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import MyPortfolio from './pages/MyPortfolio';
import NotFound from './pages/NotFound';
import Purchase from './pages/Purchase';

function App() {
  return (
    <div>
      <Navbar>   
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='purchase' element={
          <PrivateRoute>
            <Purchase/>
          </PrivateRoute>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}>
        </Route>
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
