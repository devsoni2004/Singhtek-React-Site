import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


ReactDOM.render(
<BrowserRouter>
<Navbar/>
<Footer/>
</BrowserRouter>,
document.getElementById("root")
);

