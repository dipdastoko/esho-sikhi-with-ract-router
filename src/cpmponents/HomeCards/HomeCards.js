import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCards = props => {
    const { id, img, language, trainer, duration } = props.course;
    const url = `/services/${id}`;
    return (
        <div className='mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{language}</Card.Title>
                    <Card.Text>
                        <p>Trainer: <b>{trainer}</b></p>
                        <small>Duration: {duration}</small>
                    </Card.Text>
                    <Link to={url}>
                        <Button variant="primary">See Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeCards;