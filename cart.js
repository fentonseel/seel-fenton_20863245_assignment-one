//This function is activated when the user selects the remove button on a product
function handleRemoveFromCart(cartProd)
{
    //These lines of code find the ID of the item in the local storage and remove it
    //The page is then reloaded to show the updated state of the page
    var itemId = cartProd.parentElement.getElementsByTagName("p")[0].innerHTML;
    localStorage.removeItem(itemId);
    location.reload();
}

//This is referring back to the id given in cart.html and linking the two files together to be used accordingly
var cartProdParent = document.getElementById("cartContainer");

//This 'if' statement is activated when there are items stored in local storage
if (localStorage.length != 0)
{
    //This for loop goes through the contents of the local storage, adding each element of the products to the page
    for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
    {
        //The below variables are created because there is one div, image, and button and three p tags used per cart item  
        var cartProdChild = document.createElement("div");
        var cartProdName = document.createElement("p");
        var cartProdImage = document.createElement("img");
        var cartProdNum = document.createElement("p");
        var cartProdPrice = document.createElement("p");
        var cartProdRemove = document.createElement("button");
        cartProdRemove.setAttribute("onclick", "handleRemoveFromCart(this)"); //This is adding the 'Remove' button onto each cart item card

        //This is linking the class names from formats.css causing each cart item card to be formatted
        cartProdChild.classList.add("item-card");
        cartProdName.classList.add("cart-prod");
        cartProdImage.classList.add("cart-prod-img");
        cartProdNum.classList.add("item-num");
        cartProdPrice.classList.add("cart-price");
        cartProdRemove.classList.add("remove");

        //These variables below are retrieving the information from the local storage and storing it in an array
        var cartVal = localStorage.getItem(localStorage.key(i));
        var cartValArray = cartVal.split(", ");

        //This is adding the relevant information, that is stored in the previously declared array, that is required for each cart item card
        cartProdImage.src = cartValArray[2]; //This is adding the product image, which is stored in position 2 of the array
        cartProdImage.alt = "This is an image of a " + cartValArray[0]; //This adds the name of the product into an alt tag
        cartProdRemove.innerHTML = "Remove"; //This adds the text for the 'Remove' button 
        cartProdName.innerHTML = cartValArray[0]; //This adds the name of the product
        cartProdNum.innerHTML = localStorage.key(i); //This adds the number of the product that was allocated when it is added to the cart
        cartProdPrice.innerHTML = cartValArray[1]; //This adds the price of the product

        //This collects everything from above, ready to be added into cart.html in the order below
        cartProdChild.appendChild(cartProdNum);
        cartProdChild.appendChild(cartProdImage);
        cartProdChild.appendChild(cartProdName);
        cartProdChild.appendChild(cartProdPrice);
        cartProdChild.appendChild(cartProdRemove);

        //This adds the 'childs' above into cart.html
        cartProdParent.appendChild(cartProdChild);
    }
}

//This else is activated when the local storage is empty
//Resulting in the empty box created in cart.html to be shown
else
{
    var emptyCart = document.getElementById("cartNone");
    emptyCart.classList.toggle("hide");
}