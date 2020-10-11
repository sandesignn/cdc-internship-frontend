import React, { Component } from "react";
import Header from "../parts/Header";
import Breadcrumb from "../parts/Breadcrumb";
import InternshipDetail from "../parts/InternshipDetail";
import Footer from "../parts/Footer";

export class DetailInternship extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Breadcrumb></Breadcrumb>
        <InternshipDetail></InternshipDetail>
        <Footer></Footer>
      </>
    );
  }
}

export default DetailInternship;
