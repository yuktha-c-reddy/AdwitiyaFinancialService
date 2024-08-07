import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../adwitiya.jpeg'
import "./navbar.css"

const Navbar = () => {
    
    return (
        <>
            <nav className="navbar  navbar-dark navbar-expand-lg " style={{ padding: "4px" , backgroundColor:"rgb(0, 0, 112)" }}>
                <div className="container-fluid" style={{ backgroundColor: "rgb(0, 0, 112)" }}>
                    <img className="navbar-brand" src={logo} alt="Cart-icon" style={{ width: '20vh', height: 'auto' }} />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                            
                                    <li className="nav-item">
                                        <Link className="nav-link " aria-current="page" to="/home">
                                            HOME
                                        </Link>
                                    </li>
                                    <li className="nav-item" >
                                        <Link className="nav-link" to="/about">
                                            ABOUT US
                                        </Link>
                                    </li>
                                    
                                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          HOME LOANS
          </a>
          <ul class="dropdown-menu" >
            <li><Link class="dropdown-item" to='/home-construction-loan'>Home Construction Loan</Link></li>
            <li><Link class="dropdown-item" to='/renovation-loan' >Home Extension & Renovation Loan</Link></li>
            <li><Link class="dropdown-item" to='/home-loan-nri'>Home Loan for NRI</Link></li>
            <li><Link class="dropdown-item" to='/home-loan-salaried-employee'>Home Loan For Salaried Professionals</Link></li>
            <li><Link class="dropdown-item" to='/home-loan-self-employed'>Home Loan For The Self Employed</Link></li>
            <li><Link class="dropdown-item" to='/property-loan'>Loan Against Property</Link></li>
          </ul>
        </li>
        

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blog">
                                            BLOG
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">
                                            CONTACT
                                        </Link>
                                    </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
