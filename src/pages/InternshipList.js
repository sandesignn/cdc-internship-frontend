import React, { Component } from "react";
import Header from "../parts/Header";
import HeroIntermship from "../parts/HeroIntermship";
import Internship from "../parts/Internship";
import Footer from "../parts/Footer";

export class InternshipList extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <HeroIntermship></HeroIntermship>
        <Internship {...this.props}></Internship>
        <Footer></Footer>
      </>
    );
  }
}

export default InternshipList;
