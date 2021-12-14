//This function is activated when the uer selects the 'Buy' button
function handleAddToCart(readMoreProd)
{
    //The 4 variables below contain the information that corresponds with the product when it is added to the cart
    var readItemContainer = readMoreProd.parentElement;
    var readItemTitle = readItemContainer.getElementsByTagName("p")[0].innerHTML;
    var readItemPrice = readItemContainer.getElementsByTagName("p")[2].innerHTML;
    var readItemImage = readItemContainer.getElementsByTagName("img")[0].getAttribute("src");

    alert(readItemTitle + " Added to Cart"); //This causes a pop up box to appear when the user selects 'Buy'

    //This stores the contents of the previous variables into the local storage
    var maxId = 0;
    var readItemKey;

    //This is to make sure no current item is overridden, due to duplicate keys
    //This ensures all keys are unique
    if (localStorage.length > 0)
    {
        maxId = -1; //This is set to -1 to allow the itemKey to be greater than maxId, to allow the below if statement to work
        for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
        {
            readItemKey = parseInt(localStorage.key(i));
            if (readItemKey > maxId)
            {
                maxId = readItemKey + 1;
            }
        }
    }

    localStorage.setItem(maxId, readItemTitle + ", " + readItemPrice + ", " + readItemImage);
}

var readProdParent = document.getElementById("readMoreContainer");

var readProdChild = document.createElement("div");
var readProdImage = document.createElement("img");
var readProdName = document.createElement("p");
var readProdInfo = document.createElement("p");
var readProdPrice = document.createElement("p");
var readProdBuy = document.createElement("button");
readProdBuy.setAttribute("onclick", "handleAddToCart(this)");

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
