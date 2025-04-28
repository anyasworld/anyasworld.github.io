// Initialize the map using MapTiler SDK
var map = L.map('map').setView([54.5260, 15.2551], 4);

const mtLayer = L.maptiler.maptilerLayer({
    apiKey: "TOKEN",
    style: "https://api.maptiler.com/maps/01967d6a-3358-7302-b80a-40945d1cb65b/style.json"
  }).addTo(map);


var bookIcon = L.icon({
    iconUrl: 'book.png',

    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

var krasnogorskIcon = L.icon({
    iconUrl: 'book.png',
    iconSize: [40, 40],
    iconAnchor: [40, 60]
});

var moscowIcon = L.icon({
    iconUrl: 'book.png',
    iconSize: [40, 40],
    iconAnchor: [20, 0]
});


// Define cities
var cities = [
    { 
    name: "<i>Watermark</i>, Joseph Brodsky", 
    coords: [45.4408, 12.3155],
    description: "Famous for its canals and stunning architecture.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Venice_Canal.jpg"
    },
    { 
    name: "<i>Goodbye to Berlin</i>, Christopher Isherwood", 
    coords: [52.5200, 13.4050],
    description: "Germany's capital, rich in history and culture.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Berlin_Brandenburg_Gate.jpg"
    },
    { 
    name: "<i>Wall and Piece</i>, Banksy", 
    coords: [51.4545, -2.5879],
    description: "Known for maritime history and street art.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Clifton_Suspension_Bridge_2.jpg"
    },
    { 
    name: "<i>Kallocain</i>, Karin Boye", 
    coords: [57.7089, 11.9746],
    description: "Одна из самых важных книг шведской литературы, написанная писательницей и поэтом из Гетеборга. Страшная антиутопия о пропаганде, тоталитаризме, роли науки в таком обществе и границах между прогрессом в науке и моралью",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Karin_Boye_-_Kallocain.jpg"
    },
    { 
    name: "<i>Нет никакой Москвы</i>, Алла Горбунова", 
    coords: [55.7558, 37.6173],
    description: "Russia's bustling capital, famous for the Kremlin and Red Square.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow_Red_Square.jpg"
    },
    { 
    name: "<i>Зависимость и ее человек</i>, Марат Агинян", 
    coords: [55.8205, 37.3302],
    description: "Под Красногорском на рубеже XIX и XX веков существовало большое православное общество трезвости. А эта книга хорошим языком рассказывает о том, что вообще за явление 'зависимость' и как устроена борьба с ним. (Никаких намёков, это просто очень интересно!)",
    img: "https://alpinabook.ru/upload/resize_cache/converted/90/iblock/000/vchiqy7lpli25aluqjm2po3t54x783at/1410_1410_1/zavisimost-i-ee-chelovek_cover.jpg.webp"
    },
    { 
    name: "<i>The Heart of Midlothian</i>, Walter Scott", 
    coords: [55.9533, -3.1883],
    description: "Scotland's historic and cultural capital.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Edinburgh_Castle_from_the_Gardens.jpg"
    }
];

// Add markers with custom popups
cities.forEach(function(city) {
    if (city.name == "<i>Зависимость и ее человек</i>, Марат Агинян") {
        var marker = L.marker(city.coords, {icon: krasnogorskIcon}).addTo(map);
    } else if (city.name == "<i>Нет никакой Москвы</i>, Алла Горбунова") {
        var marker = L.marker(city.coords, {icon: moscowIcon}).addTo(map);
    }
    else {
        var marker = L.marker(city.coords, {icon: bookIcon}).addTo(map);
    }   
     
    var popupContent = `
    <div class="popup-content">
        <img src="${city.img}" alt="${city.name}">
        <div class="popup-text">
        <h2>${city.name}</h2>
        <p>${city.description}</p>
        </div>
    </div>
    `;
    
    marker.bindPopup(popupContent);

    
});