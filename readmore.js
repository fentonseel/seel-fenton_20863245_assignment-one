var readProdParent = document.getElementById("readMoreContainer");

var readProdChild = document.createElement("div");
var readProdImage = document.createElement("img");
var readProdName = document.createElement("p");
var readProdInfo = document.createElement("p");
var readProdPrice = document.createElement("p");
var readProdBuy = document.createElement("button");
readProdBuy.setAttribute("onclick", "handleAddTocart(this)");

readProdImage.classList.add("rm-prod-img");
readProdName.classList.add("rm-prod-title");
readProdInfo.classList.add("rm-prod-info");
readProdPrice.classList.add("rm-prod-price");
readProdBuy.classList.add("buy");

var readMoreVal = sessionStorage.getItem("1");
var readMoreValArray = readMoreVal.split(", ");

readProdImage.src = readMoreValArray[3];
readProdImage.alt = "This is an image of a " + readMoreValArray[0];
readProdBuy.innerHTML = "Buy";
readProdName.innerHTML = readMoreValArray[0];
readProdInfo.innerHTML = readMoreValArray[1];
readProdPrice.innerHTML = readMoreValArray[2];

readProdChild.appendChild(readProdImage);
readProdChild.appendChild(readProdName);
readProdChild.appendChild(readProdInfo);
readProdChild.appendChild(readProdPrice);
readProdChild.appendChild(readProdBuy);

readProdParent.appendChild(readProdChild);
