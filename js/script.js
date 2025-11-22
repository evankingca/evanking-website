const mobileTransition = 550

// ARRAY OF DOMAINS TO HIGHLIGHT LINKS FOR. NEEDED FOR
// RELATIVE PATHS WHEN RUNNING ON DEV SERVER
const domains = [
    "evanking.ca",
    "localhost:8080"
]

function setHeaderLinkFormat() {
    const header = document.getElementById("linksList")
    
    for (let listItem of header.children) {
        const link = listItem.firstChild
        const url = new URL(link.href)
        const longLocation = window.location.pathname
        const shortLocation = longLocation.replace(".html", "")
        // GET ORIGIN DOMAIN, REMOVING THE PROTOCOL NAME
        const originDomain = url.origin.substring(url.origin.lastIndexOf("/") + 1)

        if (domains.includes(originDomain) && (url.pathname === longLocation || url.pathname === shortLocation)) {
            link.classList.add("cwl")
            if (window.innerWidth < mobileTransition) {
                link.classList.add("hidden")
            } else {
                link.classList.remove("hidden")
            }
        }
    }
}

setHeaderLinkFormat()
/* RUN SCRIPT ON WINDOW RESIZE, SO IF SOMEONE RESIZES THE WINDOW THE
   LINKS COME BACK */
window.addEventListener('resize', setHeaderLinkFormat)