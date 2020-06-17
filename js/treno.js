// creo delle variabili per i button
var creaBtn = document.getElementById('creaBiglietto');
var annullaBtn = document.getElementById('annulla');


// creo un evento al click del button con id: "creaBiglietto" che mi consente di salvarmi i dati dell'utente dal form
creaBtn.addEventListener("click", function () {
  var prezzoBiglietto;
  var prezzoKm = 0.21;
  var nome = document.getElementById('nome').value;
  var chilometri = document.getElementById('km').value;
  var categoria = document.getElementById('categoria').value;
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minTreno = 50;
  var maxTreno = 100;

  if (categoria == "Minorenne") {
    prezzoBiglietto = (prezzoKm * chilometri) - 20/100 * (prezzoKm * chilometri);
  } else if (categoria == "Over65") {
    prezzoBiglietto = (prezzoKm * chilometri) - 40/100 * (prezzoKm * chilometri);
  } else {
    prezzoBiglietto = prezzoKm * chilometri;
  }

  var numeroTreno = Math.floor(Math.random() * (maxTreno - minTreno + 1)) + minTreno;
  var carrozza = Math.floor(Math.random() * (maxCarrozza - minCarrozza + 1)) + minCarrozza;

  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('numeroTreno').innerHTML = numeroTreno;
  document.getElementById('carrozza').innerHTML = carrozza;
  document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);
  document.getElementById('categoriaPasseggero').innerHTML = categoria;

// sostituisco la classe di default "hidden" della table con una che mi permette di farla apparire al click del button
  document.getElementById('biglietto').className = "show";


  console.log(prezzoBiglietto);
});

// crea un altro evento al click del button "annulla"
annullaBtn.addEventListener("click", function () {
  document.getElementById('biglietto').className = "hidden";

  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('categoria').value = "Maggiorenne";
})
