import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

const CallToAction = () => {
    return (
        <div className="coming-soon" id="coming">
            <Container className="py-5 mt-5">
                <Row>
                    <Col md="6">
                        <div className="d-flex align-items-center">
                            <div>
                                <h2 className="title text-white font-weight-bold">Metodología de Increasing Digital</h2>
                                <h6 className="subtitle font-light text-white">Incrementa las ventas de tu negocio con dos mejores estrategias de marketing digital: Inbound Marketing y Lead Nurturing.</h6>
                                {/* <a href="/#coming" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Comming Soon</a> */}
                                <Link to="/#coming" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Saber más</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CallToAction;
