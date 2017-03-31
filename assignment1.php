<?php
$name=$_POST['name'];
$email=$_POST['email'];
echo '<h1>Your File has been added to contacts.txt</h1>';
$myfile = fopen("contacts.txt", "w") or die("Unable to open file!");
$txt = $name . "\n";
fwrite($myfile, $txt);
$txt = $email;
fwrite($myfile, $txt);
fclose($myfile);
?>
