import React from 'react';
import './Service.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from 'react-bootstrap';

import breakfast1 from '../../../images/breakfast1.png';
import breakfast2 from '../../../images/breakfast2.png';
import breakfast3 from '../../../images/breakfast3.png';
import breakfast4 from '../../../images/breakfast4.png';
import breakfast5 from '../../../images/breakfast5.png';
import breakfast6 from '../../../images/breakfast6.png';

import lunch1 from '../../../images/lunch1.png';
import lunch2 from '../../../images/lunch2.png';
import lunch3 from '../../../images/lunch3.png';
import lunch4 from '../../../images/lunch4.png';
import lunch5 from '../../../images/lunch5.png';
import lunch6 from '../../../images/lunch6.png';

import dinner1 from '../../../images/dinner1.png';
import dinner2 from '../../../images/dinner2.png';
import dinner3 from '../../../images/dinner3.png';
import dinner4 from '../../../images/dinner4.png';
import dinner5 from '../../../images/dinner5.png';
import dinner6 from '../../../images/dinner6.png';

const Service = () => {
    return (
        <div className='service'>
            <Container className='service-container'>
                <Row>
                    <div className='title'>
                        <h2>Our Services</h2>
                    </div>

                    <Tabs justify>
                        <Tab eventKey="breakfast" title="Breakfast">
                            <div className='product-detail'>
                                <Row>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast1} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast2} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast3} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast4} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast5} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={breakfast6} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-details'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>   
                            </div>
                        </Tab>
                        <Tab eventKey="lunch" title="Lunch">
                        <div className='product-detail'>
                                <Row>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch1} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch2} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch3} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch4} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch5} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={lunch6} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>   
                            </div>
                        </Tab>
                        <Tab eventKey="dinner" title="Dinner">
                        <div className='product-details'>
                                <Row>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner1} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner2} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner3} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner4} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner5} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div className='single-product'>
                                            <div className='single-product-image'>
                                                <img src={dinner6} alt='single-product-image1' />
                                            </div>
                                            <div className='single-product-detail'>
                                                <h4>Health Meal Plan</h4>
                                                <p>How we dream about our future</p>
                                                <span>$23.99</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>   
                            </div>
                        </Tab>
                    </Tabs>      
                </Row>
            </Container>
        </div>
    );
};

export default Service;