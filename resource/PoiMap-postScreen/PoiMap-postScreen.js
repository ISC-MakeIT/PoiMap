// 写真選択時にプレビューを表示
document.getElementById('uploadImage').onchange = function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    $('#preview').css(
      'background',
      `url(${reader.result}) no-repeat center / cover`
    );
  };
  reader.readAsDataURL(this.files[0]);
};

// ゴミ箱の種類タッチしたらsvgの色を変更
$('#petBottle').click(function() {
  const result = $('#petBottle-icon').hasClass('nonSelectPetBottle-icon');
  if (result) {
    // 選択
    $('#petBottle-icon').removeClass('nonSelectPetBottle-icon');
    $('#petBottle-icon').addClass('selectPetBottle-icon');
    $('#petBottle-iconBorder').css('border', '#0272B6 1px solid');
  } else {
    //　非選択
    $('#petBottle-icon').removeClass('selectPetBottle-icon');
    $('#petBottle-icon').addClass('nonSelectPetBottle-icon');
    $('#petBottle-iconBorder').css('border', '#c5cdd1 1px solid');
  }
});

$('#burnable').click(function() {
  const result = $('#burnable-icon').hasClass('nonSelectBurnable-icon');
  if (result) {
    // 選択
    $('#burnable-icon').removeClass('nonSelectBurnable-icon');
    $('#burnable-icon').addClass('selectBurnable-icon');
    $('#burnable-iconBorder').css('border', '#0272B6 1px solid');
  } else {
    //　非選択
    $('#burnable-icon').removeClass('selectBurnable-icon');
    $('#burnable-icon').addClass('nonSelectBurnable-icon');
    $('#burnable-iconBorder').css('border', '#c5cdd1 1px solid');
  }
});

$('#aluminumGlass').click(function() {
  const result = $('#aluminumGlass-icon').hasClass(
    'nonSelectAluminumGlass-icon'
  );
  if (result) {
    // 選択
    $('#aluminumGlass-icon').removeClass('nonSelectAluminumGlass-icon');
    $('#aluminumGlass-icon').addClass('selectAluminumGlass-icon');
    $('#aluminumGlass-iconBorder').css('border', '#0272B6 1px solid');
  } else {
    //　非選択
    $('#aluminumGlass-icon').removeClass('selectAluminumGlass-icon');
    $('#aluminumGlass-icon').addClass('nonSelectAluminumGlass-icon');
    $('#aluminumGlass-iconBorder').css('border', '#c5cdd1 1px solid');
  }
});

$('#nonburnable').click(function() {
  const result = $('#nonburnable-icon').hasClass('nonSelectNonBurnable-icon');
  if (result) {
    // 選択
    $('#nonburnable-icon').removeClass('nonSelectNonBurnable-icon');
    $('#nonburnable-icon').addClass('selectNonBurnable-icon');
    $('#nonSelectNonBurnableIcon').removeClass('nonSelectNonBurnableIcon');
    $('#nonSelectNonBurnableIcon').addClass('selectNonBurnableIcon');
    $('#nonBurnable-iconBorder').css({
      'background-color': 'white',
      border: '#0272B6 1px solid'
    });
  } else {
    //　非選択
    $('#nonburnable-icon').removeClass('selectNonBurnable-icon');
    $('#nonburnable-icon').addClass('nonSelectNonBurnable-icon');
    $('#nonSelectNonBurnableIcon').removeClass('selectNonBurnableIcon');
    $('#nonSelectNonBurnableIcon').addClass('nonSelectNonBurnableIcon');
    $('#nonBurnable-iconBorder').css({
      'background-color': '#c5cdd1',
      border: '#c5cdd1 1px solid'
    });
  }
});

// 記入or選択しないとエラーを表示(required)
$('form').validate({
  rules: {
    uploadImage: {
      required: true
    },
    placeName: {
      required: true
    },
    trashBoxType: {
      required: true,
      minlength: 1
    }
  },
  messages: {
    uploadImage: {
      required: '*写真を選択してください'
    },
    placeName: {
      required: '*場所名を記入してください'
    },
    trashBoxType: {
      required: '*ゴミ箱の種類を選択してください'
    }
  },
  errorPlacement: function(error, element) {
    if (element.attr('name') == 'uploadImage') {
      error.appendTo($('#uploadImageError'));
    }
    if (element.attr('name') == 'placeName') {
      error.appendTo($('#placeNameError'));
    }
    if (element.attr('name') == 'trashBoxType') {
      error.appendTo($('#trashBoxTypeError'));
    }
  }
});
