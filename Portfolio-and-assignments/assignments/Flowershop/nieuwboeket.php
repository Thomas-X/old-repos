<?php
session_start();

require_once("lib/cart.php");

$login = new Login();
$connect = $login->connecttoDB("localhost", "root", "admin", "flowershop");



if (isset($_GET['clear'])) {
    $_SESSION['customboeket'] = array();
    $_SESSION['cart'] = array();
    $id = $_GET['id'];
    header("Location: nieuwboeket.php?id=$id");
}



if (isset($_GET['save']) == 1) {

    $iarray = array();
    foreach ($_SESSION['cart'] as $y) {
        $i = mysqli_real_escape_string($connect, $y);
        array_push($iarray, $i);
    }

    //cleanup
    $_SESSION['cart'] = array();

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
        <link rel="stylesheet" href="css/nieuwboeket.css">
    <body style="margin-top:75px;background-image:url('https://placekitten.com/4096/2048')">

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

@$getvalidid = $login->getValidCount($_GET['id']);

if ($getvalidid != 0) {


    //TODO ADD DAT JE NOG GEWOON NORMAAL EEN NIEUW IDEE KAN MAKEN


    if (isset($_GET['id'])) {

        $id = $_GET['id'];

        $getboeketnaam = mysqli_query($connect, "SELECT naam FROM boeketten WHERE idboeketten='$id'");
        $getprijs = mysqli_query($connect, "SELECT prijs FROM boeketten WHERE idboeketten='$id'");
        $getbloemsoorten = mysqli_query($connect, "SELECT bloemsoortenboeket FROM boeketten WHERE idboeketten='$id'");


        $getboeketnaamarray = mysqli_fetch_assoc($getboeketnaam);
        $getboeketnaam = $getboeketnaamarray['naam'];

        $getbloemsoortarray = mysqli_fetch_assoc($getbloemsoorten);
        $getbloemsoorten = $getbloemsoortarray['bloemsoortenboeket'];

        $getprijsarray = mysqli_fetch_assoc($getprijs);
        $getprijs = $getprijsarray['prijs'];


        $getbloemsoorten = explode(",", $getbloemsoorten);


        $mergedarray = array_merge($_SESSION['cart'], $_SESSION['customboeket']);


        if (isset($_POST['savecustomboeket'])) {
            $finalbloemsoorten = implode(",", $mergedarray);
            //sql insertion
            $getprijs = @$_POST['customprijs'];
            $getboeketnaam = @$_POST['customnaam'];
            mysqli_query($connect, "INSERT INTO boeketten (naam, prijs, bloemsoortenboeket) VALUES ('$getboeketnaam', '$getprijs', '$finalbloemsoorten')");


            //cleanup

            $_SESSION['customboeket'] = array();
            $_SESSION['cart'] = array();

            header("Location nieuwboeket.php?id=$id&clear=1");
        }








        echo "
        
        <div id='box2' class=\"box\" style='min-width:200px;margin-bottom:20px;max-height:295px'>
        Pas huidig boeket aan:
        <br><br>
        <form method='post'>
        <label for=''>Naam bloem:</label><br>
        <input placeholder='Bloem naam..' name='bloeminput' type='text'><br><br>
        <label for=''>Aantal bloemen</label><br>
        <input placeholder='Aantal..' name='aantal' type='number'><br><br>
        <button type='submit' name='submit'>Voeg toe..</button>
        </form>
</div>";


        echo "
        <div class=\"box\" style='min-width:200px;margin-bottom:20px'>
<a style='text-decoration: underline;float:right' href=''></a>
         <strong>Boeket</strong><br>
    <span>\"$getboeketnaam\"</span>
";

        echo "<br><hr style='margin-top:10px'>
        <strong><span style='margin-top:2px;margin-bottom:5px;'>Bloemsoorten:</span></strong>
        <br>
        <hr>
        ";
        $counter2 = 0;
        $counter23 = 1;

//        if (!isset($_SESSION['cart'])) {

        if (isset($_GET['tmp'])) {
            $_SESSION['cart'] = array();
            $id = $_GET['id'];
            header("Location: nieuwboeket.php?id=$id");
//        }
        }

        $counter2213 = 0;
        foreach ($getbloemsoorten as $x) {
            array_push($_SESSION['cart'], $getbloemsoorten[$counter2213]);
            $counter2213++;
        }
        for ($counter = 0; $counter < @$_POST['aantal']; $counter++) {
            array_push($_SESSION['cart'], $_POST['bloeminput']);
        }
        $countarray = array_count_values($_SESSION['cart']);
//        $arraykeys2 = array_keys($countarray);

        $_SESSION['cart'] = array_unique($_SESSION['cart']);
        $_SESSION['cart'] = array_values($_SESSION['cart']);
        $_SESSION['cart'] = array_filter($_SESSION['cart']);


        foreach ($_SESSION['cart'] as $x) {

            $enterednum = $countarray[$_SESSION['cart'][$counter2]];

            echo "<span class='$counter2'>" . "#" . $counter23 . " " . $_SESSION['cart'][$counter2] . "<br>";
            echo "Aantal: " . $enterednum . "</span>";
            echo "<hr>";
            $counter2++;
            $counter23++;
        }



        if (isset($_POST['savecustomboeket'])) {

            echo "Success!!";
        }

        echo "<form method='post'>
                <input type='text' placeholder='Naam van het boeket' name='customnaam'>
                <input type='number' placeholder='Prijs van boeket' name='customprijs'>
                <button value='savecustomboeket' name='savecustomboeket' type='submit'>Voeg boeket toe</button>
              </form> ";


    } else {
    }



} //TODO fix custom cart reset and cart reset

else {
    echo "<div class=\"box\" style='min-width:200px;margin-bottom:20px'>

        
        <h1>Nieuw Boeket</h1>
            <form method='post' action='nieuwboeket.php'>
            <br>
            <label>Naam boeket</label><br>
            <input type='text' name='customname22' placeholder='Naam boeket..'>
            <br>
            <label>Prijs</label><br>
            <input type='number' name='customprijs22'>
            <br>
            <label>Bloemsoorten</label><br>
            <input type='text' name='custombloemsoorten22' placeholder='Splits door een komma'><br><br>
            <button type='submit' name='submit'>Voeg toe</button>
            </form>
</div>";

    if (isset($_POST['custombloemsoorten22'])) {

        $getboeketnaam = $_POST['customname22'];
        $getprijs = $_POST['customprijs22'];
        $finalbloemsoorten = $_POST['custombloemsoorten22'];
        mysqli_query($connect, "INSERT INTO boeketten (naam, prijs, bloemsoortenboeket) VALUES ('$getboeketnaam', '$getprijs', '$finalbloemsoorten')");
        echo "<h1 style='font-size:50px;padding:10px;'>Boeket succesvol toegevoegd!</h1>
        <a href='index.php' style='font-size:20px;text-decoration:underline'>Terug naar home..</a> ";

    }



}

?>