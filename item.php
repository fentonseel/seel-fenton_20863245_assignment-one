<!DOCTYPE html>
<html lang="en">
    <head> 
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> UCLAN Student Clothes Store </title> <!--This is the name of the webpage shown on the tab during runtime-->
        <link rel="stylesheet" href="formats.css"> <!--This is a reference to the formats.css file to link the css code to this html page-->
    </head>

    <!--Inside this is the content of the page.
    On most of the tags there is a 'class=' which refers back to the
    css file, which formats the content of each class uniquely-->
    <body> 
        <?php
            session_start();
        ?>

        <!--This is a division for the navigation bar of the home page-->
        <div class="nav-bar">
            <img class="logo" src="UCLAN-logo.png" alt="UCLan Logo"> <!--This finds and places the image UCLAN-logo.png onto the page-->    
            <h1 class="site-title"> Student Clothes Store </h1> <!--This is the title of the page that is shown at the top of the page, in the navigation bar-->
            
            <!--This is another division but for the buttons to navigate across the site-->
            <div class="page-selection">
                <ul>
                    <!--Each of these three tags are buttons that allow the user to navigate through different pages-->
                    <li><a href="index.php"> Home </a></li> 
                    <li><a href="products.php"> Products </a></li>
                    <li><a href="cart.php"> Cart </a></li>
                    <?php
                    if (isset($_SESSION["user"]))
                    {
                        echo '<li><a href="register.php?logout=true"> Logout </a><li>';
                    }
                    else
                    {
                        echo '<li><a href="register.php"> Register </a></li>';
                    }
                    ?>
                </ul>
            </div>
            
            <!--The div below is each bar of the hamburger menu (https://www.w3schools.com/howto/howto_css_menu_icon.asp)-->
            <div class="burger-menu" onclick="burgerMenuClick()"> <!--The onclick is referencing to the function in standard.js-->
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <!--This is the button that are shown when the hamburger menu is selected-->
            <div class="page-selection-burger-menu">
                <ul class="hide" id=burgerMenuSelection>
                    <li><a class="home-bm" href="index.php"> Home </a></li>
                    <li><a class="products-bm" href="products.php"> Products </a></li>
                    <li><a class="cart-bm" href="cart.php"> Cart </a></li>
                    <?php
                    if (isset($_SESSION["user"]))
                    {
                        echo '<li><a href="register.php?logout=true"> Logout </a><li>';
                    }
                    else
                    {
                        echo '<li><a href="register.php"> Register </a></li>';
                    }
                    ?>
                </ul>
            </div>
        </div>

        <!--This div contains the contents of the enlarged product card shown to the user-->
        <div class="product-container">
            <?php
                require 'php/fetch_item.php';
            ?>
        </div>
        
        <!--The below div is the contents of the footer-->
        <div class="footer">
            <div class="footer-headings">
                <h1> Links </h1> <!--This is the title for links-->
                <div>
                    <p><a class="su-link" href="https://www.uclansu.co.uk/"> UCLan Student's Union </a></p> <!--This allows the user to navigate to the required link-->
                </div>
            </div>

            <div class="footer-headings">
                <h1> Contacts </h1>
                <div>
                    <p>Email: suinformation@uclan.ac.uk</p> <!--These are just basic text informing the user of contacts-->
                    <p>Phone: 01772 893000</p>
                </div>
            </div>
            
            <div class="footer-headings">
                <h1> Location </h1>
                <div>
                    <p>University of Central Lancashire Student's Union</p> <!--Similar to the contacts this is just text showing the location-->
                    <p>Fylde Road, Preston, PR1 7BY</p>
                    <p>Registered in England</p>
                    <p>Company Number: 7623917</p>
                    <p>Registered Charity Number: 1142616</p>
                </div>
            </div>
        </div>

        <script src="products.js"></script> <!--This links the JavaScript file readmore.js to this page-->
        <script src="standard.js"></script> <!--This links the JavaScript file standard.js to this, allowing the use of the hamburger menu (https://www.w3schools.com/howto/howto_css_menu_icon.asp)-->
    </body>
</html>