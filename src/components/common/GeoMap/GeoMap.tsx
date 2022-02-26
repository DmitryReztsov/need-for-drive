import React, {useEffect, useState} from 'react';
import {
  Map, Placemark, YMapsApi, AnyObject,
} from 'react-yandex-maps';
import styles from './GeoMap.module.scss';
import PlaceMarkIcon from '../../../content/svg/placemark.svg';
import useAppendParams from '../../../hooks/useAppendParams';

interface IGeoMapProps {
  className: string,
  city?: string,
  pickPoint?: string,
  pickPoints: {city: string, address: string} [],
}

function GeoMap(props: IGeoMapProps) {
  const {
    className, city, pickPoint, pickPoints,
  } = props;

  const [ymaps, setYmaps] = useState<YMapsApi | null>(null);
  const [center, setCenter] = useState<number[]>([45.0222, 38.97745623606236]);
  const [geoPickPoints, setGeoPickPoints] = useState<any[]>([]);
  const [zoom, setZoom] = useState<number>(10);

  const appendParams = useAppendParams();

  function getPickPointData(ymaps: YMapsApi) {
    pickPoints.forEach((pickPoint) => {
      ymaps.geocode(`${pickPoint.city}, ${pickPoint.address}`)
        .then((result: AnyObject) => {
          setGeoPickPoints((state) => {
            const obj = Object.assign(result.geoObjects.get(0), pickPoint);
            state.push(obj);
            return state;
          });
        });
    });
  }

  function getGeoLocation(ymaps: YMapsApi) {
    setYmaps(ymaps);
    getPickPointData(ymaps);
    if (city) {
      return ymaps.geocode(city)
        .then((result: AnyObject) => result.geoObjects.get(0))
        .then((result: AnyObject) => {
          setCenter(result.geometry.getCoordinates());
        });
    }
    return ymaps.geolocation
      .get({provider: 'yandex', mapStateAutoApply: true})
      .then((result: AnyObject) => result.geoObjects.get(0))
      .then((result: AnyObject) => {
        appendParams('city', result.getLocalities().join(', '));
        setCenter(result.geometry.getCoordinates());
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }

  function setNewCenter(data: string) {
    if (ymaps) {
      ymaps.geocode(data)
        .then((result: AnyObject) => result.geoObjects.get(0))
        .then((result: AnyObject) => {
          setCenter(result.geometry.getCoordinates());
        });
    }
  }

  function setPickPoint(pickPoint: any) {
    setCenter(pickPoint.geometry.getCoordinates());
    appendParams('city', pickPoint.city);
    appendParams('pickPoint', pickPoint.address);
  }

  useEffect(() => {
    setZoom(pickPoint ? 15 : 10);
  }, [pickPoint]);

  useEffect(() => {
    setNewCenter(city ? `${city}, ${pickPoint}` : 'Краснодар');
  }, [city, pickPoint]);
  return (
    <Map
      modules={['geolocation', 'geocode']}
      state={{center, zoom}}
      className={`${styles.map} ${className}`}
      onLoad={getGeoLocation}
    >
      {geoPickPoints.map((pickPoint) => {
        return (
          <Placemark
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            key={pickPoint.geometry.getCoordinates()[0]}
            geometry={pickPoint.geometry.getCoordinates()}
            properties={{
              balloonContent: `<p>${pickPoint.getAddressLine()}</p>`,
              hintContent: pickPoint.getAddressLine(),
            }}
            onClick={() => setPickPoint(pickPoint)}
            options={{
              iconLayout: 'default#image',
              iconImageHref: PlaceMarkIcon,
              iconImageSize: [30, 30],
              iconImageOffset: [-10, -10],
            }}
          />
        );
      })}
    </Map>
  );
}

export default GeoMap;
