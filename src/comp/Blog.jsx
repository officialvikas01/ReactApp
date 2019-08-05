import React, { Component } from 'react' 
import {Container,Row,Col} from "react-bootstrap";
import {Helmet} from "react-helmet";
import Breadcrumb from "./parts/Breadcrumb"; 
import BlogPosts from "./parts/BlogPosts";
import BlogSidebar from "./parts/BlogSidebar";

export default class Blog extends Component {
  render() {
    return (
      <>
       <Helmet title={this.props.title}></Helmet>
        <Breadcrumb title={this.props.title} subtitle={this.props.subtitle}/>
         
        <section className="ftco-section ftco-degree-bg">
          <Container>
              <Row>
                <Col lg="8" data-aos="slide-up"  data-aos-duration={800}>
                    <Row>
                        <BlogPosts/>
                    </Row>
                </Col> 
                <Col lg="4" className="sidebar" data-aos="slide-up"  data-aos-duration={800}>
                    <BlogSidebar/>   
                </Col>   
              </Row>
          </Container>
        </section>    
      </>
    )
  }
}
