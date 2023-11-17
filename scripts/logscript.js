(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.querySelector("footer");
        if (footer) {
            footer.innerHTML = `Страница загружена за ${loadTime} миллисекунд.`;
        }
    });
})();