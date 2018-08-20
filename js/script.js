// Run init() on load
document.addEventListener("DOMContentLoaded", function() {
    init();
});

// Initialization function
function init() {
    displayPage("about");
}

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

function displayPage(pageName) {
    let page = document.getElementById("page");
    while (page.firstChild) {
        page.removeChild(page.firstChild);
    }

    switch(pageName) {
        case "about": {
            page.appendChild(about.getPage());
            break;
        }
        case "contact": {
            page.appendChild(contact.getPage());
            break;
        }
        case "portfolio": {
            page.appendChild(portfolio.getPage());
            break;
        }
    }
}

function ContactPage(content) {
    let container = document.createElement("div");
    let cardTitle = document.createElement("h1");
    let cardTitleText = document.createTextNode(content.title);
    cardTitle.appendChild(cardTitleText);
    container.appendChild(cardTitle);

    return {
        getPage: function() {
            return container;
        }
    }
}

function PortfolioPage(content) {
    let container = document.createElement("div");
    let cardTitle = document.createElement("h1");
    let cardTitleText = document.createTextNode(content.title);
    cardTitle.appendChild(cardTitleText);
    container.appendChild(cardTitle);

    return {
        getPage: function() {
            return container;
        }
    }
}

function AboutPage(content) {
    let container = document.createElement("div");
    container.classList.add("text-card-container");

    let card = document.createElement("div");
    card.classList.add("text-card");
    container.appendChild(card);

    let cardRibbonBackground = document.createElement("div");
    cardRibbonBackground.classList.add("text-card-ribbon-back");
    container.appendChild(cardRibbonBackground);

    let cardContent = document.createElement("div");
    cardContent.classList.add("text-card-content");
    card.appendChild(cardContent);

    let cardTitle = document.createElement("h1");
    let cardTitleText = document.createTextNode(content.title);
    cardTitle.appendChild(cardTitleText);
    cardContent.appendChild(cardTitle);

    let cardRibbon = document.createElement("div");
    cardRibbon.classList.add("text-card-ribbon");
    cardContent.appendChild(cardRibbon);

    let cardAccent = document.createElement("div");
    let cardAccentText = document.createTextNode(content.subtitle);
    cardAccent.classList.add("text-card-subtitle");
    cardAccent.appendChild(cardAccentText);
    cardRibbon.appendChild(cardAccent);

    let cardP = document.createElement("p");
    let cardPText = document.createTextNode(content.bodyText);
    cardP.appendChild(cardPText);
    cardContent.appendChild(cardP);

    return {
        getPage: function() {
            return container;
        }
    }
}