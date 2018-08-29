function setupMobileMenu() {
    document.getElementById("mobile-menu-icon").addEventListener("click", function() { mobileMenu.open(); });
    document.getElementById("mobile-menu-close-icon").addEventListener("click", function() { mobileMenu.close(); });
    window.addEventListener("resize", function() { mobileMenu.forceClose(); })
}

const mobileMenu = {
    active: false,
    open: function() {
        this.active = true;
        let navButton = document.getElementById("mobile-menu-icon");
        let closeButton = document.getElementById("mobile-menu-close-icon");
        let navList = document.getElementById("nav-list");
        let logoNavContainer = document.getElementById("logo-and-nav").firstElementChild;
        
        let logo = document.getElementById("logo");
        let logoClone = logo.cloneNode(true);
        logoClone.classList.remove("logo-animate-reverse");
        logoClone.classList.add("logo-animate");
        logo.parentNode.replaceChild(logoClone, logo);

        logoNavContainer.style.marginLeft = "-80px";
        navList.classList.add("nav-width-reset");
        navButton.classList.add("mobile-icon-animate-open");
        logo.classList.add("logo-animate");

        setTimeout(function() {
            navList.classList.add("nav-opacity-reset");
            navButton.classList.add("display-none");
            navButton.classList.remove("mobile-icon-animate-open");
            closeButton.classList.add("display-close-button");
        }, 499);
    },
    close: function() {
        this.active = false;
        let navButton = document.getElementById("mobile-menu-icon");
        let closeButton = document.getElementById("mobile-menu-close-icon");
        let navList = document.getElementById("nav-list");
        let logoNavContainer = document.getElementById("logo-and-nav").firstElementChild;

        navList.classList.remove("nav-opacity-reset");
        navButton.classList.remove("display-none");
        navButton.classList.add("mobile-icon-animate-close");
        closeButton.classList.remove("display-close-button");

        setTimeout(function() {
            logoNavContainer.style.marginLeft = "0px";
            let logo = document.getElementById("logo");
            let logoClone = logo.cloneNode(true);
            logoClone.classList.remove("logo-animate");
            logoClone.classList.add("logo-animate-reverse");
            logo.parentNode.replaceChild(logoClone, logo);

            navList.classList.remove("nav-width-reset");
            navButton.classList.remove("mobile-icon-animate-close");
        }, 499);
    },
    forceClose: function() {
        if(this.active) {
            this.close();
        }
    }
}