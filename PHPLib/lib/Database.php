<?php

class Database
{
    public $connect;
    public $database;
    public $affectedRows;

    /**
     * @param $host
     * @param $usernameDB
     * @param $passwordDB
     * @param $database
     * @return mysqli
     */
    public function connecttoDB($host, $usernameDB, $passwordDB, $database)
    {
        $this->connect = new mysqli($host, $usernameDB, $passwordDB, $database);
        $this->database = $database;

        return $this->connect;

    }

    /**
     * @return mixed
     */
    public function getConnect()
    {
        return $this->connect;
    }

}

class Account extends Database
{

    protected $registerusername;
    protected $registerpassword;

    protected $loginusername;
    protected $loginpassword;

    protected $message;

    /**
     * @param $method welke methode de form gebruikt, post is de enige mogelijk want de rest is onveilig, zoals GET
     * @param $username
     * @param $password
     * @param $logindatatable welke logindata table van sql
     * @return string returned $message, dus "Please login" of Invalid credentials etc
     * @internal param welke $messageclass class de message zou hebben, invalid credentials etc
     * @required dat je column in je logindata tabel de naam 'username' en 'password' hebben, zonder apostrof
     * @required session_start();
     */
    public function register($method, $username, $password, $logindatatable)
    {

        if ($method == "post") {

            $username = htmlspecialchars($username);
            $password = htmlspecialchars($password);


            $username = mysqli_real_escape_string($this->connect, $username);
            $password = mysqli_real_escape_string($this->connect, $password);

            $password = md5($password);

            mysqli_query($this->connect, "SELECT * from $logindatatable WHERE username=\"$username\"");
            $getRows = mysqli_affected_rows($this->connect);
            if ($getRows >= 1) {
                $message = "Username already exists";
            } else {
                mysqli_query($this->connect, "INSERT INTO $logindatatable (username, password) VALUES ('$username','$password')");
                $message = "Registered!";
            }
        } else {
            $message = "Fatal error, check form method";
        }
        if (!$username) {
            $message = "Please register.";
        }
        return $message;
    }

    /**
     *
     * @required session_start();
     * @param $method
     * @param $username
     * @param $password
     * @param $logindatatable
     * @param $redirectafterLogin
     * @return string
     * @internal param $ $
     * @required session_start();
     */
    public function login($method, $username, $password, $logindatatable, $redirectafterLogin)
    {

        $message = "Please login.";

        if ($method == "post") {

            //escape stuff part
            $username = htmlspecialchars($username);
            $password = htmlspecialchars($password);


            $username = mysqli_real_escape_string($this->connect, $username);
            $password = mysqli_real_escape_string($this->connect, $password);

            $password = md5($password);


            //login part
            $validentry = false; //boolean

            mysqli_query($this->connect, "SELECT * FROM $logindatatable WHERE username='$username' AND password='$password'");

            $getRows = mysqli_affected_rows($this->connect);

            if ($getRows >= 1) {
                $validentry = true;
            }
            if ($validentry === true) {
                $_SESSION['username'] = $username;
                $message = "Logging in..";
                header("Location: $redirectafterLogin");
            }
        } else {
            $message = "Fatal error";
        }

        return $message;
    }

    /**
     * @param $redirect
     */
    public function logout($redirect)
    {

        echo "You are being redirected..";

        session_start();
        session_destroy();

        unset($_SESSION['username']);
        unset($_SESSION['cart']);
        unset($_SESSION);

        header("Location: $redirect");
    }
}

class Addtocart extends Database
{

    /**
     * Addtocart constructor
     * @required use POST not GET method.
     * @param $itemtable
     * @return Addtocart
     * @required POST id name should be $_POST['id']
     * @required session_start();
     * @required connect function to be declared above this function
     */
    function additemtocart($itemtable)
    {


        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = array();
        }

        if (isset($_POST['id'])) {
            $enteredid = $_POST['id'];
            $query = mysqli_query($this->connect, "SELECT * FROM $itemtable WHERE id='$enteredid'");
            $countvalidrows = mysqli_num_rows($query);

            if ($countvalidrows != 0) {
                $arraypush = array_push($_SESSION['cart'], $enteredid);

                if ($arraypush) {
                    return true;
                } else {
                    return "Adding to cart failed";
                }
            }
        }
    }


    /**
     * @param $itemtable
     * @return string
     * @required $_SESSION['cart'], $_POST['id'], not any different names.
     * @required session_start();
     */
    function removefromcart($itemtable)
    {


        $enteredremove = $_POST['remove'];
        $getvalidremove = mysqli_query($this->connect, "SELECT * FROM $itemtable WHERE id='$enteredremove'");
        $countvalidremoverows = mysqli_num_rows($getvalidremove);

        if ($countvalidremoverows != 0) {
            array_unique($_SESSION['cart']);
            array_values($_SESSION['cart']);
            $arraykeys = array_keys($_SESSION['cart'], $enteredremove);

            $counter2 = 0;

            foreach ($arraykeys as $counter2) {
                unset($_SESSION['cart'][$counter2]);
                $counter2++;
            }
        } else {
            return "IOException";
        }
    }


    /**
     * @internal param $addtoDB
     * @internal param $customprice
     * @internal param $customname
     * @internal param $customitems
     * @internal if you want it to be added to the database give a string as parameter with "y" or "n"
     * @required $_POST['customprice']
     * @required $_POST['customname']
     * @required $_POST['customtypes']
     * @param $customitemtable
     * @param $custompricecolumn
     * @param $customnamecolumn
     * @param $customtypescolumn
     * @return string
     */
    function addcustomitem($customitemtable, $custompricecolumn, $customnamecolumn, $customtypescolumn)
    {
        $_SESSION['customitem'] = array();

        $customprice = $_POST['customprice'];
        $customname = $_POST['customname'];
        $customtypes = $_POST['customtypes'];

        //escape stuff part
        $customprice = htmlspecialchars($customprice);
        $customname = htmlspecialchars($customname);
        $customtypes = htmlspecialchars($customtypes);


        $customprice = mysqli_real_escape_string($this->connect, $customprice);
        $customname = mysqli_real_escape_string($this->connect, $customname);
        $customtypes = mysqli_real_escape_string($this->connect, $customtypes);


        $query = mysqli_query($this->connect, "INSERT INTO $customitemtable ($custompricecolumn, $customnamecolumn, $customtypescolumn) VALUES ('$customprice', '$customname', '$customtypes')");

        if ($query) {
            return "success";
        }
    }
}
