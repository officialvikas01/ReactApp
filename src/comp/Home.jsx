import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet";
import OwlCarousel from 'react-owl-carousel';
import AboutShipSection from "./parts/AboutShipSection";
import MiniProductsSection from "./parts/MiniProductsSection"
import AchivementCounting from "./parts/AchivementCounting"
import Testimonials from "./parts/Testimonials"


const BestSeller = require("./json/bestseller.json")
const NewProducts = require("./json/newproducts.json")

export default class Home extends Component {
	render(props) {
		return (
			<>
				<Helmet title={this.props.title}></Helmet>
				<section id="home-section" className="hero">

					<OwlCarousel className="home-slider js-fullheight owl-carousel" items={1} autoplay >
						<div className="slider-item item js-fullheight">
							<div className="overlay"></div>
							<div className="container-fluid p-0">
								<div className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" >
									<div className="one-third order-md-last img js-fullheight" >
										<Image src="../images/bg_1.jpg" alt="" />
									</div>
									<div className="one-forth d-flex js-fullheight align-items-center" data-aos="slide-up" data-aos-duration={800} >
										<div className="text">
											<span className="subheading">Winkel eCommerce Shop</span>
											<div className="horizontal">
												<h3 className="vr" >Stablished Since 2000</h3>
												<h1 className="mb-4 mt-3">Catch Your Own <br /><span>Stylish &amp; Look</span></h1>
												<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

												<p><Link to="/" className="btn btn-primary px-5 py-3 mt-3">Discover Now</Link></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="slider-item item js-fullheight">
							<div className="overlay"></div>
							<div className="container-fluid p-0">
								<div className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end"  >
									<div className="one-third order-md-last img js-fullheight" >
										<Image src="../images/bg_2.jpg" alt="" />
									</div>
									<div className="one-forth d-flex js-fullheight align-items-center" data-aos="slide-up" data-aos-duration={800}>
										<div className="text">
											<span className="subheading">Winkel eCommerce Shop</span>
											<div className="horizontal">
												<h3 className="vr" >Best eCommerce Online Shop</h3>
												<h1 className="mb-4 mt-3">A Thouroughly <span>Modern</span> Woman</h1>
												<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>

												<p><Link to="/" className="btn btn-primary px-5 py-3 mt-3">Shop Now</Link></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</section>

				<AboutShipSection />

				<section className="ftco-section bg-light">
					<Container>
						<Row className="justify-content-center mb-3 pb-3">
							<div md="12" className="heading-section text-center" data-aos="slide-up" data-aos-duration={800}>
								<h2 className="mb-4">BestSeller Products</h2>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							</div>
						</Row>
					</Container>
					<Container>
						<MiniProductsSection data={BestSeller} customClass={{ lg: 3 }} productLimit={3} />
					</Container>
				</section>

				<section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
					<Container>
						<Row>
							<Col md="8" className="d-flex align-items-stretch">
								<div className="img" style={{ backgroundImage: "url(images/about-1.jpg)" }} ></div>
							</Col>
							<Col md="4" className="py-md-5" data-aos="slide-up" data-aos-duration={800}>
								<div className="text py-3 py-md-5">
									<h2 className="mb-4">New Women's Clothing Summer Collection 2019</h2>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
									<p><Link to="/shop" className="btn btn-white px-4 py-3">Shop now</Link></p>
								</div>
							</Col>
						</Row>

						<Row>
							<Col md="5" className="order-md-last d-flex align-items-stretch">
								<div className="img img-2" style={{ backgroundImage: "url(images/about-2.jpg)" }} ></div>
							</Col>
							<Col md="7" className="col-md-7 py-3 py-md-5" data-aos="slide-up" data-aos-duration={800}>
								<div className="text text-2 py-md-5">
									<h2 className="mb-4">New Men's Clothing Summer Collection 2019</h2>
									<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
									<p><Link to="/shop" className="btn btn-white px-4 py-3">Shop now</Link></p>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="ftco-section bg-light">
					<Container>
						<Row className="justify-content-center mb-3 pb-3">
							<div md="12" className="heading-section text-center" data-aos="slide-up" data-aos-duration={800}>
								<h2 className="mb-4">New Products</h2>
								<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
							</div>
						</Row>
					</Container>
					<Container>
						<MiniProductsSection data={NewProducts} customClass={{ lg: 3 }} productLimit={4} />
					</Container>
				</section>

				<AchivementCounting />
				<Testimonials />
			</>
		)
	}
}
