<?php
class Login {

    private $username;
    private $password;
    private $connect;

    /**
     * @param $host
     * @param $usernameDB
     * @param $passwordDB
     * @param $database
     * @return mysqli
     */
    function connecttoDB($host, $usernameDB, $passwordDB, $database) {
        $this->connect = new mysqli($host,$usernameDB,$passwordDB,$database);
        return $this->connect;
    }


    /**
     *
     */
    function escape() {
        $this->username = mysqli_real_escape_string($this->username);
        $this->password = mysqli_real_escape_string($this->password);
    }


    /**
     * @param $getvalidID
     * @return int
     * @internal param $getvalid
     * @internal param $username
     * @internal param $password
     * @required ESCAPE CHARACTERS IN PHP CODE BEFORE INSERTING
     */
    function getValidCount($getvalidID) {
        $getvalidID2 = mysqli_query($this->connect, "SELECT * FROM boeketten WHERE idboeketten='$getvalidID'");
        $countvalidamount = mysqli_num_rows($getvalidID2);
        return $countvalidamount;
    }

}