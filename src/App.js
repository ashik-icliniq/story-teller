import './App.css';
import Header from './components/Header';
import React from 'react'
import Breadcrumb from './components/Breadcrumb';
import LiveSpecialist from './components/askDoctor/LiveSpecialist';


function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb content={'Hair Loss'} />
      <LiveSpecialist />
    </div>
  );
}

export default App;
