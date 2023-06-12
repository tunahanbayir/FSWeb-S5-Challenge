import axios from 'axios';
const Card = (makale) => {
  

  const cardDivEl = document.createElement("div");
  cardDivEl.classList.add("card");

  const headlineDivEl = document.createElement("div");
  headlineDivEl.classList.add("headline");
  headlineDivEl.textContent = makale.anabaslik;
  cardDivEl.appendChild(headlineDivEl);

  const yazarDivEl = document.createElement("div");
  yazarDivEl.classList.add("author");
  headlineDivEl.appendChild(yazarDivEl);

  const imgDivEl = document.createElement("div");
  imgDivEl.classList.add("img-container");
  yazarDivEl.appendChild(imgDivEl);

  const image = document.createElement("img");
  image.src = makale.yazarFoto;
  imgDivEl.appendChild(image);

  const yazarAdıSpan = document.createElement("span");
  yazarAdıSpan.textContent = makale.yazarAdi + "tarafından";
  yazarDivEl.appendChild(yazarAdıSpan);

  yazarDivEl.appendChild(yazarAdıSpan);
  cardDivEl.appendChild(yazarDivEl);

  cardDivEl.addEventListener("click", (event) => {
    console.log(makale.anabaslik);
  });

  return cardDivEl;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {

  axios
  .get('http://localhost:5001/api/makaleler')
  .then((response) => {
    const makaleler = response.data.makaleler;
    const container = document.querySelector(secici);
    for (let baslik in makaleler) {
      makaleler[baslik].forEach((makale) => {
        const card = Card(makale);
        container.appendChild(card);
    
    });
    }
  })
  .catch((error) => {
    console.log('Makaleler alınamadı:', error);
  });
};

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


export { Card, cardEkleyici }
