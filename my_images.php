<?php
header("Content-Type: application/json");

$jsonData = "{
               "image1":{"imageName":"bos", "imageSrc":"images/10-03-2017-1.jpg"},
               "image2":{"imageName":"water", "imageSrc":"images/10-03-2017-2.jpg"},
               "image3":{"imageName":"zee", "imageSrc":"images/10-03-2017-3.jpg"},
               "image4":{"imageName":"heide", "imageSrc":"images/10-03-2017-4.jpg"}
             }";
echo $jsonData;
?>
