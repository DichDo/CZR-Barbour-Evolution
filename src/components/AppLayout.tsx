import React from 'react';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Stats } from './Stats';
import { Collections } from './Collections';
import { Services } from './Services';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Stats />
      <Collections />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;

