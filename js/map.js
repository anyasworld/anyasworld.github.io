// Initialize the map using MapTiler SDK
var map = L.map('map').setView([54.5260, 15.2551], 4);

const mtLayer = L.maptiler.maptilerLayer({
    style: "https://raw.githubusercontent.com/vantral/files/refs/heads/main/map.json"
  }).addTo(map);


var bookIcon = L.icon({
    iconUrl: 'book.png',

    iconSize: [40, 40],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47]
});

var krasnogorskIcon = L.icon({
    iconUrl: 'book.png',
    iconSize: [40, 40],
    iconAnchor: [40, 63],
    popupAnchor: [-20, -63]
});

var moscowIcon = L.icon({
    iconUrl: 'book.png',
    iconSize: [40, 40],
    iconAnchor: [20, -5],
    popupAnchor: [0, 5]
});


var youarehereIcon = L.icon({
  iconUrl: 'here.png',
  iconSize: [80, 80],
  iconAnchor: [40, 80],
})


// Define cities
// Define cities
var cities = [
    { 
      name: "<i>Watermark</i>, Joseph Brodsky", 
      coords: [45.4408, 12.3155],
      description: "'Если существует перевоплощение, я хотел бы свою следующую жизнь прожить в Венеции – быть там кошкой, чем угодно, даже крысой, но обязательно в Венеции'. К моменту написания этого эссе Бродский побывал в Венеции уже 17 раз. Текст был заказан у него организацией, ежегодно выпускавшей произведения искусства, воспевающие Венецию. Это эссе — не путеводитель и не рассказ о достопримечательностях, а размышление, воспоминание, попытка в словах описать ускользающую суть города, окружённого водой.",
      img: "https://github.com/vantral/files/raw/refs/heads/main/IMG_4849.PNG"
    },
    { 
      name: "<i>Goodbye to Berlin</i>, Christopher Isherwood", 
      coords: [52.5200, 13.4050],
      description: "С начала 1930-х годов британский писатель Кристофер Ишервуд жил в Берлине. Он уезжал за свободами (в том числе сексуальными) Веймарской республики, но стал свидетелем прихода к власти Гитлера и начала периода национал-социализма. В своих дневниках он запечатлел откровенный портрет Берлина и немецкого общества начала 30-х. Своего рода мигрантская проза, которая, к сожалению, снова актуальна, и литературная основа легендарного мюзикла «Кабаре».",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Isherwdgoigfj.jpg"
    },
    { 
      name: "<i>Wall and Piece</i>, Banksy", 
      coords: [51.4545, -2.5879],
      description: "Считается, что в Бристоле родился знаменитый уличный художник Бэнкси. Эта книга – собрание его работ с цитатами и автобиографическими комментариями. Добро пожаловать в мир сатирического искусства!",
      img: "https://m.media-amazon.com/images/I/71MkGXZ1fwL._AC_UF894,1000_QL80_.jpg"
    },
    { 
      name: "<i>Kallocain</i>, Karin Boye", 
      coords: [57.7089, 11.9746],
      description: "Одна из самых важных книг шведской литературы, написанная писательницей и поэтом из Гетеборга. Страшная антиутопия о пропаганде, тоталитаризме, роли ученого в таком обществе и границах между прогрессом в науке и моралью",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Karin_Boye_-_Kallocain.jpg"
    },
    { 
      name: "<i>Нет никакой Москвы</i>, Алла Горбунова", 
      coords: [55.7558, 37.6173],
      description: "Эта книга не совсем про Москву, как подсказывает её название. Но всё-таки где-то глубоко внутри этой книги Москва спрятана. Её можно не заметить, но это не очень-то и нужно. Эта книга про что-то другое, про очень разное. Мой любимый рассказ из этой книги &mdash; Тупик. Он про университет. Ещё очень советую уснуть в середине чтения последнего рассказа.",
      img: "https://individuum.ru/upload/iblock/e35/s59w1rhagduxep9f1q1a3ycytqvviuq7.png"
    },
    { 
      name: "<i>Зависимость и ее человек</i>, Марат Агинян", 
      coords: [55.8205, 37.3302],
      description: "Под Красногорском на рубеже XIX и XX веков существовало большое православное общество трезвости. А эта книга хорошим языком рассказывает о том, что вообще за явление 'зависимость' и как устроена борьба с ним. (Никаких намёков, это просто очень интересно!)",
      img: "https://alpinabook.ru/upload/resize_cache/converted/90/iblock/000/vchiqy7lpli25aluqjm2po3t54x783at/1410_1410_1/zavisimost-i-ee-chelovek_cover.jpg.webp"
    },
    { 
      name: "<i>The Heart of Midlothian</i>, Sir Walter Scott", 
      coords: [55.9533, -3.1883],
      description: "Один из величайших романов наверное самого известного шотландского писателя Вальтера Скотта о силе любви и справедливости. Действие романа разворачивается в Эдинбурге XVIII века, раскрывая драму справедливости, преданности и силы человеческого духа. Женская отвага против жестоких законов и людских предрассудков. Что может быть интереснее?? P.S. Вообще the Heart of Midlothian это реальное место в Эдинбурге — буквально сердце выложенное в центре города. Парадоксально, или ирочнично, но на сердце принято плевать — считается, что это принесет плевавшему удачу. Поэтому приезжай в Эдинбург за удачей!!!!",
      img: "https://m.media-amazon.com/images/I/71R27BsnOyL._AC_UF894,1000_QL80_.jpg"
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

marker = L.marker([42.6977, 23.3219], {icon: youarehereIcon}).addTo(map)