var cookies = 0;
var grannies = 0;

function cookieClick(number){
  cookies = cookies + number;
  document.getElementById("cookies").innerHTML = cookies;
  document.getElementById("cookiesper").innerHTML = grannies;
}


function buyGranny() {
var grannyCost = Math.floor(10 * Math.pow(1.1,grannies)); //works out cost of the item
if(cookies >= grannyCost) { //checks if player can afford upgrade
  grannies = grannies + 1; //increases value of grannies by 1
  cookies = cookies - grannyCost; //deducts cost of granny from cookies total
  document.getElementById("grannies").innerHTML = grannies;
  document.getElementById("cookies").innerHTML = cookies;
};
var nextCost = Math.floor(10 * Math.pow(1.5,grannies)); //formula for cost of next item
document.getElementById("grannyCost").innerHTML = nextCost; //updates cost displayed to player
};

window.setInterval(function(){ //add additional upgrades HERE!!!!
  cookieClick(grannies);
}, 1000); // 1 cookie per secon (1000 milliseconds)
