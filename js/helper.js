var googleMap = '<div id="map"></div>';
var HTMLinfoWindowContent = '<div class="title">%data%</div>';

// international name converter
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

// collecting click locations
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// custom google map; https://developers.google.com/maps/documentation/javascript/reference

var map; // declares a global map variable

//initializeMap() is called when page is loaded
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  //This next line makes `map` a new Google Map JavaScript Object and attaches it to <div id="map">
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  // locationFinder() returns an array of every location string from the JSONs
  // written for bio, education, and work
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(contact.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  // createMapMarker(placeData) reads google places search results to create map pins
  // placeData is the object returned from search results containing information
  // about a single location
  function createMapMarker(placeData) {

    // the next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      animation: google.maps.Animation.DROP
    });

marker.setMap(map);

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location
    var formattedContent = HTMLinfoWindowContent.replace("%data%", name);

    var infoWindow = new google.maps.InfoWindow({
      content: formattedContent
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());

  }

  // callback(results, status) makes sure the search returned results for a location
  // if so, it creates a new map marker for that location
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  // pinPoster(locations) takes in the array of locations created by locationFinder()
  // and fires off Google place searches for each location
  function pinPoster(locations) {

    // creates a google place search service object
    // placesService does the work of actually searching for location data
    var service = new google.maps.places.PlacesService(map);

    // iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // actually searches the google maps api for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// vanilla js way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
