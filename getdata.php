<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Display Results</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
</head>
<body>

<?php

include 'connection.php';

$connection=connect_db($host, $id, $pwd, $db);

//variables to get the options' values
$sortOn = $_POST['SortBy'];
$sortIn = $_POST['SortIn'];
$includeAgeGrade = $_POST['IncludeAgeGrade'];

//selection of columns to retrieve
if ($includeAgeGrade==1)
{
  $selectionAG = $selection;
  $selectedArray = array("RunnerID", "EventID", "Date", "FinishTime", "Position", "CategoryID", "AgeGrade", "PB");
}
else //modify selection if AgeGrade doesn't have to be shown
{
  $selectionAG = "RunnerID, EventID, Date, FinishTime, Position, CategoryID, PB";
  $selectedArray = array("RunnerID", "EventID", "Date", "FinishTime", "Position", "CategoryID", "PB");
}
  

//execute the SQL query and return records
$result = mysql_query("SELECT $selectionAG FROM Results ORDER BY $sortOn $sortIn");

//close the connection
mysql_close($connection);

//condition to know that the query has been succeed
if (!empty($result))
{
  echo ("<h1>Success !</h1>");
}

//printing set of column headings
echo ("<table border='1' cellpadding='3'><tr>");

foreach ($selectedArray as $value)
{
  echo "<th>".$value."</th>";
}
echo "</tr><tr>";

//printing set of rows for each column
while ( $row = mysql_fetch_array($result) )
{
  foreach ($selectedArray as $column)
  {
    echo "<td>" . $row[$column] . "</td>";
  }
  echo "</tr>";
}

echo ("</table>");

?>
