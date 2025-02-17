
document.addEventListener("DOMContentLoaded", function () {
const reposContainer = document.getElementById("repos-container");

fetch("https://api.github.com/users/LE566/repos") // Cambia 'LE566' por tu usuario de GitHub
.then(response => response.json())
.then(repos => {
    repos.forEach(repo => {
    const repoCard = document.createElement("div");
    repoCard.classList.add("servicio", "proyecto-card", "sombra");

    repoCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sin descripción disponible"}</p>
        <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
    `;

    reposContainer.appendChild(repoCard);
    });
})
.catch(error => console.error("Error al obtener los repos:", error));
});

function openModal(title, imgSrc, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalImage").src = imgSrc;
    document.getElementById("modalDescription").innerText = description;
    
    let modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    modal.show();
}


