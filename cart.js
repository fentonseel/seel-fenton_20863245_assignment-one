function handleRemoveFromCart(cartProd)
{
    var itemId = cartProd.parentElement.getElementsByTagName("p")[0].innerHTML;
    localStorage.removeItem(itemId);
    location.reload();
}

var cartProdParent = document.getElementById("cartContainer");

if (localStorage.length != 0)
{
    //This for loop goes through the contents of the local storage, adding each element of the products to the page
    for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
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

        var cartVal = localStorage.getItem(localStorage.key(i));
        var cartValArray = cartVal.split(", ");

        cartProdImage.src = cartValArray[2];
        cartProdImage.alt = "This is an image of a " + cartValArray[0];
        cartProdRemove.innerHTML = "Remove";
        cartProdName.innerHTML = cartValArray[0];
        cartProdNum.innerHTML = localStorage.key(i);
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