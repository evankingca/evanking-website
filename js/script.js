const mobileTransition = 550

// ARRAY OF DOMAINS TO HIGHLIGHT LINKS FOR. NEEDED FOR
// RELATIVE PATHS WHEN RUNNING ON DEV SERVER
domains = [
    "evanking.ca",
    "localhost:8080"
]

function setHeaderLinkFormat() {
    let header = document.getElementById("linksList")
    
    for (listItem of header.children) {
        let link = listItem.firstChild
        let url = new URL(link.href)
        let longLocation = window.location.pathname
        let shortLocation = longLocation.replace(".html", "")
        // GET ORIGIN DOMAIN, REMOVING THE PROTOCOL NAME
        let originDomain = url.origin.substring(url.origin.lastIndexOf("/") + 1)

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