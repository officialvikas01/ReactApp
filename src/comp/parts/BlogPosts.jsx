import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Col} from "react-bootstrap";

const BlogData = require("../json/blogposts.json")

export default class BlogPosts extends Component {
  render() {
    return (
      <>
      { 
        BlogData.slice(0,6).map((data,key) => ( 
        <Col md={12} className="d-flex" data-aos="slide-up"  data-aos-duration={800} key={key}>
		            <div className="blog-entry align-self-stretch d-md-flex">
		              <Link to={data.url_key} className="block-20" style={{backgroundImage:`url('${data.image}')`}}>
		              </Link>
		              <div className="text d-block pl-md-4">
		              	<div className="meta mb-3">
		                  <div><Link to="/">{data.date}</Link></div>
		                  <div><Link to="/">{data.author}</Link></div>
		                  <div><Link to="/" className="meta-chat"><span className="icon-chat"></span> {data.comments}</Link></div>
		                </div>
		                <h3 className="heading"><Link to={data.url_key}>{data.heading}</Link></h3>
		                <p>{data.post}</p>
		                <p><Link to={data.url_key} className="btn btn-primary py-2 px-3">Read more</Link></p>
		              </div>
		            </div>
		          </Col>
         ))
         }         
      </>
    )
  }
}
