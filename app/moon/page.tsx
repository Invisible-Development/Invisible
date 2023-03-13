'use client'
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [moonPosition, setMoonPosition] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const moonHeight = document.getElementById('moon').offsetHeight;
      const newMoonPosition = 100 - ((scrollPosition / (windowHeight - moonHeight)) * 40) - 20;
      setMoonPosition(newMoonPosition);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="moon" style={{ bottom: `${moonPosition}%` }} id="moon">
        <img src="/moon.png" alt="Moon" />
      </div>
    </div>
  );
}

export default App;