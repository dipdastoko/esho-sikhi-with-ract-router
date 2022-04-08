import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('../fakeData.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);
    const selectedLanguage = languages.find(language => language.id == id);

    return (
        <div className='text-center'>
            <h2>Course Name: Learning {selectedLanguage?.language}</h2><br />
            <img style={{ height: '250px', width: '250px' }} src={selectedLanguage?.img} alt="" />
            <h5>Trainer: {selectedLanguage?.trainer}</h5>
            <h5>Duration: {selectedLanguage?.duration}</h5>
            <h5>Fee: ${selectedLanguage?.fee}</h5><br />
            <blockquote>{selectedLanguage?.description}</blockquote>
        </div>
    );
};

export default CourseDetails;