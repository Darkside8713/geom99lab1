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
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
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
}

window.initMap = initMap;
