import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap';
import { Review } from '../../components';
import axios from 'axios';

const ProductView = ({ match }) => {

    const [product, setShowProduct] = useState ({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get('/api/products/' + match.params.id)

           setShowProduct(data)
        }
        fetchProduct()
    }, [match]);

    return (
        <Container>
            <Link to='' className='btn btn-light my-3'>
                Go Back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Review 
                                value={product.rating}
                                text={product.numReviews + ' reviews'}
                            />
                        </ListGroup.Item>

                        <ListGroup.Item> Price: ${product.price} </ListGroup.Item>

                        <ListGroup.Item> Description: {product.description} </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock' }</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default ProductView
