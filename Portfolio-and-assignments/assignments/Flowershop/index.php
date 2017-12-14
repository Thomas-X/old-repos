<?php
session_start();
require_once("lib/cart.php");

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

if (isset($_GET['id'])) {
    $login = new Login();
    $connect = $login->connecttoDB("localhost", "root", "admin", "flowershop");
    $getvalidID = $login->getValidCount($_GET['id']);

    if ($getvalidID != 0) {
        array_push($_SESSION['cart'], $_GET['id']);
    }
}


?>
<!DOCTYPE html>
<html lang="en" style="height:100%">
<head>
    <meta charset="UTF-8">
    <title>Flowershop</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/bulma.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <script src="js/expandBox.js"></script>
</head>
<body style="margin-top:75px;">
<nav class="nav" style="position:fixed;width:100%;top:0px;background-image:url('http://i.imgur.com/ziqM0f8.jpg')">
    <div id="navcolor" class="nav-left" style="background-image:url('http://i.imgur.com/ziqM0f8.jpg')">
        <a class="nav-item is-brand" href="index.php" style="background-color:white">
            <img id="logoezskins"
                 src="img/flowershop.png"
                 alt="EZSkins logo">
        </a>
    </div>

    <div id="navcolor" class="nav-center" style="background-image:url('http://i.imgur.com/ziqM0f8.jpg')">
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


    <div id="nav-menu" class="nav-right nav-menu"
         style="background-color:#222329;padding:0;background-image:url('http://i.imgur.com/ziqM0f8.jpg')">
        <a id="flowershop" class="nav-item is-noactive" href="nieuwboeket.php">
            Nieuw Boeket
        </a>
    </div>
</nav>


<div class="wrapper" style="text-align: center">

    <?php
    $login = new Login();
    $connect = $login->connecttoDB("localhost", "root", "admin", "flowershop");

    //    $naamboeket = mysqli_query($connect, "SELECT ");




    if (!isset($_GET['useradded'])) {
        $query = mysqli_query($connect, "SELECT * FROM boeketten WHERE idgebruiker=1");
        $numrows = mysqli_num_rows($query);

        for ($counter = 0; $counter < $numrows; $counter++) {

            $naam = mysqli_query($connect, "SELECT naam FROM boeketten LIMIT 1 OFFSET $counter");
            $prijs = mysqli_query($connect, "SELECT prijs FROM boeketten LIMIT 1 OFFSET $counter");
            $boeketurl = mysqli_query($connect, "SELECT boeketurl FROM boeketten LIMIT 1 OFFSET $counter");
            $bloemsoorten = mysqli_query($connect, "SELECT bloemsoortenboeket FROM boeketten LIMIT 1 OFFSET $counter");

            $naamarray = mysqli_fetch_assoc($naam);
            $naam = $naamarray['naam'];

            $prijsarray = mysqli_fetch_assoc($prijs);
            $prijs = $prijsarray['prijs'];

            $boeketurlarray = mysqli_fetch_assoc($boeketurl);
            $boeketurl = $boeketurlarray['boeketurl'];

            $bloemsoortenarray = mysqli_fetch_assoc($bloemsoorten);
            $bloemsoorten = $bloemsoortenarray['bloemsoortenboeket'];

//        var_dump($boeketurl);
            @$counter23++;
            echo "
<div class=\"box\" style='width: 65%;'>
  <article class=\"media\">
    <div class=\"media-left\">
      <figure class=\"image is-64x64\">
        <img src=\"$boeketurl\" alt=\"Image\">
      </figure>
    </div>
    <div class=\"media-content\">
      <div class=\"content\">
        <p>
          <strong>$naam</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class=\"level\">
        <div class=\"level-left\">
<!-- plaats links hier -->
        $$prijs

        </div>
       
                <a href='nieuwboeket.php?id=$counter23&clear=1' style='float:right;text-decoration:underline;cursor: pointer'>Aanpassen</a> <a href='bloemsoorten.php?id=$counter23' style='float:right;text-decoration:underline;cursor: pointer'>Bloemsoorten</a>
      </nav>";

//        $bloemsoortenarray = explode(",", $bloemsoorten);
//
//        $counter2 = 0;
//        foreach($bloemsoortenarray as $x) {
//            echo "<span id='7' style='display:none'> haii</span>";
//        }
            echo "
    </div>

  </article>
</div>";
        }


    }
    $counter23 = 0;

    if (isset($_GET['useradded'])) {
        $query = mysqli_query($connect, "SELECT * FROM boeketten WHERE idgebruiker IS NULL");
        $numrows = mysqli_num_rows($query);

        for ($counter = 0; $counter < $numrows; $counter++) {

            $naam = mysqli_query($connect, "SELECT naam FROM boeketten WHERE idgebruiker IS NULL LIMIT 1 OFFSET $counter");
            $prijs = mysqli_query($connect, "SELECT prijs FROM boeketten WHERE idgebruiker IS NULL LIMIT 1 OFFSET $counter");
            $boeketurl = mysqli_query($connect, "SELECT boeketurl FROM boeketten WHERE idgebruiker IS NULL LIMIT 1 OFFSET $counter");
            $bloemsoorten = mysqli_query($connect, "SELECT bloemsoortenboeket FROM boeketten WHERE idgebruiker IS NULL LIMIT 1 OFFSET $counter");

            $naamarray = mysqli_fetch_assoc($naam);
            $naam = $naamarray['naam'];

            $prijsarray = mysqli_fetch_assoc($prijs);
            $prijs = $prijsarray['prijs'];

            $boeketurlarray = mysqli_fetch_assoc($boeketurl);
            $boeketurl = $boeketurlarray['boeketurl'];

            $bloemsoortenarray = mysqli_fetch_assoc($bloemsoorten);
            $bloemsoorten = $bloemsoortenarray['bloemsoortenboeket'];

//        var_dump($boeketurl);
            $counter23++;
            echo "
<div class=\"box\" style='width: 65%;'>
  <article class=\"media\">
    <div class=\"media-left\">
      <figure class=\"image is-64x64\">
        <img src=\"$boeketurl\" alt=\"Image\">
      </figure>
    </div>
    <div class=\"media-content\">
      <div class=\"content\">
        <p>
          <strong>$naam</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class=\"level\">
        <div class=\"level-left\">
<!-- plaats links hier -->
        $$prijs

        </div>
       
                <a href='nieuwboeket.php?id=$counter23&clear=1' style='float:right;text-decoration:underline;cursor: pointer'>Aanpassen</a> <a href='bloemsoorten.php?id=$counter23' style='float:right;text-decoration:underline;cursor: pointer'>Bloemsoorten</a>
      </nav>";

//        $bloemsoortenarray = explode(",", $bloemsoorten);
//
//        $counter2 = 0;
//        foreach($bloemsoortenarray as $x) {
//            echo "<span id='7' style='display:none'> haii</span>";
//        }
            echo "
    </div>

  </article>
</div>";
        }
    }




    if (!isset($_GET['useradded'])) {
        echo "<a style='width:100%;height:20px;align-self:center;text-decoration:underline' href='index.php?useradded=1'>Gebruikers toegevoegde boeketten</a>";
    }
    ?>
</div>
</body>
</body>
</html>