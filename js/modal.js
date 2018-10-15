var Modal = (function() {
    let instance;

    function createModal() {
        let modal = document.getElementById("modal");
        let toggled = false;

        function toggle(el) {
            modal.innerHTML = "";

            if(toggled) {
                closeModal();
            }
            else {
                let header = document.createElement("h3");
                header.innerHTML = el.getAttribute("alt");
                header.classList.add("yellow-text");
                modal.appendChild(header);
                modal.appendChild(el.cloneNode());
                modal.classList.add("show-modal");
                toggled = true;
                document.querySelector("body").style.overflowY = "hidden";
            }
        }

        function closeModal() {
            modal.classList.remove("show-modal");
            document.querySelector("body").style.overflowY = "auto";
            toggled = false;
        }

        return {
            toggle: toggle,
            close: closeModal
        }
    }

    function getModal() {
        if(!instance) {
            instance = createModal();
        }
        return instance;
    }

    return getModal();
})();

function toggleModal(e) {
    Modal.toggle(e.target);
}

window.addEventListener('hashchange', function() {
    Modal.close();
});