// Run init() on load
document.addEventListener("DOMContentLoaded", function() {
    init();
});

// Initialization function
function init() {
    createCardAttributes();
    generateCards();
}

// Creates custom attributes for cards
function createCardAttributes() {
    document.createAttribute("card-title");
    document.createAttribute("card-accent");
    document.createAttribute("card-content");
}

// Generates cards
function generateCards() {
    let cards = document.getElementsByClassName("card");
    for(let i = cards.length - 1; i >= 0; i--) {
        createCard(cards[i]);
    }
}

// Creates a stylized HTML card using the card-* attributes from the passed in parent node, then replaces the parent with the card in the DOM.
function createCard(parent) {
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
    let cardTitleText = document.createTextNode(parent.getAttribute("card-title"));
    cardTitle.appendChild(cardTitleText);
    cardContent.appendChild(cardTitle);

    let cardRibbon = document.createElement("div");
    cardRibbon.classList.add("text-card-ribbon");
    cardContent.appendChild(cardRibbon);

    let cardAccent = document.createElement("div");
    let cardAccentText = document.createTextNode(parent.getAttribute("card-accent"));
    cardAccent.classList.add("text-card-subtitle");
    cardAccent.appendChild(cardAccentText);
    cardRibbon.appendChild(cardAccent);

    let cardP = document.createElement("p");
    let cardPText = document.createTextNode(parent.getAttribute("card-content"));
    cardP.appendChild(cardPText);
    cardContent.appendChild(cardP);

    parent.parentNode.replaceChild(container, parent);
}