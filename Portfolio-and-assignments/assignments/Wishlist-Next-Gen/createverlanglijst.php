<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas X
 * Date: 12/6/2016
 * Time: 9:21 AM
 */
session_start();
require_once("lib/Main.php");

$account = new Account();
$connect = $account->connecttoDB("localhost", "root", "admin", "verlanglijstje");

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}
if (isset($_POST['remove'])) {

    $getUser = $_SESSION['username'];

    $userid = mysqli_query($connect, "SELECT userid FROM logindata WHERE username='$getUser'");

    $useridarray = mysqli_fetch_assoc($userid);
    $userid = $useridarray['userid'];

    $query = mysqli_query($connect, "SELECT verlanglijstid FROM verlangitems WHERE userid='$userid'");


    $getRows = mysqli_affected_rows($connect);

    $query = mysqli_query($connect, "DELETE FROM verlangitems WHERE userid='$userid'");

}


if (isset($_POST['submit'])) {

    $getUser = $_SESSION['username'];

    $userid = mysqli_query($connect, "SELECT userid FROM logindata WHERE username='$getUser'");

    $useridarray = mysqli_fetch_assoc($userid);
    $userid = $useridarray['userid'];

    $query = mysqli_query($connect, "SELECT verlanglijstid FROM verlangitems WHERE userid='$userid'");


    $getRows = mysqli_affected_rows($connect);

    $nodupes = false;

    if ($getRows >= 1) {
        $nodupes = true;
    }


    if ($nodupes == false) {

        $counter = 0;

        var_dump($_POST);

        $_SESSION['tmp'] = array();

        for ($i = 0; $i < (count($_POST) - 1); $i++) {

            $dynamicname = "item" . $counter;

            if ($_POST[$dynamicname] != null || $_POST[$dynamicname] != '') {

                array_push($_SESSION['tmp'], $_POST[$dynamicname]);

                $counter++;
            } else {
                $counter++;
            }

        }

        $counter = 0;


        $verlanglijstid = mysqli_query($connect, "SELECT verlanglijstid FROM verlangitems ORDER BY verlanglijstid DESC LIMIT 1");


        $verlanglijstidarray = mysqli_fetch_assoc($verlanglijstid);
        $verlanglijstid = $verlanglijstidarray['verlanglijstid'];
        $verlanglijstid++;

        foreach ($_SESSION['tmp'] as $x) {


            $verlangitem = $_SESSION['tmp'][$counter];

            $gehaald = 0;


            var_dump($verlanglijstid);


            $getUser = $_SESSION['username'];

            $userid = mysqli_query($connect, "SELECT userid FROM logindata WHERE username='$getUser'");

            $useridarray = mysqli_fetch_assoc($userid);
            $userid = $useridarray['userid'];

            $query = mysqli_query($connect, "INSERT INTO verlangitems (verlangitemNaam, verlangitemGehaald, verlanglijstid, userid) VALUES ('$verlangitem', '$gehaald', '$verlanglijstid', '$userid')");
            $counter++;
        }


        header("Location: index.php");

    }
}


?>
<!DOCTYPE html>
<html lang="en">
<!--
 ________   ________   ________   _________   ________   _________   ________   ________   ________        ________   ___  ___   ________   ___  __     ________
