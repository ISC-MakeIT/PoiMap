//↓詳細ページのアイコンの色

let val = "0011";
const genre = ["burnable-icon", "nonBurnable-icon", "petBottle-icon", "aluminumGlass-icon"];
let check = null;
// console.log(val);
for (let i = 0; i <= 3; i++) {

  check = val.slice(0, 1);

  val = val.slice(1, 4 - i);

  if (check == "0") {
    const icon = document.getElementsByClassName(genre[i])[1];
    icon.classList.add('off');

    const border = document.getElementsByClassName('category-border')[i + 5];
    border.classList.add('off');

  }
}
