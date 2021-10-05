//! https://www.tvmaze.com/shows sonra en alttaki api den data örneği
var showListe = []; //boş bir array aç
//! alttaki adresten getirmeyi gör
//https://ichi.pro/tr/javascript-te-getirme-nasil-kullanilir-205245557894655
//fetch ile listeye ulaş veri iste
fetch("./tv-shows.json")
  .then((cevap) => cevap.json()) //bize dosyadan cevap geliyor, bu dosyadaki json a çeviriyoruz
  .then((data) => {
    showListe = data; //bilgileri array e at
    setTvShows(showListe); //fonk çağır array  parametresiyle
  });

function setTvShows(showListe) {
  var liste = document.querySelector(".Liste"); //bütün satırlara ulaş

  liste.innerHTML = ""; //listeyi temizle
  showListe.forEach((w) => {
    //array in içinde gezin herbir w
    //listeye istenen bilgilerini ekle

    //!https://getbootstrap.com/docs/4.0/components/card/
    //md-3=> 12/3= 4 kart sığsın bir satıra
    liste.innerHTML += `
    <div class="col-md-3  "> 
 
 <div class="card"  >
   <img  src=${w.show.image ? w.show.image.medium : ""} >
   <div class="card-body">
     <h5 >${w.show.name}</h5>
     
     
     <a class= "btn btn-success"  href=${w.url} target="_blank">Detaylar</a>
     
   </div>
 </div></div> `;
  });
}
document.querySelector(".search").oninput = (e) => {
  //arama yerine  bir veri (e) girildiğinde onun değerini al

  var secim = showListe.filter((w) => {
    //array de gezin, girilen harfi kapsayan kartlarla, setTvShowsfonk git
    return w.show.name.toLowerCase().includes(e.target.value.toLowerCase()); //target nesnelerde şart
  });
  setTvShows(secim);
};
