headEl = document.getElementById("head")
linkEl = document.createElement("link")
titleEl = document.getElementById("mainTitle")

fonts = [
    "Playwrite",
    "Oswald",
    "Smooch",
    "Lexend",
    "Raleway",
    "Zilla",
    "Badeen",
    "Bungee",
    "Parkinsans",
    "Faculty",
    "Doto",
    "Sixtyfour",
    "Afacad",
    "Amsterdam",
    "Sankofa"
]

// CHOOSE FONT AT RANDOM AND FORMAT NAMES
randomFont = Math.floor(Math.random()*fonts.length);
fLink = `/fonts/${fonts[randomFont]}.css`
fName = `f${fonts[randomFont]}`

// CREATE LINK ELEMENT
linkEl.href = fLink
linkEl.rel = "stylesheet"
headEl.appendChild(linkEl)
titleEl.classList.add(fName)