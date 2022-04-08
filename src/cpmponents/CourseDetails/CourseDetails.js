import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Course Details: {id}</h2>
        </div>
    );
};

export default CourseDetails;