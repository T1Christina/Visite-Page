import './App.css';
import './components/Header/Header.css';

import logo from './logo.svg';
import gmail from './Images/Icons/gmail.svg';
import github from './Images/Icons/github.svg';
import linkedIn from './Images/Icons/linkedin.svg';

import bground from '../src/Images/Background.jpg';

import { Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Meet} from './components/Meet_page/Meet';
import {Clients} from './components/Clients_page/Clients';
import {MyProjects} from './components/MyProjects_page/MyProjects';
import {Email} from './components/Email_page/Email';
import {NotFoundPage} from './components/NotFoundPage';

function App() { 
  return (
    <div className="Header">
      <header className="App-header">

        <Link to='/'> <img src={logo} className="App-logo" alt="logo" /> </Link>

        <nav className="Menu">

          <Link to='/meet'>Meet</Link>
          <Link to='/portfolio'>Clients</Link>
          <Link to='/skills'>My projects</Link>
        </nav>

          <div className="Icons">
              <Link to='/email'><img src={gmail} alt="Gmail" /></Link> 
              <Link to='https://github.com/T1Christina'><img src={github} alt="GitHub" /></Link>
              <Link to='/'><img src={linkedIn} alt="LinkedIn" /></Link>
          </div>
      </header>


      <div>
              {/* <img src={bground} width='300px' alt='background'/> */}
          </div>
      <main>
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/meet" element={<Meet/>}/>
              <Route path='/portfolio' element={<Clients/>}/>
              <Route path="/skills" element={<MyProjects/>}/>

              <Route path='/email' element={<Email/>}/>

              <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>

    </div>
  );
} 

export default App;
