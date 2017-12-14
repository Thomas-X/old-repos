<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas X
 * Date: 11/24/2016
 * Time: 12:46 PM
 */

?>

<!DOCTYPE html>
<html lang="en" style="height:100%">
<head>
    <meta charset="UTF-8">
    <title>Flowershop</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/bulma.css">
    <link rel="stylesheet" href="css/font-awesome.css">
<body style="margin-top:75px;background-image:url('http://placekitten.com/g/1920/1080');height:100%">
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

<div class="wrapper">

    <?php
    require_once ("lib/cart.php");

    $login = new Login();
    $connect = $login->connecttoDB("localhost","root", "admin","flowershop");

    @$getvalidid = $login->getValidCount($_GET['id']);

    if ($getvalidid != 0) {

        $id = $_GET['id'];

        $getboeketnaam = mysqli_query($connect, "SELECT naam FROM boeketten WHERE idboeketten='$id'");
        $getprijs = mysqli_query($connect, "SELECT prijs FROM boeketten WHERE idboeketten='$id'");
        $getbloemsoorten = mysqli_query($connect, "SELECT bloemsoortenboeket FROM boeketten WHERE idboeketten='$id'");


        $getboeketnaamarray = mysqli_fetch_assoc($getboeketnaam);
        $getboeketnaam = $getboeketnaamarray['naam'];

        $getbloemsoortarray = mysqli_fetch_assoc($getbloemsoorten);
        $getbloemsoorten = $getbloemsoortarray['bloemsoortenboeket'];



        $getbloemsoorten = explode(",", $getbloemsoorten);

        echo "
        <div class=\"box\" style='min-width:200px'>
<a style='text-decoration: underline;float:right' href='nieuwboeket.php?id=$id&clear=1'>Aanpassen</a>
         <br><strong>Boeket</strong><br>
    <span>\"$getboeketnaam\"</span>
";

        echo "<br><hr style='margin-top:10px'>
        <span style='margin-top:2px;margin-bottom:5px;'>Bloemsoorten:</span>
        <br>
        <hr>
        ";
        $counter2 = 0;
        $counter23 = 1;
        foreach($getbloemsoorten as $x) {
            echo "#".$counter23." ".$getbloemsoorten[$counter2]."<hr>";
            $counter2++;
            $counter23++;
            }
}
else {
    echo "invalid ID";
}
    ?>
</div>
    </div>
</body>
