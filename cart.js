function handleRemoveFromCart()
{
    localStorage.removeItem();
}

var cartProdParent = document.getElementById("cartContainer");

if (localStorage.length != 0)
{
    for (var i = 1; i <= localStorage.length; i++)
    {
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

        var cartVal = localStorage.getItem(i);
        var cartValArray = cartVal.split(", ");

        cartProdImage.src = cartValArray[2];
        cartProdImage.alt = "This is an image of a " + cartValArray[0];
        cartProdRemove.innerHTML = "Remove";
        cartProdName.innerHTML = cartValArray[0];
        cartProdNum.innerHTML = i;
        cartProdPrice.innerHTML = cartValArray[1];

        cartProdChild.appendChild(cartProdNum);
        cartProdChild.appendChild(cartProdImage);
        cartProdChild.appendChild(cartProdName);
        cartProdChild.appendChild(cartProdPrice);
        cartProdChild.appendChild(cartProdRemove);

        cartProdParent.appendChild(cartProdChild);
    }
}

else
{
    var emptyCart = document.getElementById("cartNone");
    emptyCart.classList.toggle("hide");
}