<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Transformadores</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
</head>
<body>
    <div class="container">
        <h1>Formulario de Transformadores</h1>
        <form id="transformadores-form">
            <div class="form-group">
                <label for="date-time">Fecha y Hora:</label>
                <input type="text" id="date-time" name="date-time" readonly>
            </div>

            <div class="form-group">
                <label for="hacienda">Hacienda:</label>
                <input type="text" id="hacienda" name="hacienda" required>
            </div>

            <div class="form-group">
                <label for="suerte">Suerte en Consigna:</label>
                <input type="text" id="suerte" name="suerte" required>
            </div>

            <div class="form-group">
                <label>Seguridad Pasiva:</label>
                <label for="seguridad-si">Sí</label>
                <input type="radio" id="seguridad-si" name="seguridad-pasiva" value="Sí" required>
                <label for="seguridad-no">No</label>
                <input type="radio" id="seguridad-no" name="seguridad-pasiva" value="No" required>
            </div>

            <div class="form-group">
                <label for="funcionando">¿Está Funcionando?:</label>
                <label for="funcionando-si">Sí</label>
                <input type="radio" id="funcionando-si"
