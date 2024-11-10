<?php

// echo "hello world";

$a = 1;
$b = 4;

$a = $b;
$b = $a+1;

echo $a . "<br>";
echo $b . "<br>";

//loop
// for
for($i=0;$i<=10;$i++){
    echo "ini angka : " . $i . "<br>";
}
echo "<br><br>";
// while
$awal = 1;
while($awal <=5){
    echo "ini while ke :".$awal."<br>";
    $awal++;
}
echo "<br><br>";
// do while
$awal2=1;
do{
    echo "ini do while ke : ".$awal2."<br>";
    $awal2++;
}
while($awal2<=5);

$array = [10,25,33,4,5];
for($i=0;$i<4;$i++){
    echo "Ini array ke- ".$array[$i]."<br>";
}




?>