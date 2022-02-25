import React, {useEffect, useState} from 'react';
import {
  YMaps, Map, Placemark, YMapsApi, AnyObject,
} from 'react-yandex-maps';
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
  const [center, setCenter] = useState<number[]>([45.0222, 38.97745623606236]);
  const [zoom] = useState<number>(15);

  function getGeoLocation(ymaps: YMapsApi) {
    return ymaps.geolocation
      .get({provider: 'yandex', mapStateAutoApply: true})
      .then((result: AnyObject) => result.geoObjects.get(0).geometry.getCoordinates())
      .then((result: number[]) => setCenter(result));
  }
  useEffect(() => {
    console.log(center);
  }, [center]);
  return (
    <YMaps query={{
      apikey: 'ceb8bf1f-3f9d-44a1-860e-bb81742a3049',
    }}
    >
      <Map
        modules={['geolocation', 'geocode']}
        state={{center, zoom}}
        className={`${styles.map} ${className}`}
        onLoad={(ymaps) => getGeoLocation(ymaps)}
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