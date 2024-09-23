<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Maquinaria Amarilla</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <img src="logo.png" alt="Logo" class="logo">
    </header>
    <div class="form-container">
        <h1>Formulario de Maquinaria Amarilla</h1>
        <form id="machinery-form">
            <div class="form-group">
                <label for="machinery-id">ID de Maquinaria</label>
                <input type="text" id="machinery-id" name="machinery-id" required>
            </div>
            <div class="form-group">
                <label for="machinery-name">Nombre de Maquinaria</label>
                <input type="text" id="machinery-name" name="machinery-name" required>
            </div>
            <div class="form-group">
                <label for="purchase-date">Fecha de Compra</label>
                <input type="date" id="purchase-date" name="purchase-date" required>
            </div>
            <div class="form-group">
                <label for="machinery-type">Tipo de Maquinaria</label>
                <select id="machinery-type" name="machinery-type" required>
                    <option value="">Seleccione un tipo</option>
                    <option value="excavator">Excavadora</option>
                    <option value="bulldozer">Bulldozer</option>
                    <option value="crane">Grúa</option>
                    <!-- Añade más opciones según sea necesario -->
                </select>
            </div>
            <div class="form-group">
                <label for="remarks">Observaciones</label>
                <textarea id="remarks" name="remarks"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
