import React from 'react'
import {  books, topics } from './Data/data'

function Main() {
  return (
    <div className='mainParent d-flex'>
      <div className='search p-2'>
        <input className='form-control' placeholder='Axtar...'/>
        <div className='topicList'>
          {
            topics.map((topic,i)=><div key={i} className="topic">{topic}</div>)
          }
        </div>
      </div>
      <div className='main'>
      <h2>Endirimdə olan Kitaplar</h2>
      <div className='section' id='section'>
        {
          books.map((book,i)=>
          <div className="book" key={i}>
            <div className="frame" >
              <img src={book.image}/> 
            </div>
            <div className="about">
              <div>{book.name}</div>
              <div><span> Yazar:</span><span> {book.author}</span></div>
              <div><span>Qiymət:</span> <span>{book.price} AZN</span></div>
            </div>
            <button className="addBox btn btn-primary">Səbətə Əlavə et</button>
          </div>)
        }
      </div>
      </div>
    </div>
  )
}

export default Main