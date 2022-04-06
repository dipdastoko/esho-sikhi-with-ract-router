import React from 'react';
import useFakeData from '../../Hooks/useFakeData';
import ServiceCards from '../ServiceCards/ServiceCards';
import './Services.css';

const Services = () => {
    const courses = useFakeData();
    return (
        <div className='services-cards'>
            {
                courses.map(course => <ServiceCards
                    key={course.id}
                    course={course}
                >
                </ServiceCards>)
            }
        </div>
    );
};

export default Services;