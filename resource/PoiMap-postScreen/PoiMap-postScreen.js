/*----------
  写真選択
----------*/
// 写真選択時にプレビューを表示
document.getElementById('uploadImage').onchange = function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    $('#preview').css(
      'background',
      `url(${reader.result}) no-repeat center / cover`
    );
    if (sessionStorage.getItem('upImage') === null) {
      sessionStorage.setItem('upImage', reader.result);
    } else {
      sessionStorage.removeItem('upImage');
      sessionStorage.setItem('upImage', reader.result);
    }
    //エラーが表示されていたら消す
    if ($('#uploadImageError').text() == '*写真を選択してください') {
      $('#uploadImageError').text('');
    }
  };
  reader.readAsDataURL(this.files[0]);
};

/*-----------------
  ゴミ箱の種類選択
-----------------*/
//ゴミ箱の種類タッチしたらsvgの色を変更
$('.category').on('click', function() {
  const thisId = this.id;
  makeCapitalLetter(thisId);
});

const makeCapitalLetter = thisId => {
  if (thisId == 'petBottle') {
    const capitalLetter = 'PetBottle';
    changeSVG(thisId, capitalLetter);
  } else if (thisId == 'burnable') {
    const capitalLetter = 'Burnable';
    changeSVG(thisId, capitalLetter);
  } else if (thisId == 'nonburnable') {
    const capitalLetter = 'NonBurnable';
    changeSVG(thisId, capitalLetter);
  } else if (thisId == 'aluminumGlass') {
    const capitalLetter = 'AluminumGlass';
    changeSVG(thisId, capitalLetter);
  }
};

const changeSVG = (thisId, capitalLetter) => {
  const hasNonSelectClass = $(`#${thisId}-icon`).hasClass(
    `nonSelect${capitalLetter}-icon`
  );
  if (hasNonSelectClass) {
    $(`#${thisId}-icon`).removeClass(`nonSelect${capitalLetter}-icon`);
    $(`#${thisId}-icon`).addClass(`select${capitalLetter}-icon`);
    if (thisId == 'nonburnable') {
      $(`#nonSelect${capitalLetter}Icon`).removeClass(
        `nonSelect${capitalLetter}Icon`
      );
      $(`#nonSelect${capitalLetter}Icon`).addClass(
        `select${capitalLetter}Icon`
      );
      $(`#${thisId}-iconBorder`).css({
        'background-color': 'white',
        border: '#0272B6 1px solid'
      });
    } else {
      $(`#${thisId}-iconBorder`).css('border', '#0272B6 1px solid');
    }
  } else {
    $(`#${thisId}-icon`).removeClass(`select${capitalLetter}-icon`);
    $(`#${thisId}-icon`).addClass(`nonSelect${capitalLetter}-icon`);

    if (thisId == 'nonburnable') {
      $(`#nonSelect${capitalLetter}Icon`).removeClass(
        `select${capitalLetter}Icon`
      );
      $(`#nonSelect${capitalLetter}Icon`).addClass(
        `nonSelect${capitalLetter}Icon`
      );
      $(`#${thisId}-iconBorder`).css({
        'background-color': '#c5cdd1',
        border: '#c5cdd1 1px solid'
      });
    } else {
      $(`#${thisId}-iconBorder`).css('border', '#c5cdd1 1px solid');
    }
  }
};

/*----------------
  戻ったときの処理
-----------------*/
onload = function() {
  //戻ったときにチェックされているもののSVGの色を変える
  $('input:checked').each(function() {
    const selectValue = $(this).val();
    if (selectValue == 'petBottle') {
      const capitalLetter = 'PetBottle';
      changeSVG(selectValue, capitalLetter);
    } else if (selectValue == 'burnable') {
      const capitalLetter = 'Burnable';
      changeSVG(selectValue, capitalLetter);
    } else if (selectValue == 'nonburnable') {
      const capitalLetter = 'NonBurnable';
      changeSVG(selectValue, capitalLetter);
    } else if (selectValue == 'aluminumGlass') {
      const capitalLetter = 'AluminumGlass';
      changeSVG(selectValue, capitalLetter);
    }
  });
  //戻ったときに写真を表示
  if (!(sessionStorage.getItem('upImage') === null)) {
    const returnImage = sessionStorage.getItem('upImage');
    $('#preview').css(
      'background',
      `url(${returnImage}) no-repeat center / cover`
    );
  }
};

/*-------------
  入力チェック
-------------*/
// 記入or選択しないとエラーを表示(required)
$('form').validate({
  rules: {
    uploadImage: {
      required: true
    },
    placeName: {
      required: true
    },
    'trashBoxType[]': {
      required: true
    }
  },
  messages: {
    uploadImage: {
      required: '*写真を選択してください'
    },
    placeName: {
      required: '*場所名を記入してください'
    },
    'trashBoxType[]': {
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
    if (element.attr('name') == 'trashBoxType[]') {
      error.appendTo($('#trashBoxTypeError'));
    }
  }
});

/*------------------------
  リセット押したときの処理
------------------------*/
$('#resetForm').click(function() {
  //写真を消す
  if (sessionStorage.getItem('upImage') === null) {
    console.log('null');
  } else {
    sessionStorage.removeItem('upImage');
    $('#preview').css('background', '');
  }
  const iconType = ['petBottle', 'burnable', 'nonburnable', 'aluminumGlass'];
  for (i = 0; i < iconType.length; i++) {
    const thisId = iconType[i];
    console.log(thisId);
    if (thisId == 'petBottle') {
      const capitalLetter = 'PetBottle';
      resetSvg(thisId, capitalLetter);
    } else if (thisId == 'burnable') {
      const capitalLetter = 'Burnable';
      resetSvg(thisId, capitalLetter);
    } else if (thisId == 'nonburnable') {
      const capitalLetter = 'NonBurnable';
      resetSvg(thisId, capitalLetter);
    } else if (thisId == 'aluminumGlass') {
      const capitalLetter = 'AluminumGlass';
      resetSvg(thisId, capitalLetter);
    }
  }
});

const resetSvg = (thisId, capitalLetter) => {
  const hasNonSelectClass = $(`#${thisId}-icon`).hasClass(
    `nonSelect${capitalLetter}-icon`
  );
  if (hasNonSelectClass) {
    //nonSelectの時
  } else {
    //selectの時
    $(`#${thisId}-icon`).removeClass(`select${capitalLetter}-icon`);
    $(`#${thisId}-icon`).addClass(`nonSelect${capitalLetter}-icon`);

    if (thisId == 'nonburnable') {
      $(`#nonSelect${capitalLetter}Icon`).removeClass(
        `select${capitalLetter}Icon`
      );
      $(`#nonSelect${capitalLetter}Icon`).addClass(
        `nonSelect${capitalLetter}Icon`
      );
      $(`#${thisId}-iconBorder`).css({
        'background-color': '#c5cdd1',
        border: '#c5cdd1 1px solid'
      });
    } else {
      $(`#${thisId}-iconBorder`).css('border', '#c5cdd1 1px solid');
    }
  }
};
