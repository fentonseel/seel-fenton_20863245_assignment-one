//This function is activated when the uer selects the 'Buy' button
function handleAddToCart(prod)
{
    //The 4 variables below contain the information that corresponds with the product when it is added to the cart
    var itemContainer = prod.parentElement;
    var itemTitle = itemContainer.getElementsByTagName("p")[0].innerHTML;
    var itemPrice = itemContainer.getElementsByTagName("p")[2].innerHTML;
    var itemImage = itemContainer.getElementsByTagName("img")[0].getAttribute("src");

    alert(itemTitle + " Added to Cart"); //This causes a pop up box to appear when the user selects 'Buy'

    //This stores the contents of the previous variables into the local storage
    var maxId = 0;
    var itemKey;

    //This is to make sure no current item is overridden, due to duplicate keys
    //This ensures all keys are unique
    if (localStorage.length > 0)
    {
        maxId = -1; //This is set to -1 to allow the itemKey to be greater than maxId, to allow the below if statement to work
        for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
        {
            itemKey = parseInt(localStorage.key(i));
            if (itemKey > maxId)
            {
                maxId = itemKey + 1;
            }
        }
    }

    localStorage.setItem(maxId, itemTitle + ", " + itemPrice + ", " + itemImage);
}

function readMoreNav(readMoreProd)
{
    var readMoreContainer = readMoreProd.parentElement.parentElement;
    var readItemTitle = readMoreContainer.getElementsByTagName("p")[0].innerHTML;
    var readItemInfo = readMoreContainer.getElementsByTagName("p")[1].innerHTML;
    readItemInfo = readItemInfo.split("<a")[0];
    var readItemPrice = readMoreContainer.getElementsByTagName("p")[2].innerHTML;
    var readItemImage = readMoreContainer.getElementsByTagName("img")[0].getAttribute("src");

    var readMoreKey = 1;

    sessionStorage.clear();
    sessionStorage.setItem(readMoreKey, readItemTitle + ", " + readItemInfo + ", " + readItemPrice + ", " + readItemImage);
}

//These three arrays below store the .jpg file names of each item. The arrays are seperated into hoodies, jumpers and t-shirts
var hoodiesList = ["UCLan-Logo-Hoodie-Black.jpg", "UCLan-Logo-Hoodie-Black2.jpg", "UCLan-Logo-Hoodie-Bright-Green.jpg", "UCLan-Logo-Hoodie-Bright-Green2.jpg",
"UCLan-Logo-Hoodie-Bright-Pink.jpg", "UCLan-Logo-Hoodie-Burgundy-New.jpg", "UCLan-Logo-Hoodie-Burgundy.jpg",
"UCLan-Logo-Hoodie-Charcoal.jpg", "UCLan-Logo-Hoodie-Creame.jpg", "UCLan-Logo-Hoodie-Dark-Grey.jpg",
"UCLan-Logo-Hoodie-Forest-Green.jpg", "UCLan-Logo-Hoodie-Green.jpg", "UCLan-Logo-Hoodie-Light-Blue.jpg",
"UCLan-Logo-Hoodie-Light-Grey.jpg", "UCLan-Logo-Hoodie-Light-Off-Grey.jpg", "UCLan-Logo-Hoodie-Lighter-Grey.jpg",
"UCLan-Logo-Hoodie-Lime.jpg", "UCLan-Logo-Hoodie-Navy-Blue.jpg", "UCLan-Logo-Hoodie-Navy-New.jpg",
"UCLan-Logo-Hoodie-Navy.jpg", "UCLan-Logo-Hoodie-New-Blue.jpg", "UCLan-Logo-Hoodie-Ocean-Blue.jpg",
"UCLan-Logo-Hoodie-Off-Blue.jpg", "UCLan-Logo-Hoodie-Orange-New.jpg", "UCLan-Logo-Hoodie-Orange.jpg",
"UCLan-Logo-Hoodie-Orange2.jpg", "UCLan-Logo-Hoodie-Pink.jpg", "UCLan-Logo-Hoodie-Purple.jpg",
"UCLan-Logo-Hoodie-Red.jpg", "UCLan-Logo-Hoodie-Rusty-Red.jpg", "UCLan-Logo-Hoodie-Salmon.jpg",
"UCLan-Logo-Hoodie-Slate-Blue.jpg", "UCLan-Logo-Hoodie-Slate-Grey.jpg", "UCLan-Logo-Hoodie-Teal.jpg"];

