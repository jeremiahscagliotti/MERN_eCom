import React, { useState, useEffect } from 'react'
import { Product } from '../../components/index';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';


const HomePage = () => {

    const [products, setShowProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

           setShowProducts(data)
        }
        fetchProducts()
    }, []);

    return ( 
        <Container>
            <h1>Home Page</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xlg={3}>                      
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomePage
