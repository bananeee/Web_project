import React from "react";

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import logo from "../../images/logo.jpg";

import Carousel from "react-bootstrap/Carousel";

import "./SlideShowStyle.css";

const SlideShow = () => {
    return (
        <div>

            <Carousel indicators="true">
                <Carousel.Item>
                    <img
                        className="image"
                        src={logo}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="image"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SlideShow;
