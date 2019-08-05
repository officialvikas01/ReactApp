import React, { Component } from 'react'
import {Container,Row,Col} from "react-bootstrap";
import Scripts from "./parts/Scripts";
import NewsletterSection from "./parts/NewsletterSection";
import {Link} from "react-router-dom"

export default class Footer extends Component {
  render() {
    return (
      <>
        <NewsletterSection/>

        <footer className="ftco-footer bg-light ftco-section">
      <Container>
      	<Row>
      		<div className="mouse">
						<Link to="/" className="mouse-icon">
							<div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
						</Link>
					</div>
      	</Row>
        <Row className="mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Winkel</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li data-aos="slide-up"  data-aos-duration={800}><Link to="/"><span className="icon-twitter"></span></Link></li>
                <li data-aos="slide-up"  data-aos-duration={800}><Link to="/"><span className="icon-facebook"></span></Link></li>
                <li data-aos="slide-up"  data-aos-duration={800}><Link to="/"><span className="icon-instagram"></span></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Menu</h2>
              <ul className="list-unstyled">
                <li><Link to="/Shop" className="py-2 d-block">Shop</Link></li>
                <li><Link to="/About" className="py-2 d-block">About</Link></li>
                <li><Link to="/Journal" className="py-2 d-block">Journal</Link></li>
                <li><Link to="/Contact" className="py-2 d-block">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Help</h2>
              <div className="d-flex">
	              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
	                <li><Link to="/" className="py-2 d-block">Shipping Information</Link></li>
	                <li><Link to="/" className="py-2 d-block">Returns &amp; Exchange</Link></li>
	                <li><Link to="/" className="py-2 d-block">Terms &amp; Conditions</Link></li>
	                <li><Link to="/" className="py-2 d-block">Privacy Policy</Link></li>
	              </ul> 
	            </div>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><Link to="/"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
	                <li><Link to="/"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
	              </ul>
	            </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col md="12" className="text-center"> 
						  <p>
                Copyright &copy;2019 All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a  rel="noopener noreferrer" href="https://colorlib.com" target="_blank">Colorlib</a>
						 
						</p>
          </Col>
        </Row>
      </Container>
    </footer> 
      </>
    )
  }
}
