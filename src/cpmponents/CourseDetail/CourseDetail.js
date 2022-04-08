import React from 'react';

const CourseDetail = props => {
    const { language, trainer, duration, fee, description } = props.language;
    return (
        <div>
            <h2>Course Name: Learning {language}</h2>
        </div>
    );
};

export default CourseDetail;