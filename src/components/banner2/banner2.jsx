import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">Agencia Digital</h1>
                        <h4 className="subtitle font-light">Soluciones innovadoras y creatividad digital</h4>
                        <a href="https://wrappixel.com/templates/wrapkit-react-lite/" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Download Free</a>
                        <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
