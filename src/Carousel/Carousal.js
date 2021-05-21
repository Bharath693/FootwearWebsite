import React from "react";
import { Carousel } from "react-bootstrap";
import Nike from "../Assests/Nike.jpg";
import puma from "../Assests/puma.jpg";
import sparx from "../Assests/sparx.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Carousal.css";

function Caurosal() {
  return (
    <div>
      <Carousel className="Carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={sparx} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>sparx</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Nike} alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nike</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={puma} alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>bentlee</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Caurosal;
