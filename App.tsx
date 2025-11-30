import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}

export default App;