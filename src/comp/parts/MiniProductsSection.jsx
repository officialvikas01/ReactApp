import React, { Component } from 'react'
import {Row,Col,Image} from "react-bootstrap";
import  {Link} from "react-router-dom";



export default class MiniProductsSection extends Component { 
  
  
    getratings = (rat) =>{
    const RatingItems = [];
     for (var i =0; i < rat; i ++){
        RatingItems.push(<Link to={`javascript:rating(${i})`} key={i}><span className="ion-ios-star-outline"></span></Link>)
     }
     return RatingItems;
    } 

  render() { 
    const BestSellerData = this.props.data;
    const lg=this.props.customClass.lg;
    
    return (
      <> 
    		<Row>
            {  BestSellerData.slice(0,this.props.productLimit).map((data,id) => ( 
    			<Col md="6" className={`col-sm col-lg-${lg}`}  data-aos="slide-up"  data-aos-duration={800} key={id}>
    				<div className="product">
    					<Link to="#" className="img-prod"><Image className="img-fluid" src={data.image} alt={data.name} />
                           { data.sale && <span className="status">{data.sale}%</span> }
    						<div className="overlay"></div>
    					</Link>
                        
    					<div className="text py-3 px-3" >
    						<h3><Link to={data.urlkey}>{data.name}</Link></h3>
    						<div className="d-flex">
    							<div className="pricing">
		    						<p className="price">
                                     { data.newprice && <span className="mr-2 price-dc">${data.price}</span> } 
                                     
                                <span className="price-sale">${ data.newprice === "" ?  data.price : data.newprice }</span>  
                                    </p>
		    					</div>
		    					<div className="rating">
	    							<p className="text-right">
                                        {  this.getratings(data.rating)}
                                        </p>
	    						</div>
                            </div>
                        
	    					<p className="bottom-area d-flex px-3">
    							<Link to="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
    							<Link to="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></Link>
    						</p>
    					</div>
                      
    				</div>
                </Col>
                ))}
    			 
    		</Row> 
      </>
    )
  }
}
