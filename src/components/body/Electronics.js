import React from 'react'
import './Electronics.css'
const Electronics = ({ electronics }) => {
  let box = document.querySelector('.electronic-container');

  const btnpressprev = () => {
    let width = 500;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
  }

  const btnpressnext = () => {
    let width = 500;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width)
  }
  return (

    < div className="electronic-carousel" >

      <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
      <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
      <div className="electronic-container">

        {electronics.map((item) => (
          <img
            className="products"
            src={item.url}
          />
        ))}
      </div>
    </div>

  )
}

export default Electronics