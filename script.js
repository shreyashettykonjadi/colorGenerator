const colorInput = document.getElementById("seedColor");
const modeSelect = document.getElementById("mode");
const button = document.getElementById("getScheme");
const colorsDiv = document.getElementById("colors");

button.addEventListener("click", getColorScheme);

function getColorScheme() {
    const hex = colorInput.value.slice(1); 
    const mode = modeSelect.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            displayColors(data.colors);
        });
}

function displayColors(colors) {
    colorsDiv.innerHTML = "";

    colors.forEach(color => {
        const card = document.createElement("div");
        card.className = "color-card";
        card.style.backgroundColor = color.hex.value;

        const hexText = document.createElement("div");
        hexText.className = "hex";
        hexText.textContent = color.hex.value;

        
        hexText.addEventListener("click", () => {
            navigator.clipboard.writeText(color.hex.value);
            alert(`Copied ${color.hex.value}`);
        });

        card.appendChild(hexText);
        colorsDiv.appendChild(card);
    });
}
