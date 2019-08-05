import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'; 
import {Container,Row,Col} from "react-bootstrap";

const TestimonialsData = require("../json/testimonials.json")

export default class Testimonials extends Component {
  render() {
    return (
      <>
         <section className="ftco-section testimony-section">
      <Container>
        <Row className="justify-content-center mb-5 pb-3">
          <Col md="7" className="heading-section" data-aos="slide-up"  data-aos-duration={800}>
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          </Col>
        </Row>
        <Row data-aos="slide-up"  data-aos-duration={800}>
          <Col  md="12">
            <OwlCarousel className="carousel-testimony" items={3} autoplay>
            {  TestimonialsData.map((data,id) => ( 
              <div className="item" key={id}>
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-5" style={{backgroundImage : `url(${data.image})` }}  >
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left"></i>
                    </span>
                  </div>
                  <div className="text">
                    <p className="mb-5 pl-4 line">{data.data}</p>
                    <p className="name">{data.name}</p>
                    <span className="position">{data.position}</span>
                  </div>
                </div>
              </div> 
            ))}
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section> 
      </>
    )
  }
}
