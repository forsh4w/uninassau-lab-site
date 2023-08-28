import React, { useState, useEffect } from 'react';
import Map from '../Map';
import { Layers, TileLayer, VectorLayer } from '../Layers';
import { Circle as CircleStyle, Icon, Stroke, Style } from 'ol/style';
import { osm, vector } from '../aux';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import img from '../assets/img/7f6cdce4c15b2d1548b618ce5573bfd3.png';
import useWindow from '../utils/useWindowSize';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Map.css';

let styles = {
    Point: new Style({
        image: new Icon({
            src: img,
            scale: 0.15,
        }),
    }),
};

const geojsonObject = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [-38.5329, -13.0103],
    },
    properties: {
        name: 'Dinagat Islands',
    },
};

const App = () => {
    const [center, setCenter] = useState([-38.532, -13.01]);
    const [zoom, setZoom] = useState(18);

    const window = useWindow();

    return (
        <div
            style={{
                backgroundColor: '#f9f0e1',

                paddingBottom: '50px',
                paddingTop: '50px',
            }}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className="map-div">
                                <Map
                                    center={fromLonLat(center)}
                                    zoom={zoom}
                                    style={{ width: window.width }}>
                                    <Layers>
                                        <TileLayer source={osm()} zIndex={0} />
                                        <VectorLayer
                                            source={vector({
                                                features: new GeoJSON().readFeatures(
                                                    geojsonObject,
                                                    {
                                                        featureProjection: get(
                                                            'EPSG:3857'
                                                        ),
                                                    }
                                                ),
                                            })}
                                            style={styles.Point}
                                        />
                                    </Layers>
                                </Map>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="endereco-text">
                            <div className="Endereco">
                                <h1 className="endereco-title">Endereço:</h1>
                                <h3 className="endereco-description">
                                    Rua Bela Vista, 72 <br />
                                    CEP 41607-211
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;
