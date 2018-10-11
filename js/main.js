function init() {
    let main = document.getElementById("main");
    const r = new Router(
        {
            about: new Component('views/about.html', main),
            portfolio: new Component('views/portfolio.html', main),
            contact: new Component('views/contact.html', main),
            "404": new Component('views/404.html', main),
            diagrams: new Component('views/web-335/smith-diagrams.html', main),
            presentations: new Component('views/web-420/smith-rest.html', main)
        },
        main
    );
    generateFooterCopyright();
    setupMobileMenu();
}

function generateFooterCopyright() {
    let year = new Date().getFullYear();
    let fc = document.getElementById("footer-copyright");
    let text = document.createTextNode(year);
    fc.appendChild(text);
}

// Run init() on load
document.addEventListener("DOMContentLoaded", function() {
    init();
});