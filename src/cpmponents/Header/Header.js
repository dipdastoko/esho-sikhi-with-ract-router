import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (

        <div className='mt-2 mx-5'>

            {/* header upper portion */}
            <div className='d-flex justify-content-between'>
                <h2 className='bg-primary text-white p-3 rounded-circle'>Esho Sikhi</h2>
                <div className='d-flex'>

                    <div>
                        <h5 className='mb-0 fw-bold'><i>E-mail</i></h5>

                        <small className='text-decoration-underline text-primary'><FontAwesomeIcon icon={faEnvelope} /> eshosikhi@gmail.com</small>
                    </div>
                </div>
                <div>
                    <h5 className='mb-0 fw-bold'><i>Call</i></h5>
                    <small className=' text-primary'><FontAwesomeIcon icon={faPhone} /> 01256983657</small>
                </div>
            </div>

            {/* Header lower portion links */}
            <div className='d-flex justify-content-between bg-dark mt-3'>
                <div className='d-flex align-items-start bg-dark p-3 '>

                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }}
                        className='text-decoration-none'
                        to='/'>

                        <span>Home</span>

                    </NavLink>

                    <NavLink

                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }}
                        className='text-decoration-none' to='/services'>

                        <span className='ms-5'>Services</span>

                    </NavLink>

                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }}
                        className='text-decoration-none' to='/about'>

                        <span className='ms-5'>About</span>

                    </NavLink>

                    <NavLink
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "red" : "white",
                            };
                        }} className='text-decoration-none' to='/contact'>

                        <span className='ms-5'>Contact</span>

                    </NavLink>
                </div>
                <div>
                    <input className='m-3 rounded-pill' placeholder='Quick Search' type="text" />
                </div>
            </div>
        </div>
    );
};

export default Header;