const presentLocationData = {
  lat: 35.465843,
  lon: 139.622669
};

const destinationLocateData = {
  lat: 35.4690564,
  lon: 139.6211406
};

//現在地を中心に地図を表示する
const initMap = () => {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const MyLatLng = new google.maps.LatLng(
    presentLocationData['lat'],
    presentLocationData['lon']
  );
  const mapOptions = {
    zoom: 15,
    center: MyLatLng,
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  //地図を表示する
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
  map.addListener('click', e => {
    //マーカーを設置して、
    getClickLatLng(e.latLng, map);
    //let addBox = document.getElementById('addBox');
  });
  /*
  //2地点間のルートを表示
  const request = {
    //現在地
    origin: new google.maps.LatLng(
      presentLocationData['lat'],
      presentLocationData['lon']
    ),
    //目的地
    destination: new google.maps.LatLng(
      destinationLocateData['lat'],
      destinationLocateData['lon']
    ),
    travelMode: google.maps.DirectionsTravelMode.WALKING
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
  */
};

document.getElementById('return').addEventListener('click', () => {
  window.location.href = '../PoiMap-home/PoiMap-home.html';
});

const getClickLatLng = (lat_lng, map) => {
  // マーカーを設置
  const marker = new google.maps.Marker({
    position: lat_lng,
    map: map
  });
  //
  const hasSelectClass = $('#addBox').hasClass('addBox');
  if (hasSelectClass) {
    //あるとき
    $('#addBox').removeClass('addBox');
    $('#addBox').addClass('selectAddBox');
    $('#addBoxText').append('新しくゴミ箱を追加しますか？');
    $('#goAddForm').removeClass('boxButton');
    $('#goAddForm').addClass('addBoxButton');
    $('#goAddForm').html('はい');
    $('#returnMap').removeClass('boxButton');
    $('#returnMap').addClass('addBoxButton');
    $('#returnMap').html('いいえ');
  }
  //消去
  $('#returnMap').click(function() {
    $('#addBox').removeClass('selectAddBox');
    $('#addBox').addClass('addBox');
    $('#addBoxText').html('');
    $('#goAddForm').removeClass('addBoxButton');
    $('#goAddForm').addClass('boxButton');
    $('#goAddForm').html('');
    $('#returnMap').removeClass('addBoxButton');
    $('#returnMap').addClass('boxButton');
    $('#returnMap').html('');
    marker.setMap(null);
  });
  console.log(lat_lng.lat());
  console.log(lat_lng.lng());
  $('#goAddForm').click(function() {
    //位置情報保存
    //投稿フォームへ
  });
};
