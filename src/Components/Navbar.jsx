import React from 'react'
import './NavbarStyle.css'
const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="Navbar-main w-100  bg-info d-flex align-items-center" style={{ height: '60px' }}>
                        <div className="Navbar-Left">
                            <h1 style={{ fontSize: '1.1rem' }}>Digital Marketing</h1>
                        </div>
                        <div className="NavbBar-Right w-50 ms-auto">
                            <ul className="u-list">
                                <li className="link">
                                    <a href="" className="links">Home</a>
                                </li>
                                <li className="link">
                                    <a href="" className="links">About Us</a>
                                </li>
                                <li className="link">
                                    <a href="" className="links">Bussiness</a>
                                </li>
                                <li className="link">
                                    <a href="" className="links">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar