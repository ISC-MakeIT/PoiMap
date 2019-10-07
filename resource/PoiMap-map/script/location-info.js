//↓詳細ページのアイコンの色

// const onMarke = [
//   {
//     id: "1",
//     types: "1000",
//     lat: 35.465786,
//     lng: 139.622313,
//     name: '横浜駅'
//   },
//   {
//     id: "2",
//     types: "1010",
//     lat: 35.471027,
//     lng: 139.627114,
//     name: '神奈川駅'
//   },
//   {
//     id: "3",
//     types: "1100",
//     lat: 35.459559,
//     lng: 139.616207,
//     name: '平沼橋駅'
//   },
//   {
//     id: "4",
//     types: "0010",
//     lat: 35.453406,
//     lng: 139.608495,
//     name: '西横浜駅'
//   },
//   {
//     id: "5",
//     types: "0011",
//     lat: 35.45665,
//     lng: 139.619537,
//     name: '戸部駅'
//   }
// ];

// const genre = ["burnable-icon", "nonBurnable-icon", "petBottle-icon", "aluminumGlass-icon"];
// let check = null;

// for (let j = 0; j < onMarke.length; j++ ){

//   for (let i = 0; i <= 3; i++) {

//     let val = onMarke[j].types;

//     check = val.slice(0, 1);

//     val = val.slice(1, 4 - i);

//     if (check == "0") {
//       const icon = document.getElementsByClassName(genre[i])[1];
//       icon.classList.add('off');

//       const border = document.getElementsByClassName('category-border')[i + 5];
//       border.classList.add('off');

//     }
//   }
// }
