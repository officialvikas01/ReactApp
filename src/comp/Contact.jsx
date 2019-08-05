import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Breadcrumb from "./parts/Breadcrumb";
import { Container, Row, Col, Form,Button } from "react-bootstrap";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Helmet title={this.props.title}></Helmet>
        <Breadcrumb title={this.props.title} subtitle={this.props.subtitle}/>
         
         <section  className="ftco-section contact-section bg-light" data-aos="slide-up" data-aos-duration={800}>
             <Container>
                 <Row className="d-flex mb-5 contact-info">
                     <div className="w-100"></div>
                      <Col md={3} className="d-flex">
                          <div className="info bg-white p-4">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                          </div>
                      </Col>
                      <Col md={3} className="d-flex">
                          <div className="info bg-white p-4">
                            <p><span>Phone:</span> <a href="tel:" rel="noopener noreferrer"  target="_blank">+ 1235 2355 98</a></p>
                          </div>
                      </Col>
                      <Col md={3} className="d-flex">
                          <div className="info bg-white p-4">
                            <p><span>Email:</span> <a target="_blank" rel="noopener noreferrer"  href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                          </div>
                      </Col>
                      <Col md={3} className="d-flex">
                          <div className="info bg-white p-4">
                            <p><span>Website:</span> <a href="yoursite.com" rel="noopener noreferrer" >yoursite.com</a></p>
                          </div>
                      </Col>
                 </Row>
                 <Row className="block-9">
                     <Col className="order-md-last d-flex" md={6}>
                          <Form className="bg-white p-5 contact-form">
                              <Form.Group>
                                  <Form.Control placeholder="Your Name"/>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control type="email" placeholder="Your Email"/>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control placeholder="Subject"/>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Control as="textarea" placeholder="Message" cols="30" rows="7"/>
                              </Form.Group>
                              <Form.Group>
                                   <Button variant="primary" type="submit" className="py-3 px-5">
                                      Send Message
                                    </Button>   
                              </Form.Group>

                          </Form>
                     </Col> 
                     <Col className="d-flex" md={6}>
                          <div id="map" className="bg-white"></div> 
                     </Col>   
                 </Row>
             </Container>
            
         </section>
      </>
    )
  }
}