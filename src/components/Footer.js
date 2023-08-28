/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import useStateWindow from '../utils/useWindowSize';
// CSS:
import '../css/Footer.css';
// components:
import {
    Container,
    OverlayTrigger,
    Tooltip,
    Modal,
    Button,
} from 'react-bootstrap';
// Images:
import instagram from '../assets/img/footer/ainstagram.svg';
import ifood from '../assets/img/footer/ifood.svg';
import facebook from '../assets/img/footer/Facebook_new.svg';


export default function Footer() {
    const window = useStateWindow();

    // Modal Map:
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-once="true"
            variant="dark"
            id="contatos"
            style={{ backgroundColor: '#121212' }}>
            <Container>
                <div className="row footerContainer">
                    <div className="col">
                        <h1 className="footerText restauranteText">
                            Le Chronos Ristorant
                        </h1>
                    </div>
                    <div className="col">
                        <h1 className="footerText">Contatos</h1>
                        <ul class="nav" style={styles.centralize}>
                            <li class="social-media-icon">
                                <a href="#instagram-link">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>Instagram</Tooltip>}>
                                        <img
                                            className="iconEffect"
                                            src={instagram}
                                            width={40}
                                            alt="Instagram"
                                        />
                                    </OverlayTrigger>
                                </a>
                            </li>
                            <li class="social-media-icon">
                                <a href="#facebook-link">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>Facebook</Tooltip>}>
                                        <img
                                            className="iconEffect"
                                            src={facebook}
                                            width={40}
                                            alt="Facebook"
                                        />
                                    </OverlayTrigger>
                                </a>
                            </li>
                            <li class="social-media-icon">
                                <a href="#ifood-link">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>iFood</Tooltip>}>
                                        <img
                                            className="iconEffect"
                                            src={ifood}
                                            width={40}
                                            alt="iFood"
                                        />
                                    </OverlayTrigger>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div>
                            <h1 className="footerText">Nosso Endereço</h1>
                            <h5 className="footerTextMinor">
                                Rua Bela Vista, Número 72 <br />
                                CEP 41607-211 <br />
                                <a onClick={handleShow}>
                                    (clique para ver no Maps)
                                </a>
                            </h5>
                        </div>

                        <Modal
                            style={{
                                height: window.height,
                                width: window.width,
                                backgroundColor: 'rgba(18,18,18,0.7)',
                            }}
                            show={show}
                            onHide={handleClose}>
                            <Modal.Header className="modal-title" closeButton>
                                <Modal.Title>Nosso Endereço</Modal.Title>
                            </Modal.Header>

                            <Modal.Footer className="modal-footer">
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}>
                                    Fechar
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <div>
                            {/*<h1 className="footerText credits">
                            Feito com{' '}
                            <img
                                src={hearth}
                                width={50}
                                style={{ marginBottom: 10 }}
                            />{' '}
                            por{' '}
                            <img src={chronos} style={{ display: 'flex' }} />
    </h1>*/}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div class="nav">
                        <span class="footerText bottom">
                            <a href="">Legal</a>
                        </span>
                        <span class="footerText bottom">
                            <a href="">Centro de Privacidade</a>
                        </span>
                        <span class="footerText bottom">
                            <a href="">Política de privacidade</a>
                        </span>
                        <span class="footerText bottom">
                            <a href="">Cookies</a>
                        </span>
                        <span class="footerText bottom">
                            <a href="">Sobre anúncios</a>
                        </span>
                    </div>

                    <div className="col">
                        <span class="footerText bottom right">
                            <a href="http://chronosdev.com.br/">
                                © 2021 Chronos WebDev
                            </a>
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

const styles = {
    centralize: {
        alignItems: 'center',
    },
};
