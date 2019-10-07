//↓サーバーから渡されるピンの場所

const onMarker = [
  {
    id: '1',
    types: '1000',
    lat: 35.465786,
    lng: 139.622313,
    name: '横浜駅'
  },
  {
    id: '2',
    types: '1010',
    lat: 35.471027,
    lng: 139.627114,
    name: '神奈川駅'
  },
  {
    id: '3',
    types: '1100',
    lat: 35.459559,
    lng: 139.616207,
    name: '平沼橋駅'
  },
  {
    id: '4',
    types: '0010',
    lat: 35.453406,
    lng: 139.608495,
    name: '西横浜駅'
  },
  {
    id: '5',
    types: '0011',
    lat: 35.45665,
    lng: 139.619537,
    name: '戸部駅'
  }
];

/*
//↓マップの初期位置・設定

let MyLatLng = new google.maps.LatLng(35.465843, 139.622669);
const Options = {
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

//↓mapdivにマップを映す

const map = new google.maps.Map(document.getElementById('map'), Options);
*/

const initMap = () => {
  /*現在地の取得*/
  navigator.geolocation.getCurrentPosition(function(position) {
    const MyLatLng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    console.log(position.coords.latitude);

    //const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    //  const MyLatLng = new google.maps.LatLng(
    //    presentLocationData['lat'],
    //    presentLocationData['lon']
    //  );
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
    markerDisplay(map);
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
  });
};

document.getElementById('return').addEventListener('click', () => {
  window.location.href = '../PoiMap-home/PoiMap-home.html';
});

const getClickLatLng = (lat_lng, map) => {
  console.log(lat_lng.lat());
  console.log(lat_lng.lng());
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
    if (sessionStorage.getItem('lat') === null) {
      sessionStorage.setItem('lat', lat_lng.lat());
      sessionStorage.setItem('lng', lat_lng.lng());
    } else {
      sessionStorage.removeItem('lat');
      sessionStorage.removeItem('lng');
      sessionStorage.setItem('lat', lat_lng.lat());
      sessionStorage.setItem('lng', lat_lng.lng());
    }
  }
  //いいえをクリックしたら消去
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
  $('#goAddForm').click(function() {
    //位置情報保存
    //投稿フォームへ
  });
};

//↓種別の配列、ループ内で使用。
const genre = [
  'burnable-icon',
  'nonBurnable-icon',
  'petBottle-icon',
  'aluminumGlass-icon'
];

//マーカー表示
const markerDisplay = map => {
  //↓配列が続くまで座標を表示する
  console.log(map);
  for (let i = 0; i < onMarker.length; i++) {
    const lat = onMarker[i].lat;
    const lng = onMarker[i].lng;
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map
    });

    // ↓詳細ページに代わるときの設定 -------------

    const garbageOpen = document.getElementById('informaion');

    marker.addListener('click', () => {
      garbageOpen.classList.toggle('open');
      let id = onMarker[i].id;
      //let work = garbageOpen.id;
      document.getElementById('garbage-whereName').innerHTML = onMarker[i].name;
      let check = null;
      let val = onMarker[i].types;
      for (let j = 0; j <= 3; j++) {
        check = val.slice(0, 1);

        val = val.slice(1, 4 - j);
        console.log(val);
        console.log(check);

        if (check == '0') {
          const icon = document.getElementsByClassName(genre[j])[1];

          icon.classList.add('off');

          const border = document.getElementsByClassName('category-border')[
            j + 5
          ];
          border.classList.add('off');
        }
      }
      //コメント投稿
      document
        .getElementById('comment-add-button')
        .addEventListener('click', () => {
          const commentContent = document.getElementById('comment-add-text');

          //garbageOpen.id = i;
          //文章内容をcommentTextに
          const commentText = commentContent.value;

          console.log(commentText);

          //↓投稿ボタンを押すと投稿画面が消える
          document
            .getElementById('comment-add-background')
            .classList.toggle('open');
          document.getElementById('comment-add-box').classList.toggle('open');

          //↓投稿日時取得
          const today = new Date();
          const year = today.getFullYear();
          const month = today.getMonth() + 1;
          const day = today.getDate();
          const date = `${year}/${month}/${day}`;
          console.log(date);

          //テキストエリア内の文章を空に
          commentContent.value = '';
          console.log('id:' + id);
          id = null;
        });
    });

    document.getElementById('garbage-close').addEventListener('click', () => {
      garbageOpen.classList.toggle('open');

      //garbageOpen.id = work;

      setTimeout(() => {
        for (let i = 0; i <= 3; i++) {
          const icon = document.getElementsByClassName(genre[i])[1];
          icon.classList.remove('off');
          const border = document.getElementsByClassName('category-border')[
            i + 5
          ];
          border.classList.remove('off');
        }
      }, 500);
    });
  }
};
