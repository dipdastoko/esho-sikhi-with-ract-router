import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/home');
    }
    return (
        <div className='notFound text-center'>
            <p className='text-center'><b><i>Page Not Found</i></b></p>

            <Button onClick={handleGoBack} className='button'>Go Back Home</Button>

        </div>
    );
};

export default NotFound;