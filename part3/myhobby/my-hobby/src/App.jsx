import { useState } from 'react'
import './App.css'
import HobbyIntroduction from './components/Introduction'
import MyProjects from './components/Projects';
import data from '../src/data.json';

function App() {
 

 

  return (
    <>
    <div className='App'>
      <h1>My Hobby: Making Dream Catchers</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
     
    </>
  );
}

export default App




