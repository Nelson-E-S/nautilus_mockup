import React from 'react';
import './App.css';
import HomeView from './components/HomeView';
import NavBar from './components/NavBar';
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
      <HomeView />
      <NavBar />
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