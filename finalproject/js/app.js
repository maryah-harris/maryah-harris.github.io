$(document).ready(function(){
  AmCharts.makeChart( "mapdiv", {
  /**
   * this tells amCharts it's a map
   */
  "type": "map",

  /**
   * create data provider object
   * map property is usually the same as the name of the map file.
   * getAreasFromMap indicates that amMap should read all the areas available
   * in the map data and treat them as they are included in your data provider.
   * in case you don't set it to true, all the areas except listed in data
   * provider will be treated as unlisted.
   */
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": false,
    "areas": [  
    { "id": "LK" },
    { "id": "SS" },
    { "id": "SY"},
    { "id":"RU"},
    { "id":"TH"},
    { "id":"GH"},
    { "id":"DZ"},
    { "id":"VE"},
    { "id":"HT"},

  ],
  "images": [ {
    "latitude": 40.3951,
    "longitude": -73.5619,
    "type": "circle",
    "color": "#6c00ff",
     "label": "New York",
     "title": "New York",
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
  },
  {
    "latitude": 42.9662,
    "longitude": 11.2047,
    "type": "circle",
    "color": "#6c00ff",
     "label": "IT",
     "title": "IT",
      "description": "New York is the most populous city in the United States and the center of the New York Metropolitan Area, one of the most populous metropolitan areas in the world."
  } ],
  "lines": [
      {
        "latitudes": [51.5002, 50.4422],
        "longitudes": [-0.1262, 30.5367]
      }
    ]
  },

  /**
   * create areas settings
   * autoZoom set to true means that the map will zoom-in when clicked on the area
   * selectedColor indicates color of the clicked area.
   */
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },

  /**
   * let's say we want a small map to be displayed, so let's create it
   */
  "smallMap": {}
} );
})