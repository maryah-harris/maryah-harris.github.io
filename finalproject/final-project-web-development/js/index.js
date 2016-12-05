

var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "projection": "miller",

  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#089282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892"
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "South Sudan",
      "latitude": 7.8496672,
      "longitude": 25.1945546
     
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Russia",
      "latitude": 68.6721709,
      "longitude": 49.7634304,
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Belize",
      "latitude": 18.001593,
      "longitude": -89.4810613
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Syria",
      "latitude": 36.802329,
      "longitude": 34.798828
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Marshall Island",
      "latitude": 6.0682297,
      "longitude": 171.662362
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Haiti",
      "latitude": 19.0549207,
      "longitude": -74.1727104,
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Central African Republic",
      "latitude": 16.4362387,
      "longitude": 6.6101202,
      
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Burundi",
      "latitude": 28.8037528,
      "longitude": -3.3861358
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Venezuela",
      "latitude": 6.6477166,
      "longitude": -71.1151308
      
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Equatorial Guinea",
      "latitude": 1.6208095,
      "longitude": 9.7572591
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "North Korea",
      "latitude": 40.9230142 ,
      "longitude": 75.5950699
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Mauritania",
      "latitude": 20.80056651,
      "longitude": -19.9915913
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Turkmenistan",
      "latitude": 38.8861928,
      "longitude": 55.0849406
  }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Myanmar",
      "latitude": 18.8743593,
      "longitude": 87.6325801
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Papua New Guinea",
      "latitude": -6.1872707,
      "longitude": 139.9173425
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Uzbekistan",
      "latitude": 41.302034,
      "longitude": 60.0818413
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Djibouti",
      "latitude": 11.823269,
      "longitude": 41.4670349
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Thailand",
      "latitude": 12.9038302,
      "longitude": 92.4436432
   }, {      
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Algeria",
      "latitude": 11.8232693,
      "longitude": 41.4670349
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Iran",
      "latitude": 32.6602699,
      "longitude": 54.570245
    } ]
  }
  
} );

// add events to recalculate map position when the map is moved or zoomed
map.addListener( "positionChanged", updateCustomMarkers );

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers( event ) {
  // get map object
  var map = event.chart;

  // go through all of the images
  for ( var x in map.dataProvider.images ) {
    // get MapImage object
    var image = map.dataProvider.images[ x ];

    // check if it has corresponding HTML element
    if ( 'undefined' == typeof image.externalElement )
      image.externalElement = createCustomMarker( image );

    // reposition the element accoridng to coordinates
    var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
    image.externalElement.style.top = xy.y + 'px';
    image.externalElement.style.left = xy.x + 'px';
  }
}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  // create holder
  var holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  var dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  var pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}