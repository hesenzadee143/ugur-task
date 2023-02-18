/* eslint-disable eqeqeq */
import React, { useContext, useRef } from 'react'
import $ from "jquery"
import { MainContext } from './MainContext'
import { Books, Topics } from './Data/data'
import 'remixicon/fonts/remixicon.css';


function Header() {

  let topicInput=useRef()

  let {setBooks,box,setTopics} = useContext(MainContext)




  let showModal=function(){
    $(".modal").addClass("show")
    $(".modal").addClass("modalDisBl")
  }

  let searchTopic = function () {
    let value=topicInput.current.value


    let finded=[]

    for (let x = 0; x < Topics.length; x++) {
      const topic = Topics[x];

      if(topic.toLowerCase().includes(value.toLowerCase())){
       finded.push(topic)
      }
    }
      setTopics(finded)
  }


  return (
    <>
      <header>
        <h1 onClick={()=>setBooks(Books)}> Onlayn Kitab Mağazası</h1>
        <input className='form-control' ref={topicInput} onChange={searchTopic} placeholder='Movzu...' />
        <i className="ri-menu-3-fill"></i>
        <nav>
          <ul>
            <li>Ana Səhifə</li>
            <li><div onClick={()=>setBooks(Books)} className=" allBooks">Kitablar</div></li> 
            <li onClick={showModal}><div  className="box">Səbət{box.length!=0? <span className="BoxNumber">{box.length}</span>:<></>}</div></li>
            <li>Əlaqə</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header