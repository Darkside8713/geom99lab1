function initMap() {
  const h = { lat: 43.2557, lng: -79.8711 };
  const t = { lat: 46.3430, lng: -72.5421 };
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

const hcontentString =
   '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Hamilton</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Hamilton</b> is a port city in the Canadian province of Ontario. " +
    "Hamilton has a population of 569,353, and its census metropolitan area,  " +
    "which includes Burlington and Grimsby, has a population of 785,184. " +
    "he city is approximately 45 kilometres (28 mi) southwest of " +
    "Toronto in the Greater Toronto and Hamilton Area (GTHA). " +
    "</p>" +
    '<p>Attribution: Hamilton, Ontario, <a href="https://en.wikipedia.org/wiki/Hamilton,_Ontario">' +
    "https://en.wikipedia.org/wiki/Hamilton,_Ontario</a> "
    "</div>" +
    "</div>";
  
  const hinfowindow = new google.maps.InfoWindow({
    content: hcontentString,
    ariaLabel: "Hamilton",
  });
  const hmarker = new google.maps.Marker({
    position: { lat: 43.2557, lng: -79.8711 } ,
    map,
    title: "Hamilton",
  });

  hmarker.addListener("click", () => {
    hinfowindow.open({
      anchor: hmarker,
      map,
    });
  });

const tcontentString =
   '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Trois-Rivière</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Trois-Rivière</b> is a city in the Mauricie administrative region of Quebec, Canada," +
    "at the confluence of the Saint-Maurice and Saint Lawrence rivers," +
    "on the north shore of the Saint Lawrence River across from the city of Bécancour." +
    " It is part of the densely populated Quebec City–Windsor Corridor and is approximately" +
    "halfway between Montreal and Quebec City. Trois-Rivières is the economic and cultural hub" +
    "of the Mauricie region.[8] The settlement was founded by French colonists on July 4, 1634," +
    "as the second permanent settlement in New France,[9] after Quebec City in 1608." +
    "</p>" +
    '<p>Attribution: Hamilton, Ontario, <a href="https://en.wikipedia.org/wiki/Trois-Rivières">' +
    "https://en.wikipedia.org/wiki/Trois-Rivières</a> "
    "</div>" +
    "</div>";
  
  const tinfowindow = new google.maps.InfoWindow({
    content: tcontentString,
    ariaLabel: "Trois-Rivières",
  });
  
  const tmarker = new google.maps.Marker({
    position: { lat: 46.3430, lng: -72.5421 } ,
    map,
    title: "Trois-Rivières",
  });

  tmarker.addListener("click", () => {
    tinfowindow.open({
      anchor: tmarker,
      map,
    });
  });
}

window.initMap = initMap;
