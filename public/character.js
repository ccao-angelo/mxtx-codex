// public/character.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Extract the character ID from the URL
    // e.g., if the URL is /character/hua-cheng, this grabs "hua-cheng"
    const pathParts = window.location.pathname.split('/');
    const characterId = pathParts[pathParts.length - 1];

    const detailsContainer = document.getElementById("character-details");

    // 2. Fetch only that specific character from API
    fetch(`/api/characters/${characterId}`)
        .then(response => {
            if (!response.ok) throw new Error("Character not found");
            return response.json();
        })
        .then(char => {
            // 3. Turn off the loading animation
            detailsContainer.removeAttribute("aria-busy");
            
            // 4. Build the detailed profile HTML
            detailsContainer.innerHTML = `
                <header>
                    <hgroup>
                        <h1>${char.name}</h1>
                        <h2>${char.courtesyName ? `Courtesy Name: ${char.courtesyName}` : ''}</h2>
                    </hgroup>
                </header>
                <div class="grid">
                    <div>
                        <img src="${char.image}" alt="${char.name}" style="border-radius: 8px; width: 100%;">
                    </div>
                    <div>
                        <p><strong>Novel:</strong> ${char.novel}</p>
                        <p><strong>Sect/Realm:</strong> ${char.sect}</p>
                        <p><strong>Signature Weapon:</strong> ${char.weapon}</p>
                        <hr>
                        <p>${char.description}</p>
                    </div>
                </div>
            `;
            
            // 5. Update the browser tab title dynamically
            document.title = `${char.name} | MXTX Codex`;
        })
        .catch(error => {
            console.error(error);
            detailsContainer.removeAttribute("aria-busy");
            detailsContainer.innerHTML = `
                <h2>Cultivation Deviation!</h2>
                <p>The heavenly records could not locate this character.</p>
            `;
        });
});