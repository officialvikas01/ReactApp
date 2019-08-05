import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Container,Row,Col} from "react-bootstrap";
import {Helmet} from "react-helmet";
import Breadcrumb from "./parts/Breadcrumb";
import MiniProductsSection from "./parts/MiniProductsSection"
import SidebarFilter from "./parts/SidebarFilter"

const BestSeller = require("./json/bestseller.json")

export default class Shop extends Component {
  render() {
    return (
      <>
           <Helmet title={this.props.title}></Helmet>
           <Breadcrumb title={this.props.title} subtitle={this.props.subtitle}/>

           <section className="ftco-section bg-light">
    	     <Container>
    		   <Row>
               <Col md="8" lg="10" className="order-md-last">
                  <MiniProductsSection data={BestSeller} customClass={{lg:4}} /> 

                  <Row className="mt-5">
		          <Col className="text-center">
		            <div className="block-27">
		              <ul>
		                <li><Link to="#">&lt;</Link></li>
		                <li className="active"><span>1</span></li>
		                <li><Link to="#">2</Link></li>
		                <li><Link to="#">3</Link></li>
		                <li><Link to="#">4</Link></li>
		                <li><Link to="#">5</Link></li>
		                <li><Link to="#">&gt;</Link></li>
		              </ul>
		            </div>
		          </Col>
		        </Row>
               </Col>
              <SidebarFilter/>

               </Row>
             </Container> 
            </section>      
      </>
    )
  }
}
