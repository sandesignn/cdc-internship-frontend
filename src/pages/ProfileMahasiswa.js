import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Profile from "../parts/ProfileMahasiswa";
export class ProfileMahasiswa extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Profile></Profile>
        <Footer></Footer>
      </>
    );
  }
}

export default ProfileMahasiswa;
