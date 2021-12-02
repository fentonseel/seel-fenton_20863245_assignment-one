var hoodiesList = ["UCLan-logo-hoodie-Black.jpg", "UCLan-logo-hoodie-Black2.jpg", "UCLan-logo-hoodie-Bright-Green.jpg", "UCLan-logo-hoodie-Bright-Green2.jpg",
"UCLan-logo-hoodie-Bright-Pink.jpg", "UCLan-logo-hoodie-Burgundy-New.jpg", "UCLan-logo-hoodie-Burgundy.jpg",
"UCLan-logo-hoodie-Charcoal.jpg", "UCLan-logo-hoodie-Creame.jpg", "UCLan-logo-hoodie-Dark-Grey.jpg",
"UCLan-logo-hoodie-Forest-Green.jpg", "UCLan-logo-hoodie-Green.jpg", "UCLan-logo-hoodie-Light-Blue.jpg",
"UCLan-logo-hoodie-Light-Grey.jpg", "UCLan-logo-hoodie-Light-Off-Grey.jpg", "UCLan-logo-hoodie-Lighter-Grey.jpg",
"UCLan-logo-hoodie-Lime.jpg", "UCLan-logo-hoodie-Navy-Blue.jpg", "UCLan-logo-hoodie-Navy-New.jpg",
"UCLan-logo-hoodie-Navy.jpg", "UCLan-logo-hoodie-New-Blue.jpg", "UCLan-logo-hoodie-Ocean-Blue.jpg",
"UCLan-logo-hoodie-Off-Blue.jpg", "UCLan-logo-hoodie-Orange-New.jpg", "UCLan-logo-hoodie-Orange.jpg",
"UCLan-logo-hoodie-Orange2.jpg", "UCLan-logo-hoodie-Pink.jpg", "UCLan-logo-hoodie-Purple.jpg",
"UCLan-logo-hoodie-Red.jpg", "UCLan-logo-hoodie-Rusty-Red.jpg", "UCLan-logo-hoodie-Salmon.jpg",
"UCLan-logo-hoodie-Slate-Blue.jpg", "UCLan-logo-hoodie-Slate-Grey.jpg", "UCLan-logo-hoodie-Teal.jpg"];

var jumperList = ["UCLan-logo-jumper-Black.jpg", "UCLan-logo-jumper-Bright-Green.jpg",
"UCLan-logo-jumper-Bright-Orange.jpg", "UCLan-logo-jumper-Bright-White-Green.jpg",
"UCLan-logo-jumper-Bronze.jpg", "UCLan-logo-jumper-Brown.jpg", "UCLan-logo-jumper-Creame.jpg",
"UCLan-logo-jumper-Dark-Grey.jpg", "UCLan-logo-jumper-Dark-Purple.jpg", "UCLan-logo-jumper-Dark-Red.jpg",
"UCLan-logo-jumper-Green.jpg", "UCLan-logo-jumper-Light-Green.jpg", "UCLan-logo-jumper-Light-Grey.jpg",
"UCLan-logo-jumper-Light-Grey2.jpg", "UCLan-logo-jumper-Light-Purple.jpg", "UCLan-logo-jumper-Lighter-Blue.jpg",
"UCLan-logo-jumper-Navy-Blue.jpg", "UCLan-logo-jumper-Ocean-Blue.jpg", "UCLan-logo-jumper-Old-Blue.jpg",
"UCLan-logo-jumper-Old-Pink.jpg", "UCLan-logo-jumper-Old-Red.jpg", "UCLan-logo-jumper-Olive-Green.jpg",
"UCLan-logo-jumper-Pink.jpg", "UClan-logo-jumper-Plum-Purple.jpg", "UCLan-logo-jumper-Purple.jpg",
"UCLan-logo-jumper-Real-Red.jpg", "UCLan-logo-jumper-Really-Red.jpg", "UCLan-logo-jumper-Red.jpg",
"UCLan-logo-jumper-Rusty-Orange.jpg", "UCLan-logo-jumper-Rusty-Red.jpg", "UCLan-logo-jumper-Sky-Blue.jpg",
"UCLan-logo-jumper-Sky-Purple.jpg", "UCLan-logo-jumper-Slate-Blue.jpg", "UCLan-logo-jumper-Slate-Grey.jpg",
"UCLan-logo-jumper-Sunshine-Pink.jpg", "UCLan-logo-jumper-Teal.jpg", "UCLan-logo-jumper-Vibrant-Red.jpg",
"UCLan-logo-jumper-Water-Blue.jpg", "UCLan-logo-jumper-White.jpg", "UCLan-logo-jumper-Yellow.jpg"];

