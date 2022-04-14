//This function is activated when the uer selects the 'Buy' button
function handleAddToCart(prod)
{
    //The 4 variables below contain the information that corresponds with the product when it is added to the cart
    var itemContainer = prod.parentElement;
    var itemTitle = itemContainer.getElementsByTagName("p")[0].innerHTML;
    var itemPrice = itemContainer.getElementsByTagName("p")[2].innerHTML;
    var itemImage = itemContainer.getElementsByTagName("img")[0].getAttribute("src");

    alert(itemTitle + " Added to Cart"); //This causes a pop up box to appear when the user selects 'Buy'

    var maxId = 0;
    var itemKey;

    //This is to make sure no current item is overridden, due to duplicate keys
    //This ensures all keys are unique
    if (localStorage.length > 0)
    {
        maxId = -1; //This is set to -1 to allow the itemKey to be greater than maxId, to allow the below if statement to work
        for (var i = 0; i < localStorage.length; ++i) //https://stackoverflow.com/questions/8419354/get-html5-localstorage-keys
        {
            itemKey = parseInt(localStorage.key(i)); //This line sets the value of itemKey to an integer
            if (itemKey > maxId)
            {
                maxId = itemKey + 1; //This is done to ensure all the keys are unique, ensuring nothing is overridden in the local storage
            }
        }
    }

    //This stores the contents of the previously declared variables into the local storage, to be used in cart.html
    localStorage.setItem(maxId, itemTitle + ", " + itemPrice + ", " + itemImage);
}