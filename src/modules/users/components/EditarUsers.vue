<template>
    <button id="openPopup">Abrir Popup</button>

    <div>
        <div id="popup" class="popup">
    <div class="popup-content">
        <span id="closePopup" class="close">&times;</span>
        <h2>Título del Popup</h2>
        <p>Este es el contenido del popup.</p>
    </div>
</div>
    </div>
</template>
<script>
export default {
    name: "EditarUsers"
    
}
</script>
<style lang="" scoped>
   body {
    font-family: Arial, sans-serif;
}

.popup {
    display: none; /* Ocultamos el popup por defecto */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

</style>