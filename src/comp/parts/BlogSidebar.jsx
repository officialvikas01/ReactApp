import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {Form} from "react-bootstrap";

const BlogData = require("../json/blogposts.json");
const BlogCategories = require("../json/blogcategories.json")
const BlogTags = require("../json/blogtags.json")

export default class BlogSidebar extends Component {
  render() {
    return (
      <>
          <div className="sidebar-box">
              <Form action="/Search" method="get" className="search-form">
                <Form.Group>
                  <span className="icon ion-ios-search"></span>
                  <Form.Control  name="q" placeholder="Type a keyword and hit enter"/>
                </Form.Group>
              </Form>
            </div>

            <div className="sidebar-box" data-aos="slide-up"  data-aos-duration={800}>
             <h3 className="heading">Categories</h3>
              <ul className="categories">
                  { 
                      BlogCategories.map((data,key) => (
                      <li key={key}><Link to={data.UrlKey}> {data.CatName}<span>({data.TotalPost})</span></Link></li>
                 ))
                 }
              </ul>
            </div>

            <div className="sidebar-box" data-aos="slide-up"  data-aos-duration={800}>
            <h3 className="heading">Recent Blog</h3>
                  {
                        BlogData.slice(0,3).map((data,key)=>(
                            <div className="block-21 mb-4 d-flex" key={key}>
                            <Link className="blog-img mr-4" style={{backgroundImage:`url('${data.image}')`}}></Link>
                            <div className="text">
                            <h3 className="heading-1"><Link to={data.url_key}>{data.heading}</Link></h3>
                            <div className="meta">
                                <div><Link to="/"><span className="icon-calendar"></span> {data.date}</Link></div>
                                <div><Link to="/"><span className="icon-person"></span> {data.author}</Link></div>
                                <div><Link to="/"><span className="icon-chat"></span> {data.comments}</Link></div>
                            </div>
                            </div>
                        </div>
                        ))
                    } 
           </div>
           <div className="sidebar-box" data-aos="slide-up"  data-aos-duration={800}>
           <h3 className="heading">Tag Cloud</h3>
              <div className="tagcloud">
                {
                   BlogTags.slice(0,10).map((data,key) => (
                    <Link to={data.UrlKey} className="tag-cloud-link">{data.TagName}</Link>
                   )) 
                }
              </div>   
           </div>
           <div className="sidebar-box" data-aos="slide-up"  data-aos-duration={800}>
              <h3 className="heading">Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>

      </>
    )
  }
}
