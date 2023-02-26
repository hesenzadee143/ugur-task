/* eslint-disable eqeqeq */
 import React, { useContext, useRef } from 'react'
 import $ from "jquery"
 import { MainContext } from './MainContext'
 import { Books, Topics } from './Data/data'
 import 'remixicon/fonts/remixicon.css';


function Header() {

   let topicInput=useRef()

   let {setBooks,box} = useContext(MainContext)

   let showModal=function(){
     $(".modal").addClass("show")
     $(".modal").addClass("modalDisBl")
   }

   let searchTopic = function () {
     let value=topicInput.current.value

     let finded=[]
     let filteredBooks=[]

     for (let x = 0; x < Topics.length; x++) {
       const topic = Topics[x];

       if(topic.toLowerCase().includes(value.toLowerCase())){
        finded.push(topic)
       }
     }
     
     for (let z = 0; z < finded.length ; z++) { 

      let findTopic=finded[z]

      for (let y = 0; y < Books.length; y++) {
        const book = Books[y];
        if (findTopic==book.topic[0]) {  
          let findBook=filteredBooks.filter(l=>l.id==book.id)
 
          if(findBook.length==0){
            filteredBooks.push(Books[y]) 
          }
        }
        if (findTopic==book.topic[1]) {  
          let findBook=filteredBooks.filter(l=>l.id==book.id)
 
          if(findBook.length==0){
            filteredBooks.push(Books[y]) 
          }
        }
        if (findTopic==book.topic[2]) {  
          let findBook=filteredBooks.filter(l=>l.id==book.id)
 
          if(findBook.length==0){
            filteredBooks.push(Books[y]) 
          }
        }
      }
    }
    
    setBooks(filteredBooks)
   }

  return (
    <>
        <nav className="navbar-expand-lg position-sticky top-0">
          <div className="header  container-fluid ">
            <div className='d-flex justify-content-between align-items-center'>
            <h1 onClick={()=>setBooks(Books)}>Onlayn Kitab Mağazası</h1>
            <nav>
              <ul>
                <li onClick={()=>setBooks(Books)}>Ana Səhifə</li>
                <li><div onClick={()=>setBooks(Books)} className=" allBooks">Kitablar</div></li> 
                <li onClick={showModal}><div  className="box">Səbət{box.length!=0? <span className="BoxNumber">{box.length}</span>:<></>}</div></li>
                <li>Əlaqə</li>
              </ul>
            </nav>
            <input ref={topicInput} onChange={searchTopic} className="form-control navbar-toggler" type="search" placeholder="Movzu..." aria-label="Search" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <i className="ri-menu-3-fill"></i>{box.length!=0? <span className="BoxNumber">{box.length}</span>:<></>}
            </button>
            </div>
            <div className="collapse" id="navbarSupportedContent" >
              <nav>
                <ul>
                  <li onClick={()=>setBooks(Books)}>Ana Səhifə</li>
                  <li>
                    <div className=" allBooks">Kitablar</div>
                  </li>
                  <li onClick={showModal}>
                    <div className="box">Səbət{box.length!=0? <span className="BoxNumber">{box.length}</span>:<></>}</div>
                  </li>
                  <li>Əlaqə</li>
                </ul>
              </nav>
              <form className="d-flex" role="search">
              </form>
            </div>
          </div>
        </nav>
    </>
  );
}

export default Header