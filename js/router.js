class Router {
    constructor(routes, main) {
        this.routes = routes;
        this.main = main;
        window.onhashchange = this.hashUpdate.bind(this);
        this.hashUpdate();
    }

    async hashUpdate(event) {
        if(window.location.hash.length > 0) {
            let routeName = window.location.hash.substr(1);
            if(this.routes.hasOwnProperty(routeName)) {
                this.renderRoute(routeName);
            }
            else {
                this.renderRoute("404");
            }
        } 
        else {
            this.renderRoute("about");
        }
    }

    async renderRoute(routeName) {
        if(routeName === "about" || routeName === "portfolio" || routeName === "contact") {
            this.setActiveLink(routeName);
        }
        let main = this.main;
        main.innerHTML = "";
        const route = this.routes[routeName];
        route.load();
    }

    setActiveLink(routeName) {
        let links = document.getElementsByClassName("nav-link");
        for(let l of links) {
            l.classList.remove("active-link");
        }
        let link = document.getElementById(routeName + "-link");
        link.classList.add("active-link");
    }
}