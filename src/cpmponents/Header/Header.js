import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <h1>Organization</h1>
                <h3>Email</h3>
                <h3>Call</h3>
                <button>Apply</button>
            </div>
            <div className='d-flex justify-content-between bg-dark mt-2 mx-5'>
                <div className='d-flex align-items-start bg-dark p-3 '>
                    <NavLink
                        className='text-decoration-none'
                        to='/'
                    >
                        <span className='navl'>Home</span>
                    </NavLink>
                    <NavLink className='text-decoration-none' to='/'>
                        <span className='ms-5 navl'>Services</span>
                    </NavLink>
                    <NavLink className='text-decoration-none' to='/'>
                        <span className='ms-5 navl'>About</span>
                    </NavLink>
                    <NavLink className='text-decoration-none' to='/'>
                        <span className='ms-5 navl'>Contact</span>
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