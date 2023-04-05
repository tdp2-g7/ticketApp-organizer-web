/* eslint-disable import/no-extraneous-dependencies */
import React, { FC, useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';
import L from 'leaflet';
import './styles.css';
import { IMapProps } from './types';

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

const Search = (props: any) => {
  const map = useMap();
  const { provider } = props;

  const searchEventHandler = (result: any) => {
    props.onSearch(result.location);
    props.setLocation(result.location);
  };

  useEffect(() => {
    const searchControl = new (GeoSearchControl as any)({
      provider,
      style: 'bar',
      searchLabel: 'Buscar direccion',
      marker: {
        icon,
      },
    });

    map.addControl(searchControl);
    map.on('geosearch/showlocation', searchEventHandler);
    return () => { map.removeControl(searchControl); };
  }, [props]);

  return null;
};

const Map: FC<IMapProps> = (props: IMapProps) => {
  const {
    onSearch, lat = -34.6037561, lng = -58.3816139, isPreview = false,
  } = props;
  const [location, setLocation] = useState<any>({});

  return (
        <MapContainer
            center={[lat, lng]}
            zoom={isPreview ? 20 : 13}
            scrollWheelZoom
            style={{
              height: '30vh', width: '100wh', borderRadius: '10px',
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
                position={[lat, lng]}
                icon={icon}
            >
                <Popup>{location.label}</Popup>
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <Search
                    provider={new OpenStreetMapProvider()}
                    onSearch={onSearch}
                    setLocation={setLocation} />
                </div>
            </Marker>
        </MapContainer>
  );
};

export default Map;
