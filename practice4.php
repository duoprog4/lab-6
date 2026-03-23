<html>
<body>

<table border="1" cellpadding="5" cellspacing="0">
<?php
$number = $_POST["size"];
echo "<tr><th></th>";
for ($i = 1; $i <= $number; $i++) {
    echo "<th>$i</th>";
}
echo "</tr>";

for ($row = 1; $row <= $number; $row++) {
    echo "<tr>";
    echo "<th>$row</th>";

    for ($col = 1; $col <= $number; $col++) {
        echo "<td>" . ($row * $col) . "</td>";
    }

    echo "</tr>";
}

echo "</table>";

?>

</body>
</html>