import React from 'react';
import user from "./MyModel.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Model = () => {
    // console.log(user);

    const state={
        tn:["erode","cbe","tripur"],
        kl:["tiru","cochin","palakad"]
    };
    console.log( Object.keys(state));
    return (
        <div><Row>
                { user.map((item) => (
                    <Col lg={11} md={6} xs={12} key={item.id} >
                        {/* <div key={item}> */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className='item'>{item.id}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Button variant="primary">{item.title}</Button>
                            </Card.Body>
                        </Card>
                        {/* </div> */}
                    </Col>

                ))}

            </Row>
        </div>
    );
};


export default Model;