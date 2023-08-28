import React from 'react';
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';
// CSS:
import '../css/Cardapio.css';
// components:
import menu from '../assets/img/Menu-2.png';

export default function Cardapio() {
    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-once="true"
            className="Menu"
            id="menu">
            <div className="capa">
                <div className="texto-capa">
                    <img
                        src={menu}
                        width="130"
                        alt="Menu"
                        className="menu-imagem"
                    />
                </div>
            </div>
            <Accordion id="menuAccordion" style={{ color: '#121212' }}>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    style={{
                                        backgroundColor: '#fff',
                                        fontSize: '24px',
                                    }}>
                                    Frutos do Mar
                                </Accordion.Toggle>
                                <Accordion.Collapse
                                    eventKey="0"
                                    style={{ fontSize: '20px' }}>
                                    <Card.Body>
                                        <p>Risoto de camarão</p>
                                        <p>Moqueca de camarão</p>
                                        <p>Sopa de lula e camarões</p>
                                        <p>Polvo grelhado</p>
                                        <p>Camarão na moranga</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                    style={{
                                        backgroundColor: '#fff',
                                        fontSize: '24px',
                                    }}>
                                    Massas
                                </Accordion.Toggle>
                                <Accordion.Collapse
                                    eventKey="1"
                                    style={{ fontSize: '20px' }}>
                                    <Card.Body>
                                        <p>Lasanha de berinjela</p>
                                        <p>Raviolone de cúrcuma</p>
                                        <p>Espaguete à bolonhesa</p>
                                        <p>Rondelli de brócolis e ricota</p>
                                        <p>Ninho recheado com requeijão</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Accordion>
        </div>
    );
}
