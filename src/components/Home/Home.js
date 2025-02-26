import './Home.css';
import {Wcards} from '../WalkCards';

import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <>
         <section className='Home_content'>
             <div>
                 <h1 className='Call_title'>Website Development For Your Business</h1>
                 {/* <p className='Call_subtitle'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,et dolore magna aliqua.</p> */}
             </div>

             <div className='container_btn'>
                 <Link to='/meet' className='btn Accent_btn1'>Learn more</Link>
                 <Link to='/email' className='btn Accent_btn2'>Send message</Link>
             </div>
                
            {/* <canvas id="canvas"></canvas> */}
        </section>
        </>
    );
  }
  
  export {Home};