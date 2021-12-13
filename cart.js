function handleRemoveFromCart()
{
    localStorage.removeItem();
}

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

cartProdImage.src = "store-items/" + hoodieTitle;
cartProdImage.alt = "This is an image of a " + hoodieName;
cartProdRemove.innerHTML = "Remove";
cartProdName.innerHTML = hoodieName;
cartProdNum.innerHTML = hoodieInfo;
cartProdPrice.innerHTML = hoodiePrice;