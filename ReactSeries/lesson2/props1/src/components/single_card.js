import React from 'react'

function Card({card_img, star_img, rate_number, available, price}) {
  return (
    <div>
        <div className='card'>
            <img src={card_img}/>
            <div className='card--stats'>
                <img src={star_img}></img>
                <span>{rate_number}</span>
                <span className='gray'>({available}).</span>
                <span className='gray'>Hotel</span>
            </div>
            <p> Life starts after taking rest</p>
            <p><span>From ${price} <span>/month</span></span></p>
        </div>
    </div>
  )
}

export default Card