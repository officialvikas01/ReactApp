import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap";

export default class Breadcrumb extends Component {
    render() {
        return (
            <>
                <div className="hero-wrap hero-bread" style={{ backgroundImage: "url(images/bg_6.jpg)" }}>
                    <Container>
                        <Row className="no-gutters slider-text align-items-center justify-content-center">
                            <Col md="9" className="text-center" data-aos="slide-up" data-aos-duration={800}>
                                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>{this.props.title}</span></p>
                                <h1 className="mb-0 bread">{this.props.subtitle}</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
