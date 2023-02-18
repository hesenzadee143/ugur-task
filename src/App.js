import { useState } from 'react';
import { Books, Box, Topics } from './Components/Data/data';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import {MainContext} from './Components/MainContext';

function App() {
  let [topics,setTopics]=useState(Topics)
  let [books,setBooks]=useState(Books)
  let [box,setBox]=useState(Box)
  let [price,setPrice]=useState(0)
  return (
    <div className='contain'>
      <MainContext.Provider value={{topics,setTopics,books,setBooks,box,setBox,price,setPrice}} >
        <Header/>
        <Main/>
        <Footer/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
