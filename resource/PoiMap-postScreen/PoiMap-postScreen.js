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
// ゴミ箱の種類タッチしたらsvgの色を変更
$('.category').on('click', function() {
  const thisId = this.id;
  if (this.id == 'petBottle') {
    const capitalLetter = 'PetBottle';
    changeSVG(thisId, capitalLetter);
  } else if (this.id == 'burnable') {
    const capitalLetter = 'Burnable';
    changeSVG(thisId, capitalLetter);
  } else if (this.id == 'nonburnable') {
    const capitalLetter = 'NonBurnable';
    changeSVG(thisId, capitalLetter);
  } else if (this.id == 'aluminumGlass') {
    const capitalLetter = 'AluminumGlass';
    changeSVG(thisId, capitalLetter);
  }
});

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

/* 戻ったときにチェックされているもののSVGの色を変える */
onload = function() {
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
