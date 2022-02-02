import React from 'react';
import { Card, Button, Col, Badge } from 'react-bootstrap';

const Shop = (props) => {
    // console.log();
    const { name, description, image, price } = props.course
    return (
        <Col md={4} sm={6} className='mb-4' >
            <Card >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name} <Badge bg="secondary">New</Badge></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3>Price: ₹{price}</h3>
                    <Button variant="success" onClick={() => props.handleAddCourse(props.course)}>Add Course</Button>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Shop;