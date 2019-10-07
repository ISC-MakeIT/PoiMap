onload = function() {
  arrayThisId.forEach(thisId => {
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
  });
};

const changeSVG = (thisId, capitalLetter) => {
  const hasNonSelectClass = $(`#${thisId}-icon`).hasClass(
    `nonSelect${capitalLetter}-icon`
  );
  if (hasNonSelectClass) {
    $(`#${thisId}-icon`).removeClass(`nonSelect${capitalLetter}-icon`);
    $(`#${thisId}-icon`).addClass(`select${capitalLetter}-icon`);
    $(`#${thisId}-text`).css('color', '#0272B6');
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
    $(`#${thisId}-text`).css('color', '#0272B6');
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
