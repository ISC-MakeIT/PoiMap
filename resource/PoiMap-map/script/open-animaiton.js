// ↓filter-content open config------------

const filterChange = document.getElementById('filter-icon');
const filterArea = document.getElementById('filter-content');

filterChange.addEventListener('click', () => {
  filterArea.classList.toggle('open');
  filterChange.style.display = 'hidden';
});

document.getElementById('filter-close').addEventListener('click', () => {
  filterArea.classList.toggle('open');
  setTimeout(() => {
    filterChange.style.display = 'block';
  }, 500);
});
