<?php


$arr = [4,5,6,6,5,4,6,7,8];

echo "ini cetak per index : " .$arr[0];
echo "<br><br>";
// for
for($i=0;$i<=8;$i++){
    echo "ini index ke : " . $i . " yang nilainya : " .$arr[$i];
    echo "<br>";

}
echo "<br><br>";
// while
$awal = 0;
while($awal < 9){
    echo "ini while array yang nilainya : " . $arr[$awal];
    echo "<br>";
    $awal++;
}

echo "<br><br>";

$awal1=0;
do{
    echo "ini adalah do while ke - " . $awal1. " yang nilainya : " .$arr[$awal1];
    echo "<br>";
    $awal1++;
}
while($awal1<9);












?>