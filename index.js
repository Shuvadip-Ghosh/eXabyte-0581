var tabbtns = document.getElementsByClassName("abttabbtn");
var deftar = "conv";

Array.from(tabbtns).forEach((tab) => {
    tab.addEventListener("click", (e) => {
        document
            .querySelectorAll(`[tabtarget=${deftar}]`)[0]
            .classList.remove("activetb");
        document.getElementById(deftar).classList.remove("activet");
        tab.classList.add("activetb");
        document.getElementById("dpd").innerHTML = tab.innerHTML
        deftar = tab.getAttribute("tabtarget");
        document.getElementById(deftar).classList.add("activet");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var element = document.getElementById("Contact");
    window.addEventListener("scroll", () => {
        const rect = element.getBoundingClientRect();

        // Calculate the percentage of the element in the viewport
        const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = rect.height;
        const elementTop = rect.top;

        // Determine how much of the element is visible
        let visiblePercentage = 0;
        if (elementTop < viewportHeight && elementTop + elementHeight > 0) {
            visiblePercentage = Math.min(
                1,
                (viewportHeight - elementTop) / elementHeight
            );
        }

        // Set new width based on visible percentage (from 0% to 100%)
        const newWidth = visiblePercentage * 100; // Width varies from 0% to 100%
        element.style.width = newWidth + "%";
    });
});
