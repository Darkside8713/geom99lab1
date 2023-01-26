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
    "<p><b>Hamilton</b> is a port city in the Canadian province of Ontario. Hamilton has a population of 569,353, and its census metropolitan area, which includes Burlington and Grimsby, has a population of 785,184. The city is approximately 45 kilometres (28 mi) southwest of Toronto in the Greater Toronto and Hamilton Area (GTHA).Conceived by George Hamilton when he purchased the Durand farm shortly after the War of 1812, the town of Hamilton became the centre of a densely populated and industrialized region at the west end of Lake Ontario known as the Golden Horseshoe.On January 1, 2001, the current boundaries of Hamilton were created through the amalgamation of the original city with other municipalities of the Regional Municipality of Hamilton–Wentworth.[8] Residents of the city are known as Hamiltonians. Traditionally, the local economy has been led by the steel and heavy manufacturing industries. During the 2010s, a shift toward the service sector occurred, such as health and sciences. Hamilton is home to the Royal Botanical Gardens, the Canadian Warplane Heritage Museum, the Bruce Trail, McMaster University, Mohawk College, and Redeemer University. McMaster University is ranked 4th in Canada and 69th in the world by Times Higher Education Rankings 2021.[10]</p>" '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/wiki/Hamilton,_Ontario"> </p>" 
"</div>"
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
