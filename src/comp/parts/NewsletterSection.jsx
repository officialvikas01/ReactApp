import React, { Component } from 'react'
import {Container,Row,Col,Form,Button} from "react-bootstrap"

export default class NewsletterSection extends Component {
  render() {
    return (
      <>
         	<hr/>

            <section className="ftco-section-parallax">
            <div className="parallax-img d-flex align-items-center">
            <Container>
            <Row className="d-flex justify-content-center py-5">
                <Col md="7" className="text-center heading-section ftco-animate">
                <h2>Subcribe to our Newsletter</h2>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="8" >
                    <Form action="#" className="subscribe-form">
                        <Form.Group className="d-flex">
                        <Form.Control  placeholder="Enter email address" />
                        <Button  className="submit px-3" >SUBSCRIBE</Button>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Container>
            </div>
            </section>
      </>
    )
  }
}
