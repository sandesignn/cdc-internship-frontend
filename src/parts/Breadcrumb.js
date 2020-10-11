import React from 'react'

const Breadcrumb = () => {
  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#">Program Magang Bersertifikat</a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb
