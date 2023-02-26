/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, {  useContext, useRef } from 'react'
import {  Books,  Topics } from './Data/data'
import "bootstrap/dist/css/bootstrap.min.css" 
import $ from "jquery"
import { MainContext } from './MainContext'

function Main() {

  let topicInput=useRef()

  let {topics,setTopics,books,setBooks,box,setBox,price,setPrice} = useContext(MainContext)

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
  let addForTopic =function (html) {

    let filteredBooks=Books.filter((x)=>x.topic.includes(html))
   setBooks(filteredBooks)
  }
  let hiddenModal= function () {
      $(".modal").removeClass("show")
      $(".modal").removeClass("modalDisBl")
  }
  let addBooks = function (idBook) {

    let id=idBook

    let findedBook=books.find((book)=>book.id==id)

    let haveBook=box.find((book)=>book.id==id);
    if (haveBook==undefined) {
      box.push(findedBook)
      setBox([...box])
      price+=findedBook.price
      setPrice(price)
    }else{        
      alert("Secdiyiniz kitab elave olunub")
    }
  }
  let deleteBook =function (idBook) {
    let id=idBook
  
    let findBook=box.find((x)=>x.id==id)

    let filteredBook=box.filter((x)=>x!=findBook)

   setBox(filteredBook)
    price-=findBook.price
    setPrice(price)
  }
  let emptyBox = function () {
  
    setBox([])  
    setPrice(0)
  }
  return (
    <div className='mainParent d-flex'>
      <div className='search p-2'>
        <input className='form-control' ref={topicInput} onChange={searchTopic} placeholder='Axtar...' />
        <div className='topicList'>
          <div onClick={()=>setTopics(Topics)} className="topic">All</div>
          {
            topics.map((topic, i) => <div key={i} onClick={() => addForTopic(topic)} className="topic">{topic}</div>)
          }
        </div>
      </div>
      <div className='main'>
        <h2>Endirimdə olan Kitaplar</h2>
        <div className='section' id='section'>
          {
           books.length==0?
           <h1>Axtardığınız mövzuda kitab tapılmamışdır.</h1>
           : books.map((book, i) =>
           <div className="book" key={i}>
             <div className="frame" >
               <img src={book.image} />
             </div>
             <div className="about">
               <div>{book.name}</div>
               <div><span> Yazar:</span><span> {book.author}</span></div>
               <div><span>Qiymət:</span> <span>{book.price} AZN</span></div>
             </div>
             <button onClick={()=>addBooks(book.id)} className="addBox btn btn-primary">Səbətə At</button>
           </div>)
          }
        </div>
      </div>

      <div className="modal fade show" id="exampleModalLive" tabIndex="-1" aria-labelledby="exampleModalLiveLabel" aria-modal="true" role="dialog">  <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Seçilmiş Kitablar</h5>
            <button type="button" onClick={hiddenModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          {box.length==0?
          <h3>Zəhmət olmasa Səbətə kitab əlavə edin</h3>
          :box.map((book, i) =>
          <div className="book" key={i}>
            <div className=" d-flex justify-content-end"> <button onClick={()=>deleteBook(book.id)} className=" deleteBook m-1 btn btn-close"></button></div>
            <div className="frame" >
              <img src={book.image} />
            </div>
            <div className="about">
              <div>{book.name}</div>
              <div><span> Yazar:</span><span> {book.author}</span></div>
              <div><span>Qiymət:</span> <span>{book.price} </span></div>
            </div>
          </div>)

          }
          </div>
          <div className="modal-footer">
            <button type="button" onClick={emptyBox} className="btn btn-secondary" data-bs-dismiss="modal">Səbəti boşalt</button>
            <button type="button" className="btn btn-success">Ödəniş et ({price } - AZN)</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main