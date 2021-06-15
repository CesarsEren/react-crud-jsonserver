import { Link } from "react-router-dom";
export default function Navbar() {
  /*return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/productos">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nuevo-producto">
                Nuevo Producto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );*/
  return (
    <nav
      className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div
        className="scroll-wrapper scrollbar-inner"
        style={{ position: "relative" }}
      >
        <div
          className="scrollbar-inner scroll-content scroll-scrollx_visible"
          style={{
            height: "921px",
            marginBottom: "0px",
            marginRight: "0px",
            maxHeight: "none",
          }}
        >
          <div className="sidenav-header  d-flex  align-items-center">
            <a className="navbar-brand" href="../../../index.html">
              <img
                src="../../assets/img/brand/dark.svg"
                height="40"
                className="navbar-brand-img"
                alt="..."
              />
            </a>
            <div className=" ml-auto ">
              <div
                className="sidenav-toggler d-none d-xl-block"
                data-action="sidenav-unpin"
                data-target="#sidenav-main"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-inner">
            <div
              className="collapse navbar-collapse"
              id="sidenav-collapse-main"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#navbar-dashboards"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="true"
                    aria-controls="navbar-dashboards"
                  >
                    <i className="ni ni-shop text-primary"></i>
                    <span className="nav-link-text">Dashboards</span>
                  </a>
                  <div className="collapse show" id="navbar-dashboards">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <span className="sidenav-mini-icon"> D </span>
                          <span className="sidenav-normal"> Dashboard </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#navbar-examples"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="navbar-examples"
                  >
                    <i className="ni ni-ungroup text-orange"></i>
                    <span className="nav-link-text">Mantenimiento</span>
                  </a>
                  <div className="collapse" id="navbar-examples">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link to="/productos" className="nav-link">
                          <span className="sidenav-mini-icon"> P </span>
                          <span className="sidenav-normal"> Productos </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/categorias" className="nav-link">
                          <span className="sidenav-mini-icon"> C </span>
                          <span className="sidenav-normal"> Categorias </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="scroll-element scroll-x scroll-scrollx_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div className="scroll-bar"></div>
          </div>
        </div>
        <div className="scroll-element scroll-y scroll-scrollx_visible">
          <div className="scroll-element_outer">
            <div className="scroll-element_size"></div>
            <div className="scroll-element_track"></div>
            <div className="scroll-bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
