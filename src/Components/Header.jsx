import React, { useContext } from 'react'
import $ from "jquery"
import { MainContext } from './MainContext'
import { Books } from './Data/data'

function Header() {

  let {setBooks,box,setBox} = useContext(MainContext)


  let showModal=function(){
    $(".modal").addClass("show")
    $(".modal").addClass("modalDisBl")
  }



  return (
    <>
      <header>
        <h1 onClick={()=>setBooks(Books)}> Onlayn Kitab Mağazası</h1>
        <nav>
          <ul>
            <li>Ana Səhifə</li>
            <li><div className=" allBooks">Kitablar</div></li> 
            <li onClick={showModal}><div  className="box">Səbət{box.length!=0? <span className="BoxNumber">{box.length}</span>:<></>}</div></li>
            <li>Əlaqə</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header