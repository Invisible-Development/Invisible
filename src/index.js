import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './pages/index';
import About from './pages/about';
import Contact from './pages/contact'

import DiscordLogin from './pages/discord/login'
import Server from './pages/discord/server'
import Dashboard from './pages/discord/dashboard'

import Collin from './pages/contributors/Collin';

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