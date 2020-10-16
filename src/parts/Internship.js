import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "../assets/images/cover/pertamina.jpeg";
import IconClock from "../assets/images/icons/clock.svg";
import IconLike from "../assets/images/icons/like.svg";
import IconLiked from "../assets/images/icons/liked.svg";
import IconTimeLeft from "../assets/images/icons/time-left.svg";
import IconCard from "../assets/images/icons/card.svg";
import Button from "../elements/Button";

export default function Internship(props) {
  return (
    <section className="container mb-5 pt-5">
      <Fade bottom>
        <h5 className="font-weight-bold mb-3">Daftar Internship</h5>
        <div className="container-magang mt-3">
          <div className="row">
            <div className="col-auto">
              <div className="img-card">
                <figure className="img-wrapper">
                  <img src={ImageHero} alt="pertamina" className="thumbnail" />
                </figure>
              </div>
            </div>
            <div className="col-8">
              <div className="content-internship">
                <a href="" className="title-link">
                  <h5>Program Magang Mahasiswa Bersertifikat (PMMB)</h5>
                </a>
                <div className="desc-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo delectus illum laudantium iusto, itaque ratione eius
                    tempore exercitationem doloremque similique.....
                  </p>
                </div>
                <div className="properties mt-4 ">
                  <div className="row">
                    <div className="col-auto">
                      <img src={IconClock} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        2 hari yang lalu
                      </span>
                    </div>
                    <div className="col-auto">
                      <button className="btn-like">
                        <img src={IconLike} alt="likes" />
                      </button>
                      <span className="text-gray-700 font-weight-light ml-2">
                        7 suka
                      </span>
                    </div>
                    <div className="col-auto ">
                      <img src={IconTimeLeft} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2 ">
                        2 hari lagi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="applyment">
              <div className="col-auto align-content-center">
                <div className="apply">
                  <img src={IconCard} alt="time-left" />
                  <span className="text-gray-700 ml-3">8 Pelamar</span>
                </div>
                <Button
                  isPrimary
                  type="link"
                  href="/detail"
                  className="btn px-5 mt-4 mb-4"
                  hasShadow
                >
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-magang mt-3">
          <div className="row">
            <div className="col-auto">
              <div className="img-card">
                <figure className="img-wrapper">
                  <img src={ImageHero} alt="pertamina" className="thumbnail" />
                </figure>
              </div>
            </div>
            <div className="col-8">
              <div className="content-internship">
                <a href="" className="title-link">
                  <h5>Program Magang Mahasiswa Bersertifikat (PMMB)</h5>
                </a>
                <div className="desc-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo delectus illum laudantium iusto, itaque ratione eius
                    tempore exercitationem doloremque similique.....
                  </p>
                </div>
                <div className="properties mt-4">
                  <div className="row">
                    <div className="col-auto">
                      <img src={IconClock} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        2 hari yang lalu
                      </span>
                    </div>
                    <div className="col-auto">
                      <button className="btn-like">
                        <img src={IconLike} alt="likes" />
                      </button>
                      <span className="text-gray-700 font-weight-light ml-2">
                        7 suka
                      </span>
                    </div>
                    <div className="col-auto">
                      <img src={IconTimeLeft} alt="time-left" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        8 hari lagi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="applyment">
              <div className="col-auto">
                <div className="apply">
                  <img src={IconCard} alt="time-left" />
                  <span className="text-gray-700 ml-3">8 Pelamar</span>
                </div>
                <Button
                  type="link"
                  href="/detail"
                  isPrimary
                  className="btn px-5 mt-4"
                  hasShadow
                >
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-magang mt-3">
          <div className="row">
            <div className="col-auto">
              <div className="img-card">
                <figure className="img-wrapper">
                  <img src={ImageHero} alt="pertamina" className="thumbnail" />
                </figure>
              </div>
            </div>
            <div className="col-8">
              <div className="content-internship">
                <a href="" className="title-link">
                  <h5>Program Magang Mahasiswa Bersertifikat (PMMB)</h5>
                </a>
                <div className="desc-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo delectus illum laudantium iusto, itaque ratione eius
                    tempore exercitationem doloremque similique.....
                  </p>
                </div>
                <div className="properties mt-4">
                  <div className="row">
                    <div className="col-auto">
                      <img src={IconClock} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        2 hari yang lalu
                      </span>
                    </div>
                    <div className="col-auto">
                      <button className="btn-like">
                        <img src={IconLike} alt="likes" />
                      </button>
                      <span className="text-gray-700 font-weight-light ml-2">
                        7 suka
                      </span>
                    </div>
                    <div className="col-auto">
                      <img src={IconTimeLeft} alt="time-left" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        8 hari lagi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="applyment">
              <div className="col-auto">
                <div className="apply">
                  <img src={IconCard} alt="time-left" />
                  <span className="text-gray-700 ml-3">8 Pelamar</span>
                </div>
                <Button isPrimary className="btn px-5 mt-4" hasShadow>
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-magang mt-3">
          <div className="row">
            <div className="col-auto">
              <div className="img-card">
                <figure className="img-wrapper">
                  <img src={ImageHero} alt="pertamina" className="thumbnail" />
                </figure>
              </div>
            </div>
            <div className="col-8">
              <div className="content-internship">
                <a href="" className="title-link">
                  <h5>Program Magang Mahasiswa Bersertifikat (PMMB)</h5>
                </a>
                <div className="desc-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo delectus illum laudantium iusto, itaque ratione eius
                    tempore exercitationem doloremque similique.....
                  </p>
                </div>
                <div className="properties mt-4">
                  <div className="row">
                    <div className="col-auto">
                      <img src={IconClock} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        2 hari yang lalu
                      </span>
                    </div>
                    <div className="col-auto">
                      <button className="btn-like">
                        <img src={IconLike} alt="likes" />
                      </button>
                      <span className="text-gray-700 font-weight-light ml-2">
                        7 suka
                      </span>
                    </div>
                    <div className="col-auto">
                      <img src={IconTimeLeft} alt="time-left" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        8 hari lagi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="applyment">
              <div className="col-auto">
                <div className="apply">
                  <img src={IconCard} alt="time-left" />
                  <span className="text-gray-700 ml-3">8 Pelamar</span>
                </div>
                <Button isPrimary className="btn px-5 mt-4" hasShadow>
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-magang mt-3">
          <div className="row">
            <div className="col-auto">
              <div className="img-card">
                <figure className="img-wrapper">
                  <img src={ImageHero} alt="pertamina" className="thumbnail" />
                </figure>
              </div>
            </div>
            <div className="col-8">
              <div className="content-internship">
                <a href="" className="title-link">
                  <h5>Program Magang Mahasiswa Bersertifikat (PMMB)</h5>
                </a>
                <div className="desc-text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo delectus illum laudantium iusto, itaque ratione eius
                    tempore exercitationem doloremque similique.....
                  </p>
                </div>
                <div className="properties mt-4">
                  <div className="row">
                    <div className="col-auto">
                      <img src={IconClock} alt="time-upload" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        2 hari yang lalu
                      </span>
                    </div>
                    <div className="col-auto">
                      <button className="btn-like">
                        <img src={IconLike} alt="likes" />
                      </button>
                      <span className="text-gray-700 font-weight-light ml-2">
                        7 suka
                      </span>
                    </div>
                    <div className="col-auto">
                      <img src={IconTimeLeft} alt="time-left" />
                      <span className="text-gray-700 font-weight-light ml-2">
                        8 hari lagi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="applyment">
              <div className="col-auto">
                <div className="apply">
                  <img src={IconCard} alt="time-left" />
                  <span className="text-gray-700 ml-3">8 Pelamar</span>
                </div>
                <Button isPrimary className="btn px-5 mt-4" hasShadow>
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
