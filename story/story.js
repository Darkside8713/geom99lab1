
 function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 45.4215, lng: -75.6972 },
    mapTypeId: "terrain",
  });
     
  const driveCoordinates = [
    { lat: 43.2557, lng: -79.8711 },
    { lat: 46.3430, lng: -72.5421 },
  ];
    
  const drivePath = new google.maps.Polyline({
    path: driveCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  drivePath.setMap(map);
}

window.initMap = initMap;
