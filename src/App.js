import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { NavItemList } from './utils';
import { useState } from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState(NavItemList[0]);

  console.log(currentPage);

  return (
    <div className='container-fluid'>
      <Header changePage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
