import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <><div className="pg-footer"  >
            <div style={{height:"auto"}}></div>
            <footer className="footer" >
                <svg
                    className="footer-wave-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className="footer-wave-path"
                        d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
                    />
                </svg>
                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <Link className="footer-logo-link" to="/">
                                <span className="hidden-link-text">Adwitiya Financial Services Pvt. Ltd.</span>
                                <h1 className='footer-title'>Adwitiya Financial Services Pvt. Ltd.</h1>
                            </Link>
                        </div>
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Address</h2>
                            <ul id="menu-get-started" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                    <Link to="/">#282 NARAYANA, 
                                    2nd Main 
                                    Talacauvery Layout, 
                                    Amruthahalli 
                                    Bengaluru 560092</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Quick Links




                    </h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                
                                
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> About Us</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/">At Adwitiya Financial Services, we help make homeownership a reality with tailored home loan solutions and expert guidance.</Link> </li>
                                
                               
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Home Loans





</h2>
                            <ul className='p-3'>
                                
                                <li className='p-1'>
                                <Link to='/home-construction-loan'>
                                Construction Loan</Link>
                                </li>
                                <li className='p-1'>
                                <Link to='/renovation-loan'>
                                Extension & Renovation Loan</Link>
                                </li>
                                <li className='p-1' >
                                <Link to='/home-loan-nri'>
                                 Loan for NRI</Link>
                                </li>
                                <li className='p-1'>
                                <Link to='/home-loan-salaried-employee'>
                                Loan For Salaried Professionals</Link>
                                </li>
                                <li className='p-1'>
                                <Link to='/home-loan-self-employed'>
                                Loan For The Self Employed</Link>
                                </li>
                                <li className='p-1'>
                                <Link to='/property-loan'>
                                Loan Against Property</Link>
                                </li>
                               
                                
                               
                                
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Mail us at:</h2>
                            <p className="footer-call-to-action-description">
                                {" "}
        
                            </p>
                            <p className="footer-call-to-action-description">
                                {" "}
                            </p>
                            <p
                                className="footer-call-to-action-link"
                                to="/"
                                target="_self"
                            >
                                {" "}
                                adwitiyafinancialservices@gmail.com{" "}
                            </p>
                        </div>
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Call us at</h2>
                            <p className="footer-call-to-action-link-wrapper">
                                {" "}
                                <Link
                                    className="footer-call-to-action-link"
                                    href="tel:0124-64XXXX"
                                    target="_self"
                                >
                                    {" "}
+91 8951575407{" "}
                                </Link>
                            </p>
                            <p className="footer-call-to-action-link-wrapper">
                                {" "}
                                <Link
                                    className="footer-call-to-action-link"
                                    href="tel:0124-64XXXX"
                                    target="_self"
                                >
                                    {" "}
                                    +91 91647 11676{" "}
                                </Link>
                            </p>
                            <p className="footer-call-to-action-link-wrapper">
                                {" "}
                                <Link
                                    className="footer-call-to-action-link"
                                    href="tel:0124-64XXXX"
                                    target="_self"
                                >
                                    {" "}
                                    +91 9845757687{" "}
                                </Link>
                            </p>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="footer-copyright">
                    <div className="footer-copyright-wrapper">
                        <p className="footer-copyright-text">
                            <Link className="footer-copyright-link" to="/" target="_self">
                                {" "}
                                ©2024 | Adwitiya Financial Services Pvt Ltd | All rights reserved.{" "}
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer