import React from "react";
import ImageHero from "../assets/images/Illustratations/image-hero.jpg";
import ImageHero_ from "../assets/images/Illustratations/image-hero-frame.jpg";
import StudentsIcon from "../assets/images/icons/students.svg";
import Fade from "react-reveal/Fade";

import Button from "../elements/Button";

export default function Hero() {
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Magang Di Perusahaan Ternama dan <br />
              Dapat Sertifikat
            </h1>
            <p className="mb-4 font-weight-light text-gray-700 w-75">
              CDC Unsri bekerja sama dengan perusahaan di
              seluruh Indonesia untuk menyalurkan mahasiswa Unsri yang akan
              melaksanakan magang atau kerja praktek
            </p>
            <div className="form-label">
              <h4>Ayo cari internship yang cocok!</h4>
            </div>
            <div className="form-search">
              <input
                className="input-field"
                placeholder="e.g akuntansi"
                type="text"
              ></input>
              <span className="student-icon">
                <img src={StudentsIcon} alt="student-icon" width="15" />
              </span>
            </div>
            <Button className="btn px-5" hasShadow isPrimary>
              Temukan Internship
            </Button>
          </div>
          <div className="col-6 pl-5 img-hero">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Work stuff"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Work stuff frame"
                className="img-fluid position-absolute"
                style={{ margin: "-15px 0 0 -15px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
