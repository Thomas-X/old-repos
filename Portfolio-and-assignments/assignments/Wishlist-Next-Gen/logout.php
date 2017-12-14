<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thomas
 * Date: 12/5/2016
 * Time: 9:21 PM
 */
require_once ("lib/Main.php");
session_start();
$account = new Account();

$account->connecttoDB("localhost", "root", "admin", "verlanglijstje");
$account->logout("index.php");