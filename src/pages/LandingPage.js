import React, { Component } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Internship from "../parts/Internship";
import Footer from "../parts/Footer";

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero></Hero>
        <Internship {...this.props}></Internship>
        <Footer></Footer>
      </>
    );
  }
}

export default LandingPage;
