/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const BannerComponent = () => {
    return (
        <div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">¿Por qué elegirnos?</h1>
                            <h6 className="subtitle">Creadores de estrategias digitales de crecimiento.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="static-slider10">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="align-self-center text-center">
                            <span className="label label-rounded label-inverse">Creating Brands</span>
                            <h1 className="title">El mejor equipo para tu proyecto</h1>
                            <h6 className="subtitle op-8">Somos la mejor opción para el desarrollo web de tu empresa.</h6>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span>Contactarnos <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="static-slider3">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" className="align-self-center text-center">
                            <h1 className="title">Somos Pengrafic, un <b className="font-bold">emprendedor, diseñador y desarrollador front-end</b>, que hace <span className="text-success-gradiant font-bold typewrite" data-period="2000" data-type='[ "Photoshop", "Web Application", "Web Designing", "Web Development" ]'></span></h1>
                            <a className="btn btn-success-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span>Mira mis Trabajos <i className="ti-arrow-right"></i></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
