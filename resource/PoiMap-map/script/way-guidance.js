/*
const presentLocationData = {
  "lat": 35.465843,
  "lon": 139.622669
};

const destinationLocateData = {
  "lat": 35.4690564,
  "lon": 139.6211406
};

//現在地を中心に地図を表示する
const initMap = () => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const MyLatLng = new google.maps.LatLng(presentLocationData['lat'], presentLocationData['lon']);
  const mapOptions = {
    zoom: 15,
    center: MyLatLng,
    mapTypeId: "roadmap",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  //地図を表示する
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsRenderer.setMap(map);
  //2地点間のルートを表示
  const request = {
    //現在地
    origin: new google.maps.LatLng(presentLocationData['lat'], presentLocationData['lon']),
    //目的地
    destination: new google.maps.LatLng(destinationLocateData['lat'], destinationLocateData['lon']),
    travelMode: google.maps.DirectionsTravelMode.WALKING
  };
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
};
*/
