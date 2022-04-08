import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='bg-info p-5 contact'>

            <div className='w-25 mx-auto'>
                <h3>Your Name</h3>
                <input placeholder='first name' type="text" /><span> </span>
                <input placeholder='second name' type="text" />
                <h3>Email Address</h3>
                <input placeholder='e-mail' type="email" name="" id="" />
                <h3>Phone Number</h3>
                <input type="text" />
                <h3>Message</h3>
                <textarea placeholder='type your message here' name="" id="" cols="50" rows="10"></textarea>
                <br />
                <Button style={{ width: '150px', height: '50px', border: '2px solid gray', color: 'white' }} variant="primary" className='rounded-pill'>Submit <FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    );
};

export default Contact;