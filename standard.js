function burgerMenuClick() {
    let navi = document.getElementById("burgerMenuSelection");

    navi.classList.toggle("hide");

    console.log(navi.classList);
}

var img = document.createElement("img");

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
"UCLan-logo-hoodie-Slate-Blue.jpg", "UCLan-logo-hoodie-Slate-Grey.jpg", "UCLan-logo-hoodie-Teal.jpg"]

var jumpersList = ["UCLan-logo-jumper-Black.jpg", "UCLan-logo-jumper-Bright-Green.jpg",
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
"UCLan-logo-jumper-Water-Blue.jpg", "UCLan-logo-jumper-White.jpg", "UCLan-logo-jumper-Yellow.jpg"]

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
"UCLan-logo-TShirt-Yellow.jpg"]

img.src = "store-items/";
var src = document.getElementById("product-images-id");

src.appendChild(img);