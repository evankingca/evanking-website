const headEl = document.getElementById("head")
const linkEl = document.createElement("link")
const titleEl = document.getElementById("mainTitle")

const fonts = [
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
const randomFont = Math.floor(Math.random()*fonts.length);
const fLink = `fonts/${fonts[randomFont]}.css`
const fName = `f${fonts[randomFont]}`

// CREATE LINK ELEMENT
linkEl.href = fLink
linkEl.rel = "stylesheet"
headEl.appendChild(linkEl)
titleEl.classList.add(fName)