<?php
class Login2 {
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
     * @param $username
     * @param $password
     * @required ESCAPE CHARACTERS IN PHP CODE BEFORE INSERTING
     */
    function insertintoDB($username, $password) {

    }
}