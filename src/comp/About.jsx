import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Breadcrumb from "./parts/Breadcrumb";
import AboutShipSection from "./parts/AboutShipSection";
import AchivementCounting from "./parts/AchivementCounting"
import Testimonials from "./parts/Testimonials"

export default class About extends Component {
  render() {
    return (
      <>
        <Helmet title={this.props.title}></Helmet>
        <Breadcrumb title={this.props.title} subtitle={this.props.subtitle}/>
        <AboutShipSection/>
        <AchivementCounting/>
        <Testimonials/>
      </>
    )
  }
}
