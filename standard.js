//This function controls the hamburger menu and it's attributes
function burgerMenuClick() 
{
    //This line is linking back to the .html files, using the id 'burgerMenuSelection'
    let navi = document.getElementById("burgerMenuSelection");

    //This line keeps the hamburger menu hidden because it is only used on smaller screen
    navi.classList.toggle("hide");

    console.log(navi.classList);
}