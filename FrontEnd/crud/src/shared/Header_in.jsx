import React from "react";
import { Link } from "react-router-dom";

export default function Header_in({ links,historia }) {
  if(!links[1]){
    return (
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <Link to={"/"+links[0]}>
                <h6 className="h2 text-white d-inline-block mb-0">{historia[0]}</h6>
                </Link>
                <nav
                  aria-label="breadcrumb"
                  className="d-none d-md-inline-block ml-md-4"
                >
                  <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="fas fa-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="#">{historia[1]}</a>
                    </li> 
                  </ol>
                </nav>
              </div>
              <div className="col-lg-6 col-5 text-right">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
  }
  return (
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
            <Link to={"/"+links[0]}>
                <h6 className="h2 text-white d-inline-block mb-0">{historia[0]}</h6>
                </Link>
              <nav
                aria-label="breadcrumb"
                className="d-none d-md-inline-block ml-md-4"
              >
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="fas fa-home"></i>
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">{historia[1]}</a>
                  </li> 
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <Link to={"/"+links[1]} className="btn btn-sm btn-neutral">
                Nuevo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*"/nuevo-producto"*/
