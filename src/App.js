import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import Article from './components/Article';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to="/user/1" className='nav-link'>Rohit</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/user/2" className='nav-link'>Vansh</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/user/3" className='nav-link'>Druvh</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/user/4" className='nav-link'>Vanisha</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/user/5" className='nav-link'>Sunita</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/user/6" className='nav-link'>Anita</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-4'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to="/article/1" className='nav-link'>Article 1</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/article/2" className='nav-link'>Article 2</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/article/3" className='nav-link'>Article 3</Link>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>
          <Routes>
            <Route path="/user/1" exact element={<User id={1} />} />
            <Route path="/user/2" exact element={<User id={2} />} />
            <Route path="/user/3" exact element={<User id={3} />} />
            <Route path="/user/4" exact element={<User id={4} />} />
            <Route path="/user/5" exact element={<User id={5} />} />
            <Route path="/user/6" exact element={<User id={6} />} />


            <Route path='/article/:id' element={<Article />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
