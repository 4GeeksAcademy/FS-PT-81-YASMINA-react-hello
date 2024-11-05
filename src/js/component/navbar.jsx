import React from "react";

export const Navbar = () => {
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid bg-dark pb-3 ">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand text-white mt-4" href="#">Start Boostrap</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item leftmargin">
            <a className="nav-link active text-white mt-4" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary mt-4" href="#">Abaout</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary mt-4 " aria-disabled="true">service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary mt-4 " aria-disabled="true">contact</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  )
}