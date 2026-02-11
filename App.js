import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    // Create stars animation
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      starsContainer.appendChild(star);
    }

    // Rockets
    const rocketsContainer = document.querySelector('.rockets');
    for (let i = 0; i < 3; i++) {
      const rocket = document.createElement('div');
      rocket.className = 'rocket';
      rocket.innerHTML = '<i class="fas fa-rocket"></i>';
      rocket.style.left = Math.random() * 20 + '%';
      rocket.style.top = Math.random() * 20 + 'vh';
      rocketsContainer.appendChild(rocket);
    }

    // Scroll effect for header
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] text-[#e2e8f0] overflow-x-hidden">
      <div className="stars fixed inset-0 z-0"></div>
      <div className="moon fixed top-[5%] right-[5%] w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] bg-gradient-radial from-white via-gray-200 to-gray-400 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.5)] animate-float z-10"></div>
      <div className="rockets fixed inset-0 pointer-events-none z-20"></div>

      <Header activePage={activePage} setActivePage={setActivePage} />

      <main className="relative z-30 pt-20">
        {activePage === 'Home' && <Home />}
        {activePage === 'About' && <About />}
        {activePage === 'Skills' && <Skills />}
        {activePage === 'Experience' && <Experience />}
        {activePage === 'Achievements' && <Achievements />}
        {activePage === 'Contact' && <Contact />}
      </main>

      <footer className="relative z-30 bg-[#020617]/95 border-t border-white/10 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Shubham Patel | <a href="https://mom.os" className="underline text-indigo-300">MOM.os</a> | Last updated: 09:30 AM IST, October 01, 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
