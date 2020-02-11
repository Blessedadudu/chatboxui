import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Chatbody from './components/Chatbody/Chatbody';
import './components/responsive.scss';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="sideChat">
        <Sidebar/>
        <Chatbody/>
      </div>
      
  
    </div>
  );
}

export default App;
