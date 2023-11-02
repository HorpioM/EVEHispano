document.addEventListener("DOMContentLoaded", function() {
    const rankingsList = document.getElementById("rankings-list");

    // Lista de todos los archivos de rankings que has creado (puedes automatizar la actualización de esta lista si usas alguna herramienta de compilación o script)
    const rankingsFiles = [
        "corporaciones_2023-11-02_12_56_14.html",
        // ... Agrega otros archivos aquí
    ];

    rankingsFiles.forEach(file => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = file;
        link.textContent = file.split(".")[0]; // Esto mostrará "corporaciones_2023-11-02_12_56_14" como texto del enlace
        listItem.appendChild(link);
        rankingsList.appendChild(listItem);
    });
});