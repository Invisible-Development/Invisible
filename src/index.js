import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './components/pages/index';
import About from './components/pages/about';
import Contact from './components/pages/contact'

import DiscordLogin from './components/pages/discord/login'
import Server from './components/pages/discord/server'
import Dashboard from './components/pages/discord/dashboard'

import Collin from './components/pages/contributors/Collin';

import NavBar from './components/navbar';
import Footer from './components/footer'

import './assets/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/discord/login" element={<DiscordLogin />}/>
        <Route path="/discord/server/:id" element={<Server />} />
        <Route path="/discord/dashboard" element={<Dashboard />} />

        <Route path="/contributors/Collin" element={<Collin />}/>
      </Routes>
    <Footer />
  </BrowserRouter>
)