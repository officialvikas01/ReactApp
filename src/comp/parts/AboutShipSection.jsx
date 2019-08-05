import React, { Component } from 'react'
import {Container,Row,Col} from "react-bootstrap";
import  {Link} from "react-router-dom";

export default class AboutShipSection extends Component {
  render() {
    return (
      <>
         <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<Container>
				<Row>
					<Col md="5" className="p-md-5 img img-2 d-flex justify-content-center align-items-center" data-aos="slide-up"  data-aos-duration={800} style={{backgroundImage: "url('images/about.jpg')"}} >
						<Link to="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span className="icon-play"></span>
						</Link>
					</Col> 
					<Col md="7" className="py-5 wrap-about pb-md-5 "  >
					  <div className="heading-section-bold mb-4 mt-md-5">
						<div className="ml-md-0">
							<h2 className="mb-4">Better Way to Ship Your Products</h2>
						</div>
					  </div>
					<div className="pb-md-5">
							<p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<Row className="ftco-services">
							  <Col lg="4" className="text-center d-flex align-self-stretch " data-aos="slide-up"  data-aos-duration={800}>
								<div className="media block-6 services">
								  <div className="icon d-flex justify-content-center align-items-center mb-4">
										<span className="flaticon-002-recommended"></span>
								  </div>
								  <div className="media-body">
									<h3 className="heading">Refund Policy</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								  </div>
								</div>      
							  </Col>
							  <Col   lg="4" className="text-center d-flex align-self-stretch " data-aos="slide-up"  data-aos-duration={800}>
								<div className="media block-6 services">
								  <div className="icon d-flex justify-content-center align-items-center mb-4">
										<span className="flaticon-001-box"></span>
								  </div>
								  <div className="media-body">
									<h3 className="heading">Premium Packaging</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								  </div>
								</div>    
							  </Col>
							  <Col lg="4" className="text-center d-flex align-self-stretch " data-aos="slide-up"  data-aos-duration={800}>
								<div className="media block-6 services">
								  <div className="icon d-flex justify-content-center align-items-center mb-4">
										<span className="flaticon-003-medal"></span>
								  </div>
								  <div className="media-body">
									<h3 className="heading">Superior Quality</h3>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
								  </div>
								</div>      
							  </Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
      </>
    )
  }
}
