<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Store Results</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
</head>
<body>

<?php

include 'connection.php';

$connection=connect_db($host, $id, $pwd, $db);

//variables to get the values from the client form
$runnerId = $_POST['RunnerId'];
$eventId = $_POST['EventId'];
$date = $_POST['Date'];
$finishTime = $_POST['FinishTime'];
$position = $_POST['Position'];
$categoryId = $_POST['CategoryId'];
$ageGrade = $_POST['AgeGrade'];
$pB = $_POST['PB'];

//string query to insert a new row in the database
$myQuery = "INSERT INTO Results ($selection) VALUES ($runnerId, $eventId, '$date', '$finishTime', $position, $categoryId, $ageGrade, $pB)"
 or die (mysql_error());

//executes my query and prints out a success message 
$answer = mysql_query( $myQuery, $connection);

//close the connection
mysql_close($connection);

//condition to know that the query has been succeed
if ($answer = 1)
{
  echo ("<h1>Success ! Saving data:</h1>");
}

//what data has been inserted into the table
echo "<p>RunnerID = ".$runnerId."</p>";
echo "<p>EventID = ".$eventId."</p>";
echo "<p>Date = ".$date."</p>";
echo "<p>FinishTime = ".$finishTime."</p>";
echo "<p>Position = ".$position."</p>";
echo "<p>CategoryID = ".$categoryId."</p>";
echo "<p>AgeGrade = ".$ageGrade."</p>";
echo "<p>PB = ".$pB."</p>";

?>
