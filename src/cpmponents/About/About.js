import React from 'react';
import useFakeData from '../../Hooks/useFakeData';

const About = () => {
    const courses = useFakeData();
    console.log(courses);
    return (
        <div>
            <h2>This is About</h2>
        </div>
    );
};

export default About;