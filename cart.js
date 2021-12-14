function handleRemoveFromCart()
{
    localStorage.removeItem();
}

var cartProdParent = document.getElementById("cartContainer");

var cartProdChild = document.createElement("div");
var cartProdName = document.createElement("p");
var cartProdImage = document.createElement("img");
var cartProdNum = document.createElement("p");
var cartProdPrice = document.createElement("p");
var cartProdRemove = document.createElement("button");
cartProdRemove.setAttribute("onclick", "handleRemoveFromCart(this)");

cartProdChild.classList.add("item-card");
cartProdName.classList.add("cart-prod");
cartProdImage.classList.add("cart-prod-img");
cartProdNum.classList.add("item-num");
cartProdPrice.classList.add("cart-price");
cartProdRemove.classList.add("remove");

cartProdImage.src = window.localStorage.getItem(itemImage);
cartProdImage.alt = "This is an image of a " + window.localStorage.getItem(itemTitle);
cartProdRemove.innerHTML = "Remove";
cartProdName.innerHTML = window.localStorage.getItem(itemTitle);
cartProdNum.innerHTML = window.localStorage.getItem(storageLength);
cartProdPrice.innerHTML = window.localStorage.getItem(itemPrice);

cartProdChild.appendChild(cartProdImage);
cartProdChild.appendChild(cartProdName);
cartProdChild.appendChild(cartProdNum);
cartProdChild.appendChild(cartProdPrice);
cartProdChild.appendChild(cartProdRemove);

cartProdParent.appendChild(cartProdChild);