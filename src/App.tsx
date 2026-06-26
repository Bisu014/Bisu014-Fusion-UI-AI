import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Integrations from './components/Integrations';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Faq from './components/Faq';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <CaseStudies />
        <Product />
        <Dashboard />
        <Integrations />
        <Pricing />
        <Blog />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
