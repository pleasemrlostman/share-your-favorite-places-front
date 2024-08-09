import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default async function MapBox() {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100%" }}
      level={3}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