|\   __  \ |\   __  \ |\   __  \ |\___   ___\|\   ____\ |\___   ___\|\   __  \ |\   __  \ |\   __  \      |\   ____\ |\  \|\  \ |\   ____\ |\  \|\  \  |\   ____\
\ \  \|\ /_\ \  \|\  \\ \  \|\  \\|___ \  \_|\ \  \___|_\|___ \  \_|\ \  \|\  \\ \  \|\  \\ \  \|\  \     \ \  \___|_\ \  \\\  \\ \  \___| \ \  \/  /|_\ \  \___|_
 \ \   __  \\ \  \\\  \\ \  \\\  \    \ \  \  \ \_____  \    \ \  \  \ \   _  _\\ \   __  \\ \   ____\     \ \_____  \\ \  \\\  \\ \  \     \ \   ___  \\ \_____  \
  \ \  \|\  \\ \  \\\  \\ \  \\\  \    \ \  \  \|____|\  \    \ \  \  \ \  \\  \|\ \  \ \  \\ \  \___|      \|____|\  \\ \  \\\  \\ \  \____ \ \  \\ \  \\|____|\  \
   \ \_______\\ \_______\\ \_______\    \ \__\   ____\_\  \    \ \__\  \ \__\\ _\ \ \__\ \__\\ \__\           ____\_\  \\ \_______\\ \_______\\ \__\\ \__\ ____\_\  \
    \|_______| \|_______| \|_______|     \|__|  |\_________\    \|__|   \|__|\|__| \|__|\|__| \|__|          |\_________\\|_______| \|_______| \|__| \|__||\_________\
                                                \|_________|                                                 \|_________|                                 \|_________|
                                                                                                                                                                      -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Verlanglijstje maken</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/fontawesome.css">
    <link rel="stylesheet" href="css/createverlanglijst.css">
</head>
<body>

<div class="container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Verlanglijst v2</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="index.php">Home</a></li>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <?php
                    if (!isset($_SESSION['username'])) {
                        echo "<li><a href=\"login.php\">Login</a></li>";
                    }
                    if (!isset($_SESSION['username'])) {
                        echo "<li><a href=\"register.php\">Register</a></li>";
                    }

                    $user = @$_SESSION['username'];
                    if (isset($_SESSION['username'])) {
                        echo "<li><a href=''>Hello, $user!</a></li>";
                    }
                    if (isset($_SESSION['username'])) {
                        echo "<li><a href=\"logout.php\">Logout</a></li>";
                    }
                    if (isset($_SESSION['username'])) {
                        echo "<li><a href=\"createverlanglijst.php\">Verlanglijstje maken</a></li>";
                    }
                    ?>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>

    <!--stuff start-->


    <div id="jumbotronID" class="jumbotron">
        <?php


        $getUser = $_SESSION['username'];

        $userid = mysqli_query($connect, "SELECT userid FROM logindata WHERE username='$getUser'");

        $useridarray = mysqli_fetch_assoc($userid);
        $userid = $useridarray['userid'];

        $query = mysqli_query($connect, "SELECT verlanglijstid FROM verlangitems WHERE userid='$userid'");

        $getRows = mysqli_affected_rows($connect);



        $nodupes = false;

        if ($getRows >= 1) {
            $nodupes = true;
        }



        if ($nodupes == true) {
            echo "<h1>Je hebt al een verlanglijstje!</h1>";
            echo "<form method=\"post\">

                    <button type='submit' name='remove'>Wil je je huidige verwijderen?</button>

                  </form></div>";
        }
        else {
            echo "<h1>Maak hier je verlanglijstje</h1></div>";



            echo "<div class=\"jumbotron\">
        <form id=\"verlanglijst\" method=\"post\" action=\"createverlanglijst.php\"><br>

            <div id=\"inputs\">
                <h3>Om meer dan 1 'verlangitems' toe te voegen klik op \"add item\".</h3><br><br>
                <input type=\"text\" name=\"item0\"><br>
            </div>
            <button id=\"submitbutton\" type=\"submit\" name=\"submit\">Voeg verlanglijstje toe</button>
            <button type=\"button\" onclick=\"addInput()\">Add item</button>

        </form>
    </div>";
        }

        ?>





    <!--    stuff end-->
    <hr>
    <div class="footer">
        <div class="row" style="display:flex;justify-content:center">
            <div style="padding:50px;color:#333;align-self:center;text-align:center" class="col-sm-4">
                Made with <i class="fa fa-heart fa-1x"></i> by Thomas-X
            </div>
        </div>
    </div>
</div>

<script src="js/js.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
