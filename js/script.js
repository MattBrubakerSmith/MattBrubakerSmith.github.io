// Initialization function
function init() {
    displayPage("about");
    portfolioGalleryStyleAdaptor();
    window.addEventListener("resize", function() {
        portfolioGalleryStyleAdaptor()
    });
}

let PageManager = (function() {
    let instance;
    function createInstance() {
        let about = new AboutPage({
            title: "About",
            subtitle: "Subtitle",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nunc mauris, dignissim ullamcorper erat fermentum a. Ut venenatis ut ipsum maximus convallis. Curabitur non lacinia enim, in interdum quam. Cras in sapien risus. Phasellus vitae nisi ante. Aliquam erat volutpat. Nullam faucibus bibendum enim sit amet maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et eleifend orci, quis dictum massa."
        });
    
        let contact = new ContactPage({
            title: "Contact",
            subtitle: "Subtitle",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nunc mauris, dignissim ullamcorper erat fermentum a. Ut venenatis ut ipsum maximus convallis. Curabitur non lacinia enim, in interdum quam. Cras in sapien risus. Phasellus vitae nisi ante. Aliquam erat volutpat. Nullam faucibus bibendum enim sit amet maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et eleifend orci, quis dictum massa."
        });
    
        let portfolio = new PortfolioPage({
            title: "Portfolio",
            subtitle: "Subtitle",
            bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nunc mauris, dignissim ullamcorper erat fermentum a. Ut venenatis ut ipsum maximus convallis. Curabitur non lacinia enim, in interdum quam. Cras in sapien risus. Phasellus vitae nisi ante. Aliquam erat volutpat. Nullam faucibus bibendum enim sit amet maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et eleifend orci, quis dictum massa."
        });

        let galleryCollapsed = false;

        return {
            getAbout: function() {
                return about;
            },
            getContact: function() {
                return contact;
            },
            getPortfolio: function() {
                return portfolio;
            },
            collapseGallery: function(cg) {
                galleryCollapsed = cg;
            },
            galleryCollapsed: function() {
                return galleryCollapsed;
            }
        }
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function displayPage(pageName) {
    let pageManager = PageManager.getInstance();
    let page = document.getElementById("page");
    while (page.firstChild) {
        page.removeChild(page.firstChild);
    }

    switch(pageName) {
        case "about": {
            page.appendChild(pageManager.getAbout());
            break;
        }
        case "contact": {
            page.appendChild(pageManager.getContact());
            break;
        }
        case "portfolio": {
            page.appendChild(pageManager.getPortfolio());
            break;
        }
    }
}

function AboutPage(content) {
    let container = document.createElement("div");
    container.classList.add("skew-card-container");

    let card = document.createElement("div");
    card.classList.add("skew-card");
    container.appendChild(card);

    let cardRibbonBackground = document.createElement("div");
    cardRibbonBackground.classList.add("skew-card-ribbon-back");
    container.appendChild(cardRibbonBackground);

    let cardContent = document.createElement("div");
    cardContent.classList.add("skew-card-content");
    card.appendChild(cardContent);

    let cardTitle = document.createElement("h1");
    let cardTitleText = document.createTextNode(content.title);
    cardTitle.appendChild(cardTitleText);
    cardContent.appendChild(cardTitle);

    let cardRibbon = document.createElement("div");
    cardRibbon.classList.add("skew-card-ribbon");
    cardContent.appendChild(cardRibbon);

    let cardAccent = document.createElement("div");
    let cardAccentText = document.createTextNode(content.subtitle);
    cardAccent.classList.add("accent-text", "skew-card-subtitle");
    cardAccent.appendChild(cardAccentText);
    cardRibbon.appendChild(cardAccent);

    let cardP = document.createElement("p");
    let cardPText = document.createTextNode(content.bodyText);
    cardP.appendChild(cardPText);
    cardContent.appendChild(cardP);

    return container;
}

function ContactPage(content) {
    let container = document.createElement("div");
    let cardTitle = document.createElement("h1");
    let cardTitleText = document.createTextNode(content.title);
    cardTitle.appendChild(cardTitleText);
    container.appendChild(cardTitle);

    return container;
}

let portfolioPieces = [
    {
        title: "BioSite",
        url: "https://mattbrubakersmith.github.io/bioSite",
        image: "biosite-thumb.jpg"
    },
    {
        title: "BioSite Prototype",
        url: "https://mattbrubakersmith.github.io/bioSite/BioSite%20Ideas%20-%20Matt%20Smith.pdf",
        image: "biosite-prototype-thumb.jpg"
    },
    {
        title: "Web 231 Repository",
        url: "https://github.com/MattBrubakerSmith/web-231",
        image: "web-231-thumb.jpg"
    },
    {
        title: "Personal Portfolio Prototype",
        url: "https://mattbrubakersmith.github.io/smith-personal-portfolio-prototype.pdf",
        image: "portfolio-prototype-thumb.jpg"
    },
    {
        title: "Web 330 Repository",
        url: "https://github.com/MattBrubakerSmith/web-330",
        image: "web-330-thumb.jpg"
    }
]

function PortfolioPage(content) {
    let container = document.createElement("div");
    container.classList.add("portfolio-gallery");

    let counter = 1;

    for(let i = 0; i < portfolioPieces.length; i++) {
        if(counter > 4) {
            counter = 1;
        }

        container.appendChild(createPiece(portfolioPieces[i], counter < 3 ? 1 : 2));
        counter++;
    }

    function createPiece(pieceData, typeNumber) {
        let piece = document.createElement("a");
        piece.setAttribute("href", pieceData.url);
        piece.setAttribute("target", "_blank");
        piece.classList.add("skew-card-container", "portfolio-piece", "piece-type-" + typeNumber);

        let pieceContentWrapper = document.createElement("div");
        pieceContentWrapper.classList.add("skew-card");
        piece.appendChild(pieceContentWrapper);

        let pieceContent = document.createElement("div");
        pieceContent.classList.add("skew-card-content");
        pieceContentWrapper.appendChild(pieceContent);

        let pieceRibbon = document.createElement("div");
        pieceRibbon.classList.add("skew-card-ribbon");
        pieceContent.appendChild(pieceRibbon);

        let thumbnail = document.createElement("img");
        thumbnail.setAttribute("src", "images/portfolio/" + pieceData.image);
        thumbnail.setAttribute("alt", pieceData.title);
        pieceContent.appendChild(thumbnail);

        let pieceTitle = document.createElement("div");
        pieceTitle.classList.add("accent-text", "skew-card-subtitle");
        let pieceTitleText = document.createTextNode(pieceData.title);
        pieceTitle.appendChild(pieceTitleText);
        pieceRibbon.appendChild(pieceTitle);

        let pieceRibbonBackground = document.createElement("div");
        pieceRibbonBackground.classList.add("skew-card-ribbon-back");
        piece.appendChild(pieceRibbonBackground);

        return piece;
    }

    return container;
}

function portfolioGalleryStyleAdaptor() {
    let pageManager = PageManager.getInstance();

    if(window.innerWidth < 651 && !pageManager.galleryCollapsed()) {
        pageManager.collapseGallery(true);
        let portfolio = pageManager.getPortfolio();
        for(let i = 0; i < portfolio.childNodes.length; i++) {
            if(i == 0 || i % 2 == 0) {
                portfolio.childNodes[i].classList.remove("piece-type-2");
                portfolio.childNodes[i].classList.add("piece-type-1");
            }
            else {
                portfolio.childNodes[i].classList.remove("piece-type-1");
                portfolio.childNodes[i].classList.add("piece-type-2");
            }
        }
    }
    
    if(window.innerWidth > 650 && pageManager.galleryCollapsed()) {
        pageManager.collapseGallery(false);
        let portfolio = pageManager.getPortfolio();
        let counter = 1;
        for(let i = 0; i < portfolio.childNodes.length; i++) {
            if(counter > 4) {
                counter = 1;
            }

            if(counter < 3) {
                portfolio.childNodes[i].classList.remove("piece-type-2");
                portfolio.childNodes[i].classList.add("piece-type-1");
            }
            else {
                portfolio.childNodes[i].classList.remove("piece-type-1");
                portfolio.childNodes[i].classList.add("piece-type-2");
            }
            counter++;
        }
    }
}

function toggleMobileNav() {
    let nav = document.getElementById("desktop-nav");
    let logo = document.getElementById("logo");
    let navList = document.getElementById("nav-list");

    if(nav.classList.contains("show")) {
        nav.classList.remove("show");
        navList.classList.remove("navlist-show");
        setTimeout(function() {
            logo.classList.remove("logo-navlist-show");
        })
    }
    else {
        nav.classList.add("show");
        logo.classList.add("logo-navlist-show");
        setTimeout(function() {
            navList.classList.add("navlist-show");
        }, 200)
    }
}

// Run init() on load
document.addEventListener("DOMContentLoaded", function() {
    init();
});