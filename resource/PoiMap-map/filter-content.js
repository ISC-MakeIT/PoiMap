const categoryName = [
  { icon: 'burnable-icon', name: '燃えるゴミ' },
  { icon: 'nonBurnable-icon', name: '燃えないゴミ' },
  { icon: 'petBottle-icon', name: 'ペットボトル' },
  { icon: 'aluminumGlass-icon', name: '缶・瓶' },
  { icon: 'cross-icon', name: ''},
];

//↓フィルターアイコン

const filterContent = document.getElementById('filter-content');


for (let i = 0; i < categoryName.length; i++) {
  const category = document.createElement('div');
  category.className = 'category';

  const nameText = document.createElement('p');
  nameText.innerHTML = categoryName[i].name;
  nameText.className = 'category-text';

  const categoryBorder = document.createElement('div');
  categoryBorder.className = 'category-border';

  const categoryIcon = document.createElement('div');

  if (i === 4) {
    categoryIcon.id = 'cross-icon';
    category.id = 'filter-close';
  } else {
    categoryIcon.className = categoryName[i].icon;
  };

  filterContent.appendChild(category);
  category.appendChild(nameText);
  category.appendChild(categoryBorder);
  categoryBorder.appendChild(categoryIcon);
}

//↓詳細ページのフィルターアイコン

const garbageIcons = document.getElementById('garbage-icons');

for (let i = 0; i <= 3; i++){
  const categoryBorder = document.createElement('div');
  categoryBorder.className = 'category-border';

  const categoryIcon = document.createElement('div');
  categoryIcon.className = categoryName[i].icon;

  garbageIcons.appendChild(categoryBorder);
  categoryBorder.appendChild(categoryIcon);
}
