<?php
$file = "archivo.txt";
header("Content-Type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"" . basename($file) . "\"");
header("Content-Length: " . filesize($file));

// Leer y enviar el contenido del archivo
readfile($file);
exit;
?>
    