import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const Buttons = () => {
    return (
        <div id="element">
            <div className="spacer" id="reactstrap-components">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Desarrollo web en Lima, Perú</h1>
                            <h6 className="subtitle">Somos una agencia digital especializada en diseño de páginas. Nos enfocamos en el desarrollo de páginas web creadas a medida, con un diseño único y creativo. Logramos una estrategia digital que interactúa de manera efectiva con redes sociales y aseguramos una óptima implementación. Te garantizamos el crecimiento de tu marca en internet. Contactarnos sin compromiso.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
         
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                      
                        <div className="mt-4">
                            <Button outline color="primary">primary</Button>{' '}
                            <Button outline color="secondary">secondary</Button>{' '}
                         
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Buttons;