var tshirtList = ["UCLan-logo-TShirt-Another-Green.jpg", "UCLan-logo-TShirt-Another-Purple.jpg",
"UCLan-logo-TShirt-Black.jpg", "UCLan-logo-TShirt-Bright-Green.jpg", "UCLan-logo-TShirt-Bright-Orange.jpg",
"UCLan-logo-TShirt-Bright-Pink.jpg", "UCLan-logo-TShirt-Brightly-Green.jpg",
"UCLan-logo-TShirt-Brilliant-Blue.jpg", "UCLan-logo-TShirt-Brown.jpg", "UCLan-logo-TShirt-Burgundy.jpg",
"UCLan-logo-TShirt-Creame.jpg", "UCLan-logo-TShirt-Dark-Green.jpg", "UCLan-logo-TShirt-Dark-Grey.jpg",
"UCLan-logo-TShirt-Dark-Grey2.jpg", "UCLan-logo-TShirt-Dark-Purple.jpg", "UCLan-logo-TShirt-Dark-Red.jpg",
"UCLan-logo-TShirt-Grey.jpg", "UCLan-logo-TShirt-Lime-Green.jpg", "UCLan-logo-TShirt-Mustard-Yellow.jpg",
"UCLan-logo-TShirt-Navy-Blue-New.jpg", "UCLan-logo-TShirt-Ocean-Blue.jpg", "UCLan-logo-TShirt-Old-Red.jpg",
"UCLan-logo-TShirt-Olive-Green.jpg", "UCLan-logo-TShirt-Orange.jpg", "UCLan-logo-TShirt-Pink.jpg",
"UCLan-logo-TShirt-Purple.jpg", "UCLan-logo-TShirt-Real-Red.jpg", "UCLan-logo-TShirt-Red.jpg",
"UCLan-logo-TShirt-Rusty-Red.jpg", "UCLan-logo-TShirt-Slate-Blue.jpg", "UCLan-logo-TShirt-Slate-Grey.jpg",
"UCLan-logo-TShirt-Teal-Blue.jpg", "UCLan-logo-TShirt-Teal.jpg", "UCLan-logo-TShirt-White.jpg",
"UCLan-logo-TShirt-Yellow.jpg"];

var hoodiePrice = "£39.99";
var hoodieInfo = "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks";

var jumperPrice = "£29.99";
var jumperInfo = "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks";

var tshirtPrice = "£19.99";
var tshirtInfo = "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks";

var prodParent = document.getElementById("productsContainer");

for (var i = 0; i < 34; i++)
{
    var hoodieTitle;
    var hoodieName;

    hoodieTitle = hoodiesList[i];

    hoodieName = hoodieTitle.split(".") [0];
    hoodieName = hoodieName.replaceAll("-", " ");

    var prodChild = document.createElement("div");
    var prodImage = document.createElement("img");
    var prodName = document.createElement("p");
    var prodInfo = document.createElement("p");
    var prodPrice = document.createElement("p");
    var prodReadMore = document.createElement("a");
    var prodBuy = document.createElement("a");

    prodChild.classList.add("product-card");
    prodImage.classList.add("product-img");
    prodName.classList.add("product-title");
    prodInfo.classList.add("product-info");
    prodPrice.classList.add("product-price");
    prodReadMore.classList.add("read-more");
    prodBuy.classList.add("buy");

    prodImage.src = "store-items/" + hoodieTitle;
    prodBuy.innerHTML = "Buy";
    prodName.innerHTML = hoodieName;
    prodReadMore.innerHTML = "(Read More)";
    prodInfo.innerHTML = hoodieInfo;
    prodPrice.innerHTML = hoodiePrice;

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
    var prodBuy = document.createElement("a");

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
    prodReadMore.innerHTML = "(Read More)";
    prodInfo.innerHTML = jumperInfo;
    prodPrice.innerHTML = jumperPrice;

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
    var prodBuy = document.createElement("a");

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
    prodReadMore.innerHTML = "(Read More)";
    prodInfo.innerHTML = tshirtInfo;
    prodPrice.innerHTML = tshirtPrice;

    prodInfo.appendChild(prodReadMore);
    prodChild.appendChild(prodImage);
    prodChild.appendChild(prodName);
    prodChild.appendChild(prodInfo);
    prodChild.appendChild(prodPrice);
    prodChild.appendChild(prodBuy);

    prodParent.appendChild(prodChild);
}