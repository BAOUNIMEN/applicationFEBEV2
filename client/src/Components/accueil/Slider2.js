import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';

export default function Slider2() {
  return (
    <div className="slider_container">


<Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117832873391706242/8abb2dd1cbb2de5e80507df9a9a5028dabf105ea_1.jpg?width=1025&height=277"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117832874171842590/2591f423cd3f37131c7789bd10f491cead2f6eab_MONTBLANC_LEGEND_MODEL_EDT_DIGITAL_Static_French_1_1920x500.JPEG.jpg?width=1025&height=267"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117832873114869810/7de13f8e7f16cf324a08aa060f8b3a0bf275a6d3_Banniere_HP_1922x570_1.jpg?width=1025&height=303"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1080427868020019200/1117832874796785696/698378e6f5410c30479f916a16cf35607867835b_Banniere_HP_1920x500_avec_OCA.jpg?width=1025&height=267"
          alt="Third slide"
        />
      </Carousel.Item>

      
    </Carousel>
    </div>
  );
}