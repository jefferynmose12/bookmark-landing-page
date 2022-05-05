import React from 'react';
import Date from './components/Date';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Heading from './components/Heading';
import Main from './components/Main';
import Question from './components/Question';

function App() {
  return (
    <div className="font-mono mx-auto">
      <Heading />
      <Main />
      <Features />
      <Download />
      <Question />
      <Date />
      <Footer />
    </div>
  );
}

export default App;
