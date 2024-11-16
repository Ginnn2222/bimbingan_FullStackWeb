<?php
//4 variabel wajib
$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'db_kampus';

$koneksi = mysqli_connect($servername, $username, $password, $database);

if($koneksi->connect_error){
    die("Koneksi gagal ke database : ".$koneksi->connect_error);
}

// echo "Koneksi berhasil lur <br>";
// var_dump($koneksi);















?>