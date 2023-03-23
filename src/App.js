import './App.css';
import Header from './components/Header';
import React from 'react'
import Breadcrumb from './components/Breadcrumb';


function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumb content={'Hair Loss'} />
    </div>
  );
}

export default App;
