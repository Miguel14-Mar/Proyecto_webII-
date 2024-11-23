const apiUrl = 'http://localhost:3000'; // Cambia esto si tu API está en otro puerto o dominio

// Función para mostrar los héroes
function showHeroes() {
    fetch(`${apiUrl}/heroes`)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = '<h2>Héroes de DC</h2>';
            
            data.forEach(hero => {
                console.log(hero.imagen);  // Verifica que la URL de la imagen esté correcta

                const heroCard = document.createElement('div');
                heroCard.className = 'hero-card';

                // Formatear la fecha de primera aparición
                const fechaprimeraaparicion  = new Date(hero.primera_aparicion);
                const formatoFecha = fechaprimeraaparicion.toLocaleDateString(); // Ajusta el formato según prefieras

                heroCard.innerHTML = `
                    <img src="${hero.imagen}" alt="${hero.alias}" class="hero-image">    
                    <h3>${hero.alias}</h3>
                    <p><strong>Nombre Real:</strong> ${hero.nombre}</p>
                    <p><strong>Primera Aparición:</strong> ${formatoFecha}</p>
                    <p><strong>Estado:</strong> ${hero.estado}</p>
                    <p><strong>Descripción:</strong> ${hero.descripcion}</p>
                    
                `;

                content.appendChild(heroCard);
            });
        })
        .catch(error => console.error('Error:', error));
}
// Función para mostrar los equipos
function showTeams() {
    fetch(`${apiUrl}/teams`)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = '<h2>Equipos de DC</h2>';

            data.forEach(team => {
                console.log(team.imagen); // Verifica que la URL de la imagen esté correcta

                const teamCard = document.createElement('div');
                teamCard.className = 'team-card';

                teamCard.innerHTML = `
                    <img src="${team.imagen}" alt="${team.nombre}" class="team-image"> 
                    <h3>${team.nombre}</h3>
                    <p>Descripción: ${team.descripcion}</p>
                `;
                content.appendChild(teamCard);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Función para mostrar los poderes
function showPowers() {
    fetch(`${apiUrl}/powers`)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            content.innerHTML = '<h2>Poderes de DC</h2>';
            
            data.forEach(power => {
                const powerCard = document.createElement('div');
                powerCard.className = 'power-card';
                powerCard.innerHTML = `
                    <h3>${power.nombre}</h3>
                    <p>Descripción: ${power.caracteristicas}</p>
                `;
                content.appendChild(powerCard);
            });
        })
        .catch(error => console.error('Error:', error));
}
