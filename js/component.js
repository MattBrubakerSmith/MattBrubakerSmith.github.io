class Component {
    constructor(url, parentNode, props, isChild) {
        this.url = url;
        this.props = props || {};
        this.parentNode = parentNode;
        this.isChild = isChild || false;
    }

    load() {
        let render = this.render;
        let parentNode = this.parentNode;
        let isChild = this.isChild;

        this.loadSelf().then(function(value) {
            render(parentNode, value, isChild);
        });
    }

    loadSelf() {
        let url = this.url;
        let props = this.props;
        let parseData = this.parseData;
        let loadChildren = this.loadChildren;
        let loadChild = this.loadChild;

        async function fetchContent() {
            let content = await fetch(url);
            let text = await content.text();
            
            if(props) {
                text = parseData(text, props);
            }

            let el = document.createElement("div");
            el.innerHTML = text;
            loadChildren(el.getElementsByTagName("component"), loadChild);
            return el;
        }
        return fetchContent();
    }

    loadChildren(children, load) {
        if(children.length > 0) {
            for(let i = children.length - 1; i >= 0; i--) {
                load(children[i]);
            }
        }
    }

    loadChild(placeholderNode, data) {
        data = data || JSON.parse(placeholderNode.getAttribute("data-props"));
        let div = document.createElement("div");
        placeholderNode.parentNode.replaceChild(div, placeholderNode);
        let child = new Component(data.url, div, data.props, true);
        child.load();
    }

    render(container, el, isChild) {
        if(isChild) {
            let oldContainer = container;
            container = container.parentNode;
            container.removeChild(oldContainer);

            while(el.firstChild) {
                container.insertBefore(el.firstChild, container.firstChild);
            }
        }
        else {
            while(el.firstChild) {
                container.appendChild(el.firstChild);
            }
        }
    }

    parseData(text, data) {
        let parser = Parser.getParser();
        text = parser.parse(text, data);
        return text;
    }
}