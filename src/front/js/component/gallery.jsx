import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/gallery.scss";

const Gallery = () => {
	return (
		<Fragment>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100 img-carousel"
						src="https://i.ibb.co/pZ6169w/2.png"
						alt="First slide"
					/>
					<Carousel.Caption>
						{/* <h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 img-carousel"
						src="https://i.ibb.co/5cV4YqK/1.png"
						alt="Second slide"
					/>

					<Carousel.Caption>
						{/* <h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 img-carousel"
						src="https://i.ibb.co/V3h15xt/3.png"
						alt="Third slide"
					/>

					<Carousel.Caption>
						{/* <h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Fragment>
	);
};

export default Gallery;