var jumperList = ["UCLan-Logo-Jumper-Black.jpg", "UCLan-Logo-Jumper-Bright-Green.jpg",
"UCLan-Logo-Jumper-Bright-Orange.jpg", "UCLan-Logo-Jumper-Bright-White-Green.jpg",
"UCLan-Logo-Jumper-Bronze.jpg", "UCLan-Logo-Jumper-Brown.jpg", "UCLan-Logo-Jumper-Creame.jpg",
"UCLan-Logo-Jumper-Dark-Grey.jpg", "UCLan-Logo-Jumper-Dark-Purple.jpg", "UCLan-Logo-Jumper-Dark-Red.jpg",
"UCLan-Logo-Jumper-Green.jpg", "UCLan-Logo-Jumper-Light-Green.jpg", "UCLan-Logo-Jumper-Light-Grey.jpg",
"UCLan-Logo-Jumper-Light-Grey2.jpg", "UCLan-Logo-Jumper-Light-Purple.jpg", "UCLan-Logo-Jumper-Lighter-Blue.jpg",
"UCLan-Logo-Jumper-Navy-Blue.jpg", "UCLan-Logo-Jumper-Ocean-Blue.jpg", "UCLan-Logo-Jumper-Old-Blue.jpg",
"UCLan-Logo-Jumper-Old-Pink.jpg", "UCLan-Logo-Jumper-Old-Red.jpg", "UCLan-Logo-Jumper-Olive-Green.jpg",
"UCLan-Logo-Jumper-Pink.jpg", "UClan-Logo-Jumper-Plum-Purple.jpg", "UCLan-Logo-Jumper-Purple.jpg",
"UCLan-Logo-Jumper-Real-Red.jpg", "UCLan-Logo-Jumper-Really-Red.jpg", "UCLan-Logo-Jumper-Red.jpg",
"UCLan-Logo-Jumper-Rusty-Orange.jpg", "UCLan-Logo-Jumper-Rusty-Red.jpg", "UCLan-Logo-Jumper-Sky-Blue.jpg",
"UCLan-Logo-Jumper-Sky-Purple.jpg", "UCLan-Logo-Jumper-Slate-Blue.jpg", "UCLan-Logo-Jumper-Slate-Grey.jpg",
"UCLan-Logo-Jumper-Sunshine-Pink.jpg", "UCLan-Logo-Jumper-Teal.jpg", "UCLan-Logo-Jumper-Vibrant-Red.jpg",
"UCLan-Logo-Jumper-Water-Blue.jpg", "UCLan-Logo-Jumper-White.jpg", "UCLan-Logo-Jumper-Yellow.jpg"];

