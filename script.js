let usd = document.getElementById("usd");
let eur = document.getElementById("eur");
let gbp = document.getElementById("gbp");
let inr = document.getElementById("inr");
let basic = document.getElementById("basic");
let inter = document.getElementById("inter");
let ulti = document.getElementById("ulti");
let select = document.getElementById("currency");

select.addEventListener("click", function () {
  if (eur.selected === true) {
    basic.textContent = "€4.25";
    inter.textContent = "€17";
    ulti.textContent = "€68";
  } else if (gbp.selected === true) {
    basic.textContent = "£3.75";
    inter.textContent = "£15";
    ulti.textContent = "£60";
  } else if (inr.selected === true) {
    basic.textContent = "₹422.5";
    inter.textContent = "₹1690";
    ulti.textContent = "₹6760";
  } else if (usd.selected === true) {
    basic.textContent = "$5";
    inter.textContent = "$20";
    ulti.textContent = "$80";
  }
});
