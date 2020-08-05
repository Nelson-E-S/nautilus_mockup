import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectionHeader from './components/SectionHeader';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionFooter from './components/SectionFooter';

function App() {
  return (
    <div className="App">
      <SectionHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionFooter />
    </div>
  );
}

export default App;