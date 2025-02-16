const mobileTransition = 550

urls = {
    "/dist/pages/resume.html": "resumeLink",
    "/dist/index.html": "homeLink",
    "/dist/pages/work.html": "otherLink"
}

function setHeaderLinkFormat() {
    for (url in urls) {
        if (window.location.pathname === url) {
            boldedLinkEl = document.getElementById(urls[url])
            boldedLinkEl.classList.add("cwl")
            if (window.innerWidth < mobileTransition) {
                boldedLinkEl.classList.add("hidden")
            } else {
                boldedLinkEl.classList.remove("hidden")
            }
        }
    }
}

setHeaderLinkFormat()
/* RUN SCRIPT ON WINDOW RESIZE, SO IF SOMEONE RESIZES THE WINDOW THE
   LINKS COME BACK */
window.addEventListener('resize', setHeaderLinkFormat)