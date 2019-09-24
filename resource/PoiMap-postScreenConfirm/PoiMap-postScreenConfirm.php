<?php
//ページを戻った時ののuploadImageをやる
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      //uploadImage
      $newFilename = date("YmdHis")."-".$_FILES['uploadImage']['name'];
      $upload = '../../tempImages/'.$newFilename;
      move_uploaded_file($_FILES['uploadImage']['tmp_name'], $upload);
      //placeName
      $placeName = $_POST['placeName'];
      //trashBoxType
      $trashBoxType = $_POST['trashBoxType'];
      //reviews
      if (isset($_POST['reviews'])) {
          $reviews = $_POST['reviews'];
      }
  }
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>投稿確認画面</title>
  <link href="../reset-stylesheet.css" rel="stylesheet" />
  <link rel="stylesheet" href="PoiMap-postScreenConfirm.css" />
  <script>
    const arrayThisId = [];
    <?php foreach ($trashBoxType as $value): ?>
    arrayThisId.push("<?php echo $value ?>");
    <?php endforeach; ?>
  </script>
</head>

<body>
  <form action="#" method="post">
    <table>
      <tr>
        <th colspan="2">投稿確認画面</th>
      </tr>
      <tr>
        <th>場所の名前</th>
        <td>
          <input type="hidden" name="placeName"
            value="<?php echo $placeName; ?>" />
          <p><?php echo $placeName; ?>
          </p>
        </td>
      </tr>
      <tr>
        <th>ゴミ箱の写真</th>
        <td>
          <img id="preview" src="<?php echo $upload?>" />
        </td>
      </tr>
      <tr>
        <th>ゴミ箱の種類</th>
        <td>
          <?php foreach ($trashBoxType as $value): ?>
          <input type="hidden" name="trashBoxType[]"
            value="<?php echo $value; ?>" />
          <?php endforeach; ?>
          <!--petBottle-->
          <div class="container">
            <div id="petBottle-icon" class="category nonSelectPetBottle-icon"></div>
            <div id="petBottle-iconBorder"></div>
            <p class="trashBoxTypeText" id="petBottle-text">ペットボトル</p>
          </div>
          <!--nonburnable-->
          <div class="container">
            <div id="nonburnable-icon" class="category nonSelectNonBurnable-icon"></div>
            <div id="nonburnable-iconBorder">
              <div id="nonSelectNonBurnableIcon" class="nonSelectNonBurnableIcon"></div>
            </div>
            <p class="trashBoxTypeText" id="nonburnable-text">燃えないゴミ</p>
          </div>
          <!--burnable-->
          <div class="container">
            <div id="burnable-icon" class="category nonSelectBurnable-icon"></div>
            <div id="burnable-iconBorder"></div>
            <p class="trashBoxTypeText" id="burnable-text">燃えるゴミ</p>
          </div>
          <!--aluminumGlass-->
          <div class="container">
            <div id="aluminumGlass-icon" class="category nonSelectAluminumGlass-icon"></div>
            <div id="aluminumGlass-iconBorder"></div>
            <p class="trashBoxTypeText" id="aluminumGlass-text">缶・ビン</p>
          </div>
        </td>
      </tr>
      <tr>
        <th>レビュー</th>
        <td>
          <input type="hidden" name="reviews"
            value="<?php echo $reviews; ?>" />
          <p><?php echo $reviews; ?>
          </p>
        </td>
      </tr>
    </table>

    <p id="messages">この内容で投稿しますか？</p>
    <div id="buttonContainer">
      <button type="submit" class="button" id="submitButton">投稿する</button>
      <button type="button" class="button" id="backButton" onclick=history.back()>戻る</button>
    </div>
  </form>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="PoiMap-postScreenConfirm.js"></script>
</body>

</html>