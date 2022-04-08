import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('../fakeData.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);
    const selectedLanguage = languages.find(language => language.id === parseInt(id));

    return (
        <div className='text-center p-4'>
            <h2>Course Name: Learning {selectedLanguage?.language}</h2><br />
            <img style={{ height: '350px', width: '350px' }} src={selectedLanguage?.img} alt="" />
            <h5>Trainer: {selectedLanguage?.trainer}</h5>
            <h5>Duration: {selectedLanguage?.duration}</h5>
            <h5>Fee: ${selectedLanguage?.fee}</h5><br />
            <blockquote>{selectedLanguage?.description}</blockquote>
            <Button>Enroll Course</Button>
        </div>
    );
};

export default CourseDetails;