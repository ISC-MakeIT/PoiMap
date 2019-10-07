// ↓filter-content open config------------

const filterChange = document.getElementById('filter-icon');
const filterArea = document.getElementById('filter-content');

filterChange.addEventListener('click', () => {
  filterArea.classList.toggle('open');
  filterChange.style.display = 'none';
});

document.getElementById('filter-close').addEventListener('click', () => {
  filterArea.classList.toggle('open');
  setTimeout(() => {
    filterChange.style.display = 'block';
  }, 500);
});

// ↓informaion open config -------------

const garbageOpen = document.getElementById('informaion');

document.getElementById('temporary-button').addEventListener('click', () => {
  garbageOpen.classList.toggle('open');
});

document.getElementById('garbage-close').addEventListener('click', () => {
  garbageOpen.classList.toggle('open');
});
