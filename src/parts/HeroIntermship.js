import React from "react";
import StudentsIcon from "../assets/images/icons/students.svg";
import Fade from "react-reveal/Fade";
import Button from "../elements/Button";

export default function Hero() {
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
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
            <span>
              <Button className="btn px-5" hasShadow isPrimary>
                Temukan Internship
              </Button>
            </span>
          </div>
        </div>
      </section>
    </Fade>
  );
}
