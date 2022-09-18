<?php

$Name = $_POST["Name"];
$RSVP = filter_input(INPUT_POST, "RSVP", FILTER_VALIDATE_INT);
$AnzahlGäste = filter_input(INPUT_POST, "AnzahlGäste", FILTER_VALIDATE_INT);
$ZusageFreitag = filter_input(INPUT_POST, "ZusageFreitag", FILTER_VALIDATE_INT);
$ZusageSamstag = filter_input(INPUT_POST, "ZusageSamstag", FILTER_VALIDATE_INT);
$KuchenTorte = filter_input(INPUT_POST, "KuchenTorte", FILTER_VALIDATE_INT);
$Salat = filter_input(INPUT_POST, "Salat", FILTER_VALIDATE_INT);
$Fingerfood = filter_input(INPUT_POST, "Fingerfood", FILTER_VALIDATE_INT);
$TextSonstiges = ["TextSonstiges"];
$KeineÜbernachtung = filter_input(INPUT_POST, "KeineÜbernachtung", FILTER_VALIDATE_INT);
$ÜbernachtungFreitag = filter_input(INPUT_POST, "ÜbernachtungFreitag", FILTER_VALIDATE_INT);
$ÜbernachtungSamstag = filter_input(INPUT_POST, "ÜbernachtungSamstag", FILTER_VALIDATE_INT);
$ÜbernachtungZelt = filter_input(INPUT_POST, "ÜbernachtungZelt", FILTER_VALIDATE_INT);




var_dump($Name, $RSVP, $ZusageFreitag, $ZusageSamstag, $KuchenTorte, $Salat, $Fingerfood, $TextSonstiges, $KeineÜbernachtung, $ÜbernachtungFreitag, $ÜbernachtungSamstag, $ÜbernachtungZelt);

$host = "localhost";
$dbname = "db_rsvp_hochzeit";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);

if(mysqli_connect_errno()){
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO rsvp (Groupname, RSVP, AnzahlGäste, ZusageFreitag, ZusageSamstag, KuchenTorte, Salat, Fingerfood, TextSonstiges, KeineÜbernachtung, ÜbernachtungFreitag, ÜbernachtungSamstag, ÜbernachtungZelt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)){
    die(mysqli_error($conn));
}


mysqli_stmt_bind_param($stmt, "siiiiiiisiiii",
                        $Name,
                        $RSVP,
                        $AnzahlGäste,
                        $ZusageFreitag,
                        $ZusageSamstag,
                        $KuchenTorte,
                        $Salat,
                        $Fingerfood,
                        $TextSonstiges,
                        $KeineÜbernachtung,
                        $ÜbernachtungFreitag,
                        $ÜbernachtungSamstag,
                        $ÜbernachtungZelt);

mysqli_stmt_execute($stmt);

header("Location: /WebsiteHochzeit/ThankYou.html");
?>

