function initMap() {
    const hhh = { lat: 43.2557, lng: -79.8711 };
    const ttr = { lat: 46.3430, lng: -72.5421 };
    const iconURL = { url: 'https://darkside8713.github.io/geom99lab1/story/2767099-200.png' }
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 45.4215, lng: -75.6972 },
    });
    
// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/examples/polyline-simple#maps_polyline_simple-javascript
    const first = [
      hhh, ttr
    ] ;
    const firstFlightPath = new google.maps.Polyline({
        path: first,
        geodesic: true,
        strokeColor: "#FFADAD",
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });

    const secondFlightPath = new google.maps.Polyline({
        path: second,
        geodesic: true,
        strokeColor: "#CAFFBF",
        strokeOpacity: 1.0,
        strokeWeight: 4,
    });
  
  firstFlightPath.setMap(map);

// The following script is taken (and modified) from: https://developers.google.com/maps/documentation/javascript/custom-markers
// As well as: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
// And also: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple

const hhhContentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Dubai</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Dubai International Airport</b>, known by the airport code <b>DXB</b>, is the largest " +
    "international airport in the United Arab Emirates. It is one of " +
    "the world's busiest airports -- the busiest for Airbus A380 and Boeing " +
    "B777 movements. The airport is the hub for Emirates, the largest airline " +
    "in the Middle East. The airline operates out of the airport's " +
    "Terminal 3.</p>" +
    '<p>Attribution: Dubai International Airport, <a href="https://en.wikipedia.org/wiki/Dubai_International_Airport">' +
    "https://en.wikipedia.org/wiki/Dubai_International_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const hhhinfowindow = new google.maps.InfoWindow({
  content: hhhContentString,
  ariaLabel: "Dubai Airport",
  });
const hhhMarker = new google.maps.Marker({
  position: hhh,
  map,
  icon: iconURL,
  title: "hhh",
  });

hhhMarker.addListener("click", () => {
  hhhinfowindow.open({
  anchor: hhhMarker,
  map,
    });
  });


const ttrContentString = 
'<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Saint John</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Saint John Airport (YSJ)</b> is a small airport serving the city of Saint John in " +
    "the province of New Brunswick. Despite being situated 15 km from the city's central business" +
    "district, the airport is still the boundaries of the city. Moreover, despite being a small airport, " +
    "the airport is designated as an airport of entry by Nav Canada and is staffed by " +
    "Canada Border Services Agency (CBSA). Mostly, it is CANPASS flights that are served by the CBSA from this port of entry. </p>" +
    '<p>Attribution: Saint John Airport, <a href="https://en.wikipedia.org/wiki/Saint_John_Airport">' +
    "https://en.wikipedia.org/wiki/Saint_John_Airport</a> " +
    "(last visited January 25, 2023).</p>" +
    "</div>" +
    "</div>";

const ttrinfowindow = new google.maps.InfoWindow({
  content: ttrContentString,
  ariaLabel: "Saint John Airport",
  });
const ttrMarker = new google.maps.Marker({
  position: ttr,
  map,
  icon: iconURL,
  title: "ttr",
  });

ttrMarker.addListener("click", () => {
  ttrinfowindow.open({
  anchor: ttrMarker,
  map,
    });
  });

}

window.initMap = initMap;
