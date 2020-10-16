import React from "react";

import ImageHero from "../assets/images/cover/pertamina.jpeg";
import IconEmail from "../assets/images/icons/email.svg";
import IconInstagram from "../assets/images/icons/instagram.svg";
import IconPhone from "../assets/images/icons/phone.svg";
import IconLocation from "../assets/images/icons/location.svg";
import IconEdit from "../assets/images/icons/Edit.svg";
import Button from "../elements/Button";
const ProfileMahasiswa = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md left-side">
            <div className="display-profile mb-5">
              <div className="img-border">
                <img src={ImageHero} alt="xxxxxx" className="img-thumb" />
              </div>
            </div>
            <div className="name-space mb-5">
              <Button className="edit-icon nav-link" type="link" hasShadow>
                <img src={IconEdit} alt="edit-icon" />
              </Button>
              <h4 className="font-weight-bold text-gray-900">
                Kurnia Sandi Pratama
              </h4>
              <p className="font-weight-medium text-gray-900">
                Teknik Informatika
              </p>
              <p className="faculty">(Fakultas Ilmu Komputer)</p>
            </div>
            <div className="contact">
              <div className="contact-style">
                <img
                  src={IconEmail}
                  style={{ width: 20, height: 20 }}
                  alt="email"
                />
                <span className="ml-3">halodevv@gmail.com</span>
              </div>
              <hr></hr>
              <div className="contact-style">
                <img
                  src={IconLocation}
                  style={{ width: 20, height: 20 }}
                  alt="email"
                />
                <span className="ml-3">Indralaya</span>
              </div>
              <hr></hr>
              <div className="contact-style">
                <img
                  src={IconPhone}
                  style={{ width: 20, height: 20 }}
                  alt="email"
                />
                <span className="ml-3">+6281368220266</span>
              </div>
              <hr></hr>
              <div className="contact-style">
                <img
                  src={IconInstagram}
                  style={{ width: 20, height: 20 }}
                  alt="email"
                />
                <span className="ml-3">sandesign___</span>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className="col col-md-6 main-side">
            <Button className="edit-icon nav-link" type="link" hasShadow>
              <img src={IconEdit} alt="edit-icon" />
            </Button>
            <div className="title">
              <h4>Tentang Saya</h4>
            </div>
            <hr />
            <div className="desc">
              <p>
                I am a web developer. I love coding and Strong fundamentals
                knowledge on computer science and design pattern
              </p>
            </div>
            <div className="title">
              <h4>Pengalaman Organisasi</h4>
            </div>
            <hr />
            <div className="desc">
              <p>
                - Ketua DPM KM Unsri 2018-2019 <br /> - Ketua Harmoni 2019-2020
              </p>
            </div>
            <div className="title">
              <h4>IPK Terakhir</h4>
            </div>
            <hr />
            <div className="desc">
              <p>3.19</p>
            </div>
            <div className="title">
              <h4>Nilai Suliet</h4>
            </div>
            <hr />
            <div className="desc">
              <p>447</p>
            </div>
            <div className="title">
              <h4>Semester</h4>
            </div>
            <hr />
            <div className="desc">
              <p>7</p>
            </div>
            <div className="title">
              <h4>Hobi</h4>
            </div>
            <hr />
            <div className="desc">
              <p>Bermusik, Melukis</p>
            </div>
            <hr />
          </div>
          <div className="col-md right-side">
            <Button className="edit-icon nav-link" type="link" hasShadow>
              <img src={IconEdit} alt="edit-icon" />
            </Button>
            <div className="title mb-5">
              <h4>Dokumen</h4>
            </div>
            <div className="title">
              <h5>Resume/CV</h5>
            </div>
            <hr />
            <div className="desc">
              <a href="#">
                <p>84u5325n3299235.pdf</p>
              </a>
            </div>
            <div className="title">
              <h5>Pakta Integritas</h5>
            </div>
            <hr />
            <div className="desc">
              <a href="#">
                <p>84u5325n329fs5.pdf</p>
              </a>
            </div>
            <div className="title">
              <h5>Transkrip Nilai</h5>
            </div>
            <hr />
            <div className="desc">
              <a href="#">
                <p>84u532545rdsc99235.pdf</p>
              </a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMahasiswa;
