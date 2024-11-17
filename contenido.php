<?php
// Cambiar el tipo de contenido a JSON
header("Content-Type: application/json");

$data = [
    "status" => "success",
    "message" => "Encabezado modificado correctamente"
];

// Convertir a JSON y mostrar
echo json_encode($data);
?>
    