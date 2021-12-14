//This function is activated when the uer selects the 'Buy' button
function handleAddToCart(readMoreProd)
{
    //The 4 variables below contain the information that corresponds with the product when it is added to the cart
    var readItemContainer = readMoreProd.parentElement;
    var readItemTitle = readItemContainer.getElementsByTagName("p")[0].innerHTML;
    var readItemPrice = readItemContainer.getElementsByTagName("p")[2].innerHTML;
    var readItemImage = readItemContainer.getElementsByTagName("img")[0].getAttribute("src");

    alert(readItemTitle + " Added to Cart"); //This causes a pop up box to appear when the user selects 'Buy'

    var maxId = 0;
    var readItemKey;

    //This is to make sure no current item is overridden, due to duplicate keys
    //This ensures all keys are unique
    if (localStorage.length > 0)
    {
        maxId = -1; //This is set to -1 to allow the itemKey to be greater than maxId, to allow the below if statement to work
        for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
        {
            readItemKey = parseInt(localStorage.key(i)); //This line sets the value of itemKey to an integer
            if (readItemKey > maxId)
            {
                maxId = readItemKey + 1; //This is done to ensure all the keys are unique, ensuring nothing is overridden in the local storage
            }
        }
    }

    //This stores the contents of the previously declared variables into the local storage, to be used in cart.html
    localStorage.setItem(maxId, readItemTitle + ", " + readItemPrice + ", " + readItemImage);
}

//This is referring back to the id given in item.html and linking the two files together to be used accordingly
var readProdParent = document.getElementById("readMoreContainer");

//The below variables are created because there is one div, image and button, there's also three p tags used per item
var readProdChild = document.createElement("div");
var readProdImage = document.createElement("img");
var readProdName = document.createElement("p");
var readProdInfo = document.createElement("p");
var readProdPrice = document.createElement("p");
var readProdBuy = document.createElement("button");
readProdBuy.setAttribute("onclick", "handleAddToCart(this)"); //This is adding the 'Buy' button onto the product card

//This is linking the class names from formats.css allowing the product card to be formatted
readProdImage.classList.add("rm-prod-img");
readProdName.classList.add("rm-prod-title");
readProdInfo.classList.add("rm-prod-info");
readProdPrice.classList.add("rm-prod-price");
readProdBuy.classList.add("buy");

//These variables retrieve the information in the session storage from the item stored in key 1
//There is never more than one item stored in the session storage, because it is cleared before anything else is added to it
var readMoreVal = sessionStorage.getItem("1");
var readMoreValArray = readMoreVal.split(", ");

//The information retrieved above is then used below to import the correct data for the page
readProdImage.src = readMoreValArray[3]; //This imports the product image that is stored in location 3 in the above array
readProdImage.alt = "This is an image of a " + readMoreValArray[0]; //This adds the name of the product to an alt tag
readProdBuy.innerHTML = "Buy"; //This adds the text 'Buy' for the 'Buy' button
readProdName.innerHTML = readMoreValArray[0]; //This adds the name of the product
readProdInfo.innerHTML = readMoreValArray[1]; //This adds the description of the product
readProdPrice.innerHTML = readMoreValArray[2]; //This adds the price of the product

//This collects everything from above, ready to be added into item.html in the order below
readProdChild.appendChild(readProdImage);
readProdChild.appendChild(readProdName);
readProdChild.appendChild(readProdInfo);
readProdChild.appendChild(readProdPrice);
readProdChild.appendChild(readProdBuy);

//This adds the 'childs' above into item.html
readProdParent.appendChild(readProdChild);
