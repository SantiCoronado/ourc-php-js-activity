<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Connection function</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
</head>
<body>

<?php

/**
  Function: connect to a database.
  $host = hostname to connect to eg, 'localhost'
  $id = username identity, eg 'ta589'
  $pwd = user password, eg 'twiggy9'
  $db = database to use, e.g. 'ta589_db'
  Returns the database connection.
  **/
function connect_db($host, $id, $pwd, $db)
{
  $connection = @mysql_connect($host, $id, $pwd)
      or die('connection problem:' . mysql_error());
  mysql_select_db($db)
      or die('db selection problem: ' . mysql_error());
  return $connection;
}

//variables to set the connection arguments
$host = "tt284.open.ac.uk";
$id = "scm434";
$pwd = "zZRTuj2B";
$db = "scm434_db";

//common selection of columns on the table for the other php's
$selection = "RunnerID, EventID, Date, FinishTime, Position, CategoryID, AgeGrade, PB";


?>
