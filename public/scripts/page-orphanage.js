const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Crianção do mapa usando LeafletJS
const map = L.map('mapid', options).setView([lat, lng], 15);

// Criação do tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criando ícone
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

// Criando o marcador

L.marker([lat,lng], {icon}).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // Remover todas as classes .active
  const buttons = document.querySelectorAll(".images button"); /* Seletor CSS */
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // Selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //Atualizar o container de image
  imageContainer.src = image.src;

  // Adicionar a classe .active para este botão
  button.classList.add("active");
}