import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, SearchControl, Placemark } from "react-yandex-maps";

// import "./styles.css";

const mapState = { center: [55.750625, 37.626], zoom: 7 };

function PrintMapPoints() {
  const [ymaps, setYmaps] = useState(null);
  const [text, setText] = useState(null);
  const [bounds, setBounds] = useState(null);
  const routes = useRef();
  const mapRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    // console.log(searchRef);
    if (text && searchRef.current) {
      searchRef.current.search(text);
    }
  }, [text]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setBounds(bounds);
      // console.log(bounds);
    }
  }, [bounds]);

  const getRoute = (ref) => {
    if (ymaps) {
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          // Описание опорных точек мультимаршрута.
          referencePoints: [[55.734876, 37.59308], "Москва, ул. Мясницкая"],
          // Параметры маршрутизации.
          params: {
            // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
            results: 2
          }
        },
        {
          // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
          boundsAutoApply: true,
          // Внешний вид линии маршрута.
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: "#fa6600"
        }
      );

      routes.current = multiRoute;
      ref.geoObjects.add(multiRoute);
    }
  };

  const getRoutes = () => {
    // console.log(ymaps);
    // console.log(
    //   ymaps.coordSystem.geo.getDistance(
    //     [55.654884, 37.527034],
    //     [55.767305, 37.9761]
    //   )
    // );
    // mapRef.current.geoObjects.each((item) => console.log(item));
  };

  // if (mapRef.current) {
  //   console.log(mapRef.current.getZoom());
  // }

  return (
    <div className="App">
      <YMaps version="2.1.77">
        <Map
          modules={[
            "multiRouter.MultiRoute",
            "coordSystem.geo",
            "geocode",
            "util.bounds"
          ]}
          onLoad={(ymaps) => {
            setYmaps(ymaps);
            const points = [
              [55.984758, 39.938521],
              [55.684758, 37.738521]
            ];
            setBounds(ymaps.util.bounds.fromPoints(points));
          }}
          state={mapState}
          instanceRef={(ref) => {
            if (ref) {
              // setTimeout(() => console.log(ref.geoObjects.getBounds()), 100);
              mapRef.current = ref;
              // ref.setBounds(bounds);
            }
          }}
        // instanceRef={ref => ref && getRoute(ref)}
        >
          <SearchControl
            instanceRef={(ref) => {
              if (ref) searchRef.current = ref;
            }}
            options={{
              float: "right",
              provider: "yandex#search",
              size: "large"
            }}
          />
          <Placemark
            geometry={[55.984758, 39.938521]}
            properties={{
              balloonContentBody: "Test 6"
            }}
            onClick={() => setText("Test 6")}
          />
          <Placemark
            geometry={[55.684758, 37.738521]}
            properties={{
              balloonContentBody: "Test 1"
            }}
            onClick={() => setText("Test 1")}
          />
          <Placemark
            geometry={[55.254758, 37.538521]}
            properties={{
              balloonContentBody: "Test 2"
            }}
            onClick={() => setText("Test 2")}
          />
          <Placemark
            geometry={[55.484758, 37.638521]}
            properties={{
              balloonContentBody: "Test 3"
            }}
            onClick={() => setText("Test 3")}
          />
          {/* <RouteEditor /> */}
        </Map>
        <button onClick={getRoutes}>Show route</button>
      </YMaps>
    </div>
  );
}

export default PrintMapPoints
