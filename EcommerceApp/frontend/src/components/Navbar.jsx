import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  
  const navigate = useNavigate();

  function openLoginPage() {
    navigate('/login');
  }
  function openRegisterPage() {
    navigate('/register');
  }

  return (
    <div className="insideContainer">
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid custom-navbar">
            <div className="d-flex justify-content-between align-items-center">
              <Link className="navbar-brand" to="/">
                <span className="span">E</span>
                <span className="brand-name">baZaaR</span>
              </Link>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 custom-input w-100"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="Submit">
                  Search
                </button>
              </form>
            </div>

            <div className="d-flex justify-content-end ">
              <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <button onClick={openLoginPage}>login</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={openRegisterPage}>register</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">laptops</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Smartphones</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Fashion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Contact/Support</Link>
                </li>
              </ul>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3-6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
