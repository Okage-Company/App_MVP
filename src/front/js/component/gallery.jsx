import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/gallery.scss";
import PropTypes from "prop-types";

const Gallery = props => {
	return (
		<Fragment>
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100 img-carousel" src={props.img1} alt="First slide" />
					<Carousel.Caption>
						{/* <h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100 img-carousel" src={props.img2} alt="Second slide" />

					<Carousel.Caption>
						{/* <h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				{/* <Carousel.Item>
					<img
						className="d-block w-100 img-carousel"
						src="https://i.ibb.co/V3h15xt/3.png"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item> */}
			</Carousel>
		</Fragment>
	);
};

Gallery.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired
};

export default Gallery;
