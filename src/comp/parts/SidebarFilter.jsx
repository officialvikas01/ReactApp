import React, { Component } from 'react'
import {Col} from "react-bootstrap";
import  {Link} from "react-router-dom";

const ProductFilterLinks = require("../json/productfilterlinks.json")

export default class SidebarFilter extends Component {
  render() {
      console.log(ProductFilterLinks);
    return (
      <>
        <Col md={4} lg={2} className="sidebar">
            {
              ProductFilterLinks.map((items,index) => (
                <div className="sidebar-box-2" key={index}>
                    <h2 className="heading mb-4"><Link to={`/${items.master_url}`}>{items.master_filter}</Link></h2> 
                    { items.master_child &&   
                    
                      <ul>
                           {
                                items.master_child.map((subitems,subindex) => (
                                    <li key={subindex}><Link to={`/${items.master_url}/${subitems.urlkey}`}>{subitems.filter}</Link></li>
                                 ))
                            
                           }
                     </ul>
                    }
                </div>    
              ))  
            }
        </Col> 
      </>
    )
  }
}
