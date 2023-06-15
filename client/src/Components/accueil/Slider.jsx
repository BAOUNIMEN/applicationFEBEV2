import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <div className="slider_container">


<Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117825115518926868/8b01e5503157fe113eb5f65eb08467d934138498_Design_sans_titre_2.jpg?width=1025&height=277"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117827402677104690/df0cd737868857ce1cf4d8765248f0ca3891c6d3_PARFUMERIE_EN_LIGNE_Banniere_HP_Desktop_1920_x_500_px.jpg?width=1025&height=267"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117827402379304960/b2478fa799403b0c1e77e2ccb3dd90069bc8f93b_1920x500_Dior_FDP_P1_2.jpg?width=1025&height=267"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117827402131845261/3011bf25a888b4044f29d0dbbfe9b279f317467e_PR_Million_Parfumerie_en_Ligne_1920pxWx500p.jpg?width=1025&height=267"
          alt="Third slide"
        />
      </Carousel.Item>

      
    </Carousel>
    </div>
  );
}