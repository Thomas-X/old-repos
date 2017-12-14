<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas
 * Date: 12/5/2016
 * Time: 8:20 PM
 */
session_start();
//if (isset($_SESSION['username'])) {
//    header ("Location: index.php");
//}


require_once ("lib/Main.php");


    $account = new Account();

    $account->connecttoDB("localhost", "root", "admin", "verlanglijstje");

    $message = $account->register("post", @$_POST['username'], @$_POST['password'],"logindata");



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
    <title>Register</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
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


    <?php echo "<span>$message</span>"; ?>
    <form method="post" action="register.php">
        <div class="form-group">
            <label for="username">Gebruikersnaam:</label>
            <input type="username" class="form-control" id="username" name="username">
        </div>
        <div class="form-group">
            <label for="pwd">Wachtwoord:</label>
            <input type="password" class="form-control" id="pwd" name="password">
        </div>
        <button type="submit" class="btn btn-default">Register</button>
    </form>

    <hr><div class="footer">
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