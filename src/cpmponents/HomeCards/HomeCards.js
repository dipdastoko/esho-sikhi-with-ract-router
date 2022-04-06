import React from 'react';
import { Button, Card } from 'react-bootstrap';

const HomeCards = props => {
    const { img, language, trainer, duration } = props.course;
    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{language}</Card.Title>
                    <Card.Text>
                        <p>Trainer: <b>{trainer}</b></p>
                        <small>Duration: {duration}</small>
                    </Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeCards;