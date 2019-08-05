import React, { Component } from 'react'
import {Container,Row,Col,Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import  {Link} from "react-router-dom";
import Styles from "./parts/Styles";
export default class Header extends Component {
  render() {
    return (
      <div> 
		  <Styles/>
		<div className="py-1 bg-black">
    	<Container>
    		<Row className="no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<Col className="d-block" lg="12">
		    		<Row className="d-flex">
		    			<Col md="4" className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
						    <span className="text">+ 1235 2355 98</span>
					    </Col>
					    <Col md="3" className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
						    <span className="text">youremail@email.com</span>
					    </Col>
					    <Col md="5" className="pr-4 d-flex topper align-items-center text-lg-right">
						    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
					    </Col>
				    </Row>
			    </Col>
		    </Row>
		  </Container>
    </div>
    <Navbar  className="navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <Container>
	      <Navbar.Brand  href="/">Winkel</Navbar.Brand>
	      <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </Button>

	      <Navbar.Collapse id="ftco-nav">
	        <Nav className="ml-auto">
	          <Nav.Item><Link className="nav-link" to="/" >Home</Link></Nav.Item>
	          <NavDropdown title="Shop">  
              
              <Link className="dropdown-item" to="/Shop">Shop</Link>
              <Link className="dropdown-item" to="/Product/:id">Single Product</Link>
              <Link className="dropdown-item" to="/Cart">Cart</Link>
              <Link className="dropdown-item" to="/Checkout">Checkout</Link>
               
            </NavDropdown>
            <Nav.Item><Link className="nav-link" to="/About" >About</Link></Nav.Item>
            <Nav.Item><Link className="nav-link" to="/Blog" >Blog</Link></Nav.Item>
            <Nav.Item><Link className="nav-link" to="/Contact" >Contact</Link></Nav.Item>
	        <Nav.Item className="cta cta-colored"><Link className="nav-link" to="./Cart" ><span className="icon-shopping_cart"></span>[0]</Link></Nav.Item>

	        </Nav>
            </Navbar.Collapse>
	      </Container> 
	  </Navbar> 
      </div>
    )
  }
}
