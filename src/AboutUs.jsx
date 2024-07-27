import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome To Flower Lillia</p>
      <p className="about-us-content">
      Flower Lillia (フラワーリリア, Furawa Riria) is a shop in Harvest Moon 64. Basil, Lillia and Popuri live here. Lillia sells vegetable, grass and flower seeds to the player, and gives information about the harvested crops' sale prices.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
      It is open from 9am until 5pm, and is closed on Sundays. When it is open, Lilia will always be here. Popuri will often be outside (unless it is raining), and Basil and Elli will sometimes be found here. A raffle is also held here.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
      During Winter, Flower Lillia holds a raffle for chances to earn prizes. 
      </p>
    </div>
  );
}

export default AboutUs;
