import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from './component/projects/ProjectDetails';
import ShowCv from './component/about/ShowCv';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path='/show-cv' element={<ShowCv />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


