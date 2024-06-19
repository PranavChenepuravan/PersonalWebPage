import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Page from './Site/Page';
import Home from './Site/Home';
import Profile from './Site/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Page/>}>
         <Route path='home' element={<Home/>}/>
         <Route path='profile' element={<Profile/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
