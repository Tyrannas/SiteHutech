<?php
    
    $req = $_POST['req'];

    //echo $req;
    include("connect.php");
    $result = mysqli_query($connect,$req);

    while($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }

    mysqli_close($connect);
?>