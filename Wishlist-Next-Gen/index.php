<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas
 * Date: 12/5/2016
 * Time: 8:01 PM
 */
session_start();
require_once("lib/Main.php");

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
    <title>Main page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/fontawesome.css">
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


    <?php

    $account = new Account();
    $connect = $account->connecttoDB("localhost", "root", "admin", "verlanglijstje");


    if (!isset($_SESSION['username'])) {
        echo "        <div class=\"jumbotron\"><h2>Please login or register before accessing this page.</h2></div>";
    } else {

        echo "
        
        <div class=\"jumbotron\">
        <h1>Verlanglijstjes</h1>
        <p>Hier vindt je verlanglijstjes van anderen</p>
        
        </div>";

        $username = $_SESSION['username'];

        var_dump($username);

        $getid = mysqli_query($connect, "SELECT userid FROM logindata WHERE userid='$username'");


        //get data out of query
        $getidarray = mysqli_fetch_assoc($getid);
        @$getid = $getidarray['userid'];


        echo "<div class=\"jumbotron\">";


        //loop ?


        @$query2 = mysqli_query($connect, "SELECT verlanglijstid FROM verlangitems WHERE NOT userid='$getid'");
        $getRows = mysqli_num_rows($query2);


        for ($i = 0; $i < $getRows; $i++) {

            @$query = mysqli_query($connect, "SELECT verlangitemNaam FROM verlangitems WHERE NOT userid='$getid'");
            @$query3 = mysqli_query($connect, "SELECT userid FROM verlangitems WHERE NOT userid='$getid'");
            $getUser = mysqli_query($connect, "SELECT username FROM logindata WHERE NOT userid='$getid'");
            $queryarray = mysqli_fetch_all($query);
            $query3array = mysqli_fetch_all($query3);
            $query4array = mysqli_fetch_all($getUser);

            var_dump($queryarray);
            var_dump($query3array);
            var_dump($query4array);

        }


        echo "</div>";
    }
    ?>


    <hr>
    <div class="footer">
        <div class="row" style="display:flex;justify-content:center">
            <div style="padding:50px;color:#333;align-self:center;text-align:center" class="col-sm-4">
                Made with <i class="fa fa-heart fa-1x"></i> by Thomas-X
            </div>
        </div>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>


</body>
</html>