var tshirtList = ["UCLan-Logo-TShirt-Another-Green.jpg", "UCLan-Logo-TShirt-Another-Purple.jpg",
"UCLan-Logo-TShirt-Black.jpg", "UCLan-Logo-TShirt-Bright-Green.jpg", "UCLan-Logo-TShirt-Bright-Orange.jpg",
"UCLan-Logo-TShirt-Bright-Pink.jpg", "UCLan-Logo-TShirt-Brightly-Green.jpg",
"UCLan-Logo-TShirt-Brilliant-Blue.jpg", "UCLan-Logo-TShirt-Brown.jpg", "UCLan-Logo-TShirt-Burgundy.jpg",
"UCLan-Logo-TShirt-Creame.jpg", "UCLan-Logo-TShirt-Dark-Green.jpg", "UCLan-Logo-TShirt-Dark-Grey.jpg",
"UCLan-Logo-TShirt-Dark-Grey2.jpg", "UCLan-Logo-TShirt-Dark-Purple.jpg", "UCLan-Logo-TShirt-Dark-Red.jpg",
"UCLan-Logo-TShirt-Grey.jpg", "UCLan-Logo-TShirt-Lime-Green.jpg", "UCLan-Logo-TShirt-Mustard-Yellow.jpg",
"UCLan-Logo-TShirt-Navy-Blue-New.jpg", "UCLan-Logo-TShirt-Ocean-Blue.jpg", "UCLan-Logo-TShirt-Old-Red.jpg",
"UCLan-Logo-TShirt-Olive-Green.jpg", "UCLan-Logo-TShirt-Orange.jpg", "UCLan-Logo-TShirt-Pink.jpg",
"UCLan-Logo-TShirt-Purple.jpg", "UCLan-Logo-TShirt-Real-Red.jpg", "UCLan-Logo-TShirt-Red.jpg",
"UCLan-Logo-TShirt-Rusty-Red.jpg", "UCLan-Logo-TShirt-Slate-Blue.jpg", "UCLan-Logo-TShirt-Slate-Grey.jpg",
"UCLan-Logo-TShirt-Teal-Blue.jpg", "UCLan-Logo-TShirt-Teal.jpg", "UCLan-Logo-TShirt-White.jpg",
"UCLan-Logo-TShirt-Yellow.jpg"];

//These variables below are what are constant for each product. For example, each hoodie has the same description and price.
var hoodiePrice = "£39.99";
var hoodieInfo = "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks";

var jumperPrice = "£29.99";
var jumperInfo = "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks";

var tshirtPrice = "£19.99";
var tshirtInfo = "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks";

//This is referring back to the id given in products.html and linking the two files together, to be used
var prodParent = document.getElementById("productsContainer");

//This for loop is used to go through and store the .jpg file name of each hoodie in hoodieList
for (var i = 0; i < 34; i++)
{
    var hoodieTitle;
    var hoodieName;

    //This sets the title of the hoodie to the .jpg file name
    hoodieTitle = hoodiesList[i];

    //The two lines below find and replace any '-' in the names with a space
    hoodieName = hoodieTitle.split(".") [0];
    hoodieName = hoodieName.replaceAll("-", " ");

    //The below variables are created because there is one div, image, a tag and button and three p tags used per item  
    var prodChild = document.createElement("div");
    var prodImage = document.createElement("img");
    var prodName = document.createElement("p");
    var prodInfo = document.createElement("p");
    var prodPrice = document.createElement("p");
    var prodReadMore = document.createElement("a");
    var prodBuy = document.createElement("button");
    prodBuy.setAttribute("onclick", "handleAddToCart(this)"); //This is adding the 'Buy' button onto each product card
    prodReadMore.setAttribute("onclick", "readMoreNav(this)")

    //This is linking the class names from formats.css causing each product card to be formatted
    prodChild.classList.add("product-card");
    prodImage.classList.add("product-img");
    prodName.classList.add("product-title");
    prodInfo.classList.add("product-info");
    prodPrice.classList.add("product-price");
    prodReadMore.classList.add("read-more");
    prodBuy.classList.add("buy");

    //This is adding the relevant information that is needed for each card
    prodImage.src = "store-items/" + hoodieTitle; //This is importing the corresponding image
    prodImage.alt = "This is an image of a " + hoodieName;
    prodBuy.innerHTML = "Buy";
    prodName.innerHTML = hoodieName;
    prodReadMore.innerHTML = " (Read More)";
    prodReadMore.href = "item.html";
    prodInfo.innerHTML = hoodieInfo;
    prodPrice.innerHTML = hoodiePrice;

    if (i == 0)
    {
        prodChild.id = "idHoodies";
    }

    prodInfo.appendChild(prodReadMore);
    prodChild.appendChild(prodImage);
    prodChild.appendChild(prodName);
    prodChild.appendChild(prodInfo);
    prodChild.appendChild(prodPrice);
    prodChild.appendChild(prodBuy);

    prodParent.appendChild(prodChild);
}

