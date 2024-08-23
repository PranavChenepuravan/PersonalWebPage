import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Page from './Site/Page';
import Home from './Site/Home';
import Profile from './Site/Profile';
import Projects from './Site/Projects';
import Skills from './Site/Skills';
import Viewcertificates from './Site/Viewcertificates';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Page/>}>
         <Route path='home' element={<Home/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='projects' element={<Projects/>}/>
         <Route path='skills' element={<Skills/>}/>
         <Route path='viewcerti' element={<Viewcertificates/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
