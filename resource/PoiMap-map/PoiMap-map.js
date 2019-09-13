// googlemapAPI config-----------------

/*let MyLatLng = new google.maps.LatLng(35.465843, 139.622669);
const Options = {
  zoom: 15,
  center: MyLatLng,
  mapTypeId: "roadmap",
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  zoomControlOptions: {
    position: google.maps.ControlPosition.LEFT_BOTTOM
  }
};
const map = new google.maps.Map(document.getElementById("map"), Options);

document.getElementById("return").addEventListener("click", () => {
  window.location.href = "../PoiMap-home/PoiMap-home.html";
});*/

// filter-content open config------------

const filterChange = document.getElementById("filter");
const filterArea = document.getElementById("filter-content");

filterChange.addEventListener("click", () => {
  filterArea.classList.toggle('open');
  filterChange.style.display = 'none';
});

document.getElementById('filter-close').addEventListener('click', () => {
  filterArea.classList.toggle('open');
  setTimeout(() => {
    filterChange.style.display = 'block';
  }, 500);
})

// informaion open config -------------

const garbageOpen = document.getElementById('informaion');

document.getElementById('temporary-button').addEventListener('click', () => {
  garbageOpen.classList.toggle('open');
})
