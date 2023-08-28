import React, { useState } from 'react';
import Map from '../Map';
import { Layers, TileLayer, VectorLayer } from '../Layers';
import { Icon, Style } from 'ol/style';
import { osm, vector } from '../aux';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import img from '../assets/img/7f6cdce4c15b2d1548b618ce5573bfd3.png';
import useWindow from '../utils/useWindowSize';
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
    const [center] = useState([-38.532, -13.01]);
    const [zoom] = useState(18);

    const window = useWindow();

    return (
        <div className="map-div" style={{ borderRadius: 5 }}>
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
                                    featureProjection: get('EPSG:3857'),
                                }
                            ),
                        })}
                        style={styles.Point}
                    />
                </Layers>
            </Map>
        </div>
    );
};

export default App;
