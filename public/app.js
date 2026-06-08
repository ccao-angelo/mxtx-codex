// public/app.js

// 1. Translation Dictionary
const i18n = {
    en: {
        title: "🗡️ The MXTX Codex",
        subtitle: "A directory of Cultivators, Gods, and Ghost Kings.",
        loading: "Accessing heavenly records...",
        sect: "Sect",
        weapon: "Weapon",
        btn: "View Details"
    },
    vn: {
        title: "🗡️ Cẩm Nang Mặc Hương Đồng Khứu",
        subtitle: "Hồ sơ chi tiết về Giới Tu chân, Thần quan và Quỷ vương.",
        loading: "Đang truy cập thiên thư...",
        sect: "Thế lực",
        weapon: "Vũ khí",
        btn: "Xem chi tiết"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("character-grid");
    const langToggle = document.getElementById("lang-toggle");
    
    // Check if the user has a saved language preference, otherwise default to 'en'
    let currentLang = localStorage.getItem("mxtx_lang") || "en";
    langToggle.value = currentLang;

    // 2. Function to update the static UI text
    function updateStaticUI() {
        document.getElementById("page-title").innerText = i18n[currentLang].title;
        document.getElementById("page-subtitle").innerText = i18n[currentLang].subtitle;
    }

    // 3. Function to fetch and build the cards based on language
    function renderCodex() {
        grid.innerHTML = `<span aria-busy="true">${i18n[currentLang].loading}</span>`;

        fetch('/api/characters')
            .then(response => response.json())
            .then(characters => {
                grid.innerHTML = ""; // Clear loading text

                characters.forEach(char => {
                    // Look for a Vietnamese specific field (e.g., name_vn), fallback to English if it doesn't exist yet
                    const displayName = currentLang === 'vn' && char.name_vn ? char.name_vn : char.name;
                    const displaySect = currentLang === 'vn' && char.sect_vn ? char.sect_vn : char.sect;
                    const displayWeapon = currentLang === 'vn' && char.weapon_vn ? char.weapon_vn : char.weapon;

                    const card = document.createElement("article");
                    card.innerHTML = `
                        <header>
                            <h3>${displayName}</h3>
                        </header>
                        <img src="${char.image}" alt="${displayName}">
                        <p><strong>${i18n[currentLang].sect}:</strong> ${displaySect}</p>
                        <p><strong>${i18n[currentLang].weapon}:</strong> ${displayWeapon}</p>
                        <footer>
                            <a href="/character/${char.id}" role="button" class="outline">${i18n[currentLang].btn}</a>
                        </footer>
                    `;
                    grid.appendChild(card);
                });
            });
    }

    // 4. Listen for the user changing the language dropdown
    langToggle.addEventListener("change", (e) => {
        currentLang = e.target.value;
        localStorage.setItem("mxtx_lang", currentLang); // Save choice to browser
        updateStaticUI();
        renderCodex(); // Re-render the cards!
    });

    // 5. Initialize the page on first load
    updateStaticUI();
    renderCodex();
});