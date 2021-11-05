import './App.css';
import Products from './Products';
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar/>
      <div >
      <Routes>
        <Route path='/' element={<Login/> } />
        <Route path='/register' element={<Register/> } />
        <Route path='/products' element={<Products/> } />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