for (var o = 0; o < 40; o++)
{
    var jumperTitle;
    var jumperName;

    jumperTitle = jumperList[o];

    jumperName = jumperTitle.split(".") [0];
    jumperName = jumperName.replaceAll("-", " ");

    var prodChild = document.createElement("div");
    var prodImage = document.createElement("img");
    var prodName = document.createElement("p");
    var prodInfo = document.createElement("p");
    var prodPrice = document.createElement("p");
    var prodReadMore = document.createElement("a");
    var prodBuy = document.createElement("button");
    prodBuy.setAttribute("onclick", "handleAddToCart(this)");
    prodReadMore.setAttribute("onclick", "readMoreNav(this)")

    prodChild.classList.add("product-card");
    prodImage.classList.add("product-img");
    prodName.classList.add("product-title");
    prodInfo.classList.add("product-info");
    prodPrice.classList.add("product-price");
    prodReadMore.classList.add("read-more");
    prodBuy.classList.add("buy");

    prodImage.src = "store-items/" + jumperTitle;
    prodBuy.innerHTML = "Buy";
    prodName.innerHTML = jumperName;
    prodReadMore.innerHTML = " (Read More)";
    prodReadMore.href = "item.html";
    prodInfo.innerHTML = jumperInfo;
    prodPrice.innerHTML = jumperPrice;

    if (o == 0)
    {
        prodChild.id = "idJumpers";
    }

    prodInfo.appendChild(prodReadMore);
    prodChild.appendChild(prodImage);
    prodChild.appendChild(prodName);
    prodChild.appendChild(prodInfo);
    prodChild.appendChild(prodPrice);
    prodChild.appendChild(prodBuy);

    prodParent.appendChild(prodChild);
}

for (var u = 0; u < 34; u++)
{
    var tshirtTitle;
    var tshirtName;

    tshirtTitle = tshirtList[u];

    tshirtName = tshirtTitle.split(".") [0];
    tshirtName = tshirtName.replaceAll("-", " ");

    var prodChild = document.createElement("div");
    var prodImage = document.createElement("img");
    var prodName = document.createElement("p");
    var prodInfo = document.createElement("p");
    var prodPrice = document.createElement("p");
    var prodReadMore = document.createElement("a");
    var prodBuy = document.createElement("button");
    prodBuy.setAttribute("onclick", "handleAddToCart(this)");
    prodReadMore.setAttribute("onclick", "readMoreNav(this)")

    prodChild.classList.add("product-card");
    prodImage.classList.add("product-img");
    prodName.classList.add("product-title");
    prodInfo.classList.add("product-info");
    prodPrice.classList.add("product-price");
    prodReadMore.classList.add("read-more");
    prodBuy.classList.add("buy");

    prodImage.src = "store-items/" + tshirtTitle;
    prodBuy.innerHTML = "Buy";
    prodName.innerHTML = tshirtName;
    prodReadMore.innerHTML = " (Read More)";
    prodReadMore.href = "item.html";
    prodInfo.innerHTML = tshirtInfo;
    prodPrice.innerHTML = tshirtPrice;

    if (u == 0)
    {
        prodChild.id = "idTshirts";
    }

    prodInfo.appendChild(prodReadMore);
    prodChild.appendChild(prodImage);
    prodChild.appendChild(prodName);
    prodChild.appendChild(prodInfo);
    prodChild.appendChild(prodPrice);
    prodChild.appendChild(prodBuy);

    prodParent.appendChild(prodChild);
}