
<?php
//fungsi tanpa parameter
function aturan(){
    echo "aturan selama bimbingan it <br>";
    echo "1.jangan terlambat <br>";
    echo "2.wajib membawa laptop <br>";
    echo "3.mandi <br>";

    return;
}

aturan();

//fungsi pakai parameter
function balok($panjang,$lebar,$tinggi){
    $hasil = $panjang * $lebar * $tinggi;
    return $hasil;
}

echo "hasil balok : ".balok(5,2,4,) . "<br>";
echo "hasil balok : ".balok(10000,20000,40000,) . "<br>";







?>