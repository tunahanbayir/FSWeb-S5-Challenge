const Header = (baslik, tarih, yazi) => {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const tarihSpan = document.createElement("span");
  tarihSpan.classList.add("date");
  tarihSpan.textContent = tarih;
  headerDiv.appendChild(tarihSpan);

  const baslikH1 = document.createElement("h1");
  baslikH1.textContent = baslik;
  headerDiv.appendChild(baslikH1);

  const yaziSpan = document.createElement("span");
  yaziSpan.classList.add("temp");
  yaziSpan.textContent = yazi;
  headerDiv.appendChild(yaziSpan);

  return headerDiv;
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {
  const baslikEkleyici = document.querySelector(secici);

  const baslik = "Teknoloji Zamanı";
  const tarih = "11 Kasım 2022";
  const yazi = "sağdaki yazı";

  const header = Header(baslik, tarih, yazi);
  baslikEkleyici.appendChild(header);
  }

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

export { Header, headerEkleyici }
