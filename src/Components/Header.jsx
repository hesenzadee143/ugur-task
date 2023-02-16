import React from 'react'

function Header() {
  return (
    <>
        <header>
        <h1>Onlayn Kitab Mağazası</h1>
        <nav>
          <ul>
            <li>Ana Səhifə</li>
            <li><div  className=" allBooks">Kitablar</div></li>
            <li><div className="box">Səbət <span className="BoxNumber"></span></div></li>
            <li>Əlaqə</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header