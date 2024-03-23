import React from 'react'
import Card from './single_card'

function Main() {
  return (
    <div className='card-container'>
      <Card
        card_img="https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/129/2020/09/07065056/21-5-Canal-Central-Hotel-2018-19.jpg"
        star_img="https://www.shutterstock.com/shutterstock/photos/429574270/display_1500/stock-vector-star-icon-vector-classic-rank-isolated-trendy-flat-favorite-design-star-web-site-pictogram-429574270.jpg"
        rate_number={5.0}
        available={3}
        price={670}
      />
      <Card
        card_img="https://i0.wp.com/kenwoodtravel.co.uk/blog/wp-content/uploads/Untitled-design-1-1.png?fit=2310%2C1208&ssl=1"
        star_img="https://www.shutterstock.com/shutterstock/photos/429574270/display_1500/stock-vector-star-icon-vector-classic-rank-isolated-trendy-flat-favorite-design-star-web-site-pictogram-429574270.jpg"
        rate_number={3.9}
        available={6}
        price={345}
      />
      <Card
        card_img="https://cdn.luxe.digital/media/20230830105642/most-expensive-hotels-luxe-digital-1200x600.jpg"
        star_img="https://www.shutterstock.com/shutterstock/photos/429574270/display_1500/stock-vector-star-icon-vector-classic-rank-isolated-trendy-flat-favorite-design-star-web-site-pictogram-429574270.jpg"
        rate_number={5.0}
        available={623}
        price={456}
      />
  
    </div>
  );
}

export default Main