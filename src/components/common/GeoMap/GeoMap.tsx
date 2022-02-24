import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import styles from './GeoMap.module.scss';
import PlaceMarkIcon from '../../../content/svg/placemark.svg';

interface IGeoMapProps {
  className: string,
}

const coordinates = [
  [45.04394420175372, 38.97136248867806],
  [45.032046988850865, 38.984794991424636],
];

function GeoMap(props: IGeoMapProps) {
  const {className} = props;
  return (
    <YMaps>
      <Map
        defaultState={{center: [45.03930428067023, 38.97473134320078], zoom: 13}}
        className={`${styles.map} ${className}`}
      >
        {coordinates.map((coordinate) => (
          <Placemark
            key={coordinate[0]}
            geometry={coordinate}
            options={{
              iconLayout: 'default#image',
              iconImageHref: PlaceMarkIcon,
              iconImageSize: [30, 30],
              iconImageOffset: [-10, -10],
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
}

export default GeoMap;
