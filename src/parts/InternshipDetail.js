import React from "react";
import ImageHero from "../assets/images/cover/pertamina.jpeg";
import IconClock from "../assets/images/icons/clock.svg";
import IconLike from "../assets/images/icons/like.svg";
import WorkTime from "../assets/images/icons/work-time.svg";
import IconLiked from "../assets/images/icons/liked.svg";
import IconLocation from "../assets/images/icons/location.svg";
import IconShare from "../assets/images/icons/share.svg";
import Button from "../elements/Button";

const InternshipDetail = () => {
  return (
    <>
      <div className="container-internship-detail">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-3">
                  <div className="img-card">
                    <figure className="img-wrapper">
                      <img
                        src={ImageHero}
                        alt="pertamina"
                        className="thumbnail"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-md-9 mb-4">
                  <div className="title-internship">
                    <h5 className="title-head">
                      Program Magang Mahasiswa Bersertifikat (PMMB)
                    </h5>
                    <a href="#" className="title-head">
                      <h6>PT. Pertamina</h6>
                    </a>
                    <div className="properties mt-3">
                      <div className="properties-child">
                        <img src={IconClock} alt="time-upload" />
                        <span className="text-gray-700 font-weight-light ml-2">
                          2 hari yang lalu
                        </span>
                      </div>
                      <div className="properties-child">
                        <img src={WorkTime} className="mb-0" alt="work-time" />
                        <span className="text-gray-700 font-weight-light ml-2">
                          Fulltime
                        </span>
                      </div>
                      <div className="properties-child">
                        <img src={IconLocation} alt="internship-location" />
                        <span className="text-gray-700 font-weight-light ml-2 ">
                          Muara Enim
                        </span>
                      </div>
                    </div>
                    <div className="line">
                      <hr></hr>
                    </div>
                  </div>
                  <div className="row pl-3">
                    <div className="col-3">
                      <div className="content">
                        <img src={IconLike} alt="like" style={{ width: 30 }} />
                        <span className="ml-3 font-weight-bold">14 suka</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="content">
                        <img
                          src={IconShare}
                          alt="share"
                          style={{ width: 30 }}
                        />
                        <span className="ml-3 font-weight-bold">share</span>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="content">
                        <Button
                          isPrimary
                          className="btn px-5 float-right"
                          hasShadow
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="container desc-content mb-5">
                  <div id="accordion">
                    <div class="card mb-3">
                      <div
                        class="card-header"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        id="headingOne"
                      >
                        <h6 class="mb-0 font-weight-bold text-gray-700">
                          Deskripsi Internship
                          <span className="float-right">
                            <img src={IconClock} alt="time-upload" />
                          </span>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body font-weight-bold text-gray-700">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div
                        class="card-header"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        id="headingOne"
                      >
                        <h6 class="mb-0 font-weight-bold text-gray-700">
                          Kualifikasi Internship
                          <span className="float-right">
                            <img src={IconClock} alt="time-upload" />
                          </span>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md right-side">
              <div className="company-profile mb-3">
                <h6 className="font-weight-bold text-gray-700">
                  Tentang PT. Pertamina EP Asset 2
                </h6>
                <hr></hr>
                <p style={{ fontSize: 14 }}>
                  CDC Unssri is a company with expertise in artificial
                  intelligence especially for Processing Bahasa Indonesia. Prosa
                  comes from the abbreviation of Pemrosesan Bahasa "language
                  processing"​. We are a team of people passionate about Text
                  and Speech Processing, and eager to solve business problems
                  utilizing the power of AI.
                </p>
              </div>
              <div className="another-internship">
                <h6 className="font-weight-bold text-gray-700">
                  Internship Lainnya
                </h6>
                <hr></hr>
                <div className="list-internship">
                  <a href="#">
                    <h6 className="font-weight-bold text-gray-700">
                      Program Magang Bersertifikat (PMMB)
                    </h6>
                  </a>
                  <p style={{ fontSize: 14 }}>
                    CDC Unssri is a company with expertise in artificial
                    intelligence especially....
                  </p>
                </div>
                <hr></hr>
                <div className="list-internship">
                  <a href="#">
                    <h6 className="font-weight-bold text-gray-700">
                      Program Magang Bersertifikat (PMMB)
                    </h6>
                  </a>
                  <p style={{ fontSize: 14 }}>
                    CDC Unssri is a company with expertise in artificial
                    intelligence especially....
                  </p>
                </div>
                <hr></hr>
                <div className="list-internship">
                  <a href="#">
                    <h6 className="font-weight-bold text-gray-700">
                      Program Magang Bersertifikat (PMMB)
                    </h6>
                  </a>
                  <p style={{ fontSize: 14 }}>
                    CDC Unssri is a company with expertise in artificial
                    intelligence especially....
                  </p>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipDetail;
