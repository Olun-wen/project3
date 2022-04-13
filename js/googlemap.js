function init(){
  var el = document.getElementById('map');
  var guangzhou = new google.maps.LatLng(23.105678, 113.325105);
  var mapOptions = {
    zoom:17,
    center:guangzhou,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var myMap =new google.maps.Map(el,mapOptions);

  var quadCooeds = [
    {lat:23.107376, lng:113.325963},
    {lat:23.104505, lng:113.324911},
    {lat:23.104821, lng:113.323870},
    {lat:23.108050, lng:113.323404},
  ];
  var quad = new google.maps.Polygon({
    paths:quadCooeds,
    strokeColor:"#ff0000",
    fillColor:"#ff0000",
    strokeOpacity:1,
    strokeWeight:1,
    fillOpacity:0.2,
  });
  quad.setMap(myMap);
}
google.maps.event.addDomListener(window, 'load', init);