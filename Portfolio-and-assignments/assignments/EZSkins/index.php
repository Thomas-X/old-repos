<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EZSkins</title>
    <link rel="stylesheet" href="php/css/bulma.css">
    <link rel="stylesheet" href="php/css/index.css">
    <link rel="stylesheet" href="php/css/font-awesome.css">
    <script src="php/js/toggleNav.js"></script>
    <script src="php/js/loadFunc.js"></script>
    <script src="php/js/button1.js"></script>
    <link rel="stylesheet" href="php/sideNav/index.css">
    <link rel="stylesheet" href="php/css/font-awesome.min.css">
    <link rel="stylesheet" href="php/css/font-awesome.css">
    <link rel="stylesheet" href="php/css/bulma.css">
<!--    <link rel="stylesheet" href="php/css/faq.css">-->
    <link rel="stylesheet" href="php/searchcssxphp.php">

    <script src="php/js/toggleNav.js"></script>
    <script src="php/js/loadFunc.js"></script>
    <script src="php/js/button1.js"></script>
    <script src="php/js/removeButton.js"></script>
<!--    <script src="php/js/gotoCart.js"></script>-->






    <body style="margin-top:75px;">
    <nav class="nav" style="position:fixed;width:100%;top:0px;">
        <div id="navcolor" class="nav-left">
            <a class="nav-item is-brand" href="index.php">
                <img id="logoezskins" src="php/logo/logo.png" alt="EZSkins logo">
            </a>
        </div>

        <div id="navcolor" class="nav-center">
            <a class="nav-item" href="https://github.com/Thomas-X/EZSkins" target="_blank">
      <span class="icon">
        <i id="githubicon" class="fa fa-github fa-inverse"></i>
      </span>
            </a>
        </div>

        <span id="nav-toggle" class="nav-toggle" onclick="togglefunction()">
        <span id="spans"></span>
        <span id="spans"></span>
        <span id="spans"></span>
    </span>


        <div id="nav-menu" class="nav-right nav-menu" style="background-color:#222329;padding:0;">
            <?php
//            var_dump($_SESSION['username']);

            if (isset($_SESSION['username'])) {

                $getusername = $_SESSION['username'];

                echo "<a href='php/logout.php' id=\"navitemcolor6\" class='nav-item is-noactive'>
    </a>";
            } else {
                echo "<a href='php/logout.php' id=\"navitemcolor6\" class='nav-item is-noactive'>
    </a>";
            }
            ?>
            <a id="navitemcolor1" class="nav-item is-noactive" href="php/search2.php">
                Shop
            </a>
            <a id="navitemcolor2" class="nav-item is-noactive" href="news/news.php">
                News
            </a>
            <a id="navitemcolor3" class="nav-item is-noactive" href="about/about.php">
                About
            </a>
            <a id="navitemcolor4" class="nav-item is-noactive" href="faq/faq.php">
                FAQ
            </a>
            <a id="navitemcolor5" class="nav-item is-noactive" href="contact/contact.php">
                Contact
            </a>

            <script>
                function gotoCart() {
                    window.location = "php/add_to_cart.php";
                }

                </script>
            <?php
            echo "<i id='shoppingCart' onclick='gotoCart()' class=\"fa fa-shopping-cart nav-item\" aria-hidden=\"true\"></i>"


            ?>


        </div>
    </nav>
    <div id="redline" style="position:fixed;width:100%;z-index: 2;"> <!-- rood balkje onder nav -->
    </div>

    <div class="slider">
        <figure>
            <img class="img1" src="img/slider/cyrex.png">
            <img class="img2" src="img/slider/dragonking.png">
            <img class="img3" src="img/slider/dragonlore.png">
            <img class="img4" src="img/slider/fireserpent.png">
            <img class="img5" src="img/slider/howl.png">
            <img class="img6" src="img/slider/vulcan.png">
            <img class="img7" src="img/slider/cyrex.png">
        </figure>
        <a id="button" onclick="" class="button is-danger is-medium"><strong>BUY NOW</strong></a>
    </div>


    <section id="balk" class="hero is-primary">
        <div id="balk" class="hero-body">
            <div id="balk" class="container has-text-centered">
                <h1 class="title">
                    <div class="animate-bottom2">
                        Customer Reviews
                    </div>
                </h1>
                <h2 class="subtitle">
                    <div class="animate-bottom2">
                        <i>By our most loyal customers to date</i>
                        <br><a style="color:cyan;" id="chat" href="php/chat.php">or Chat with us!</a>
                    </div>
                </h2>
                <div class="animate-bottom2">
                <a id="makeinvis" class="button is-danger" onclick="redButton()" style="color: black;">Expand</a></div>
            </div>
        </div>
    </section>


    <!--<div class="randombalk"> &lt;!&ndash; random balk onder de slider &ndash;&gt;-->
    <!--<br><br>-->
    <!--</div> &lt;!&ndash; end of the random balk &ndash;&gt;-->
    <div class="animate-bottom">
        <div id="uberbox">

            <div class="box"> <!-- 1e echte customers review -->
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="img/reviews/janjaan.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Jan Jaap Siebers</strong>
                                <small>@YoyoSiebers</small>
                                <small>31m</small>
                                <br>
                                Yo gabbers je mattie Siebers hierzo. Vette website. Ik heb gister hierzo goedkope
                                skinna's
                                gekocht G! Echt een aanrader!
                            </p>
                        </div>
                        <nav class="level">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div> <!-- 1e echte customers review end -->
            <div class="box"> <!-- 2e echte customers review -->
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="img/reviews/pietje.jpg" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Piet de Vries</strong>
                                <small>@JeMannetjePiet</small>
                                <small>5m</small>
                                <br>
                                Hello my name is Piet I saw this website on <a>https://www.csgobets-noscam.org/really-noscam/</a>.
                                And
                                it's true there is no scam. I like it!

                            </p>
                        </div>
                        <nav class="level">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div> <!-- 2e echte customers review end -->

            <!--SECOND ROW-->
            <div class="box"> <!-- 3e echte customers review -->
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="img/reviews/ton.png" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Ton van Beuningen</strong>
                                <small>@TonnieBoi</small>
                                <small>54m</small>
                                <br>
                                Yo ene <a style="color: #00d1b2;">@YoyoSiebers</a> zei dat deze site D0pe was. Ik heb
                                meteen al
                                m'n geld op de site gezet en 50 gut knife safari mesh gekocht.
                            </p>
                        </div>
                        <nav class="level">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div> <!-- 3e echte customers review end -->
            <div class="box"> <!-- 4e echte customers review -->
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="img/reviews/job.jpg" alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Job Jaap Siebers</strong>
                                <small>@PatatjeJopJaap</small>
                                <small>48m</small>
                                <br>
                                M'n mattie <a style="color: #00d1b2;">@YoyoSiebers</a> zei dat deze site geen scam site
                                was. Ik
                                vertrouwde hem en hij had gelijk. Ik heb gekke doekoes gemaakt G.

                            </p>
                        </div>
                        <nav class="level">
                            <div class="level-left">
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div> <!-- 4e echte customers review end -->


        </div>

        <hr style="margin:auto;">
        <footer class="footer">

            <div class="container">
                <div class="content has-text-centered">

                    <p>
                        <strong>EZSkins</strong><a style="color: white;" id="footertekst"> by Thomas Zwarts & Barry
                        Willems. </a>
                    </p>
                    <p>
                        <a class="icon" id="iconbot" href="php/search2.php">
                            <i class="fa fa-shopping-basket"></i></a>
                        <a class="icon" id="iconbot" href="news/news.php">
                            <i class="fa fa-newspaper-o"></i></a>
                        <a class="icon" id="iconbot" href="about/about.php">
                            <i class="fa fa-question-circle"></i></a>
                        <a class="icon" id="iconbot" href="faq/faq.php">
                            <i class="fa fa-comment"></i></a>
                        <a class="icon" id="iconbot" href="contact/contact.php">
                            <i class="fa fa-address-card-o"></i></a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>