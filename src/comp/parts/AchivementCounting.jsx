import React, { Component } from 'react'
import {Row,Container,Col} from "react-bootstrap";
import CountUp from 'react-countup';

export default class AchivementCounting extends Component {
  render() {
    return (
      <>
        <section className="ftco-section ftco-counter img"  style={{backgroundImage: 'url(images/bg_4.jpg)' }} >
    	<Container>
    		<Row className="justify-content-center py-5">
    			<Col md="10" >
		    		<Row>
		          <Col md="3" className="d-flex justify-content-center counter-wrap  " data-aos="slide-up"  data-aos-duration={500}>
		            <div className="block-18 text-center">
		              <div className="text">
		                  <CountUp  className="number" start={0} end={10000} delay={2}>0</CountUp>
		                <span>Happy Customers</span>
		              </div>
		            </div>
		          </Col>
		         <Col md="3" className="d-flex justify-content-center counter-wrap  " data-aos="slide-up"  data-aos-duration={500}>
		            <div className="block-18 text-center">
		              <div className="text">
		                 <CountUp  className="number" start={0} end={100} delay={2}>0</CountUp>
		                <span>Branches</span>
		              </div>
		            </div>
		          </Col>
		          <Col md="3" className="d-flex justify-content-center counter-wrap  " data-aos="slide-up"  data-aos-duration={500}>
		            <div className="block-18 text-center">
		              <div className="text">
		                  <CountUp  className="number" start={0} end={1000} delay={2}>0</CountUp>
		                <span>Partner</span>
		              </div>
		            </div>
		          </Col>
		          <Col md="3" className="d-flex justify-content-center counter-wrap  " data-aos="slide-up"  data-aos-duration={500}>
		            <div className="block-18 text-center">
		              <div className="text">
		                <CountUp  className="number" start={0} end={100} delay={2}>0</CountUp>
		                <span>Awards</span>
		              </div>
		            </div>
		          </Col>
		        </Row>
	        </Col>
        </Row>
    	</Container>
    </section>
      </>
    )
  }
}
