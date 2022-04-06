import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className=' bg-dark text-white'>
            <div className=' d-flex justify-content-between p-3'>
                <div style={{ width: '250px' }}>
                    <h3>About Us</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea eligendi fugiat. Necessitatibus ipsa sit ipsam vitae labore fuga molestias accusamus architecto.</p>
                    <small>--Our Team</small>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Dhaka,Bangladesh</p>
                    <p><FontAwesomeIcon icon={faPhone} /> 01256983657</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> eshosikhi@gmail.com</p>
                    <div>
                        <Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link>
                        <Link to='/' className='mx-3'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <Link to='/'><FontAwesomeIcon icon={faTwitter} /></Link>
                    </div>
                </div>
                <div>
                    <h3>Links</h3>
                    <Link className='text-decoration-none text-white' to='/home'>Home</Link><br />
                    <Link className='text-decoration-none text-white' to='/services'>Services</Link><br />
                    <Link className='text-decoration-none text-white' to='/about'>About</Link>

                </div>
            </div>
            <hr />
            <div style={{ width: '300px' }} className='mx-auto'>
                <small><FontAwesomeIcon icon={faCopyright} /> 2022 DipDasToko | All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;