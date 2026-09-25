"use strict";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navbar-burger").forEach((burger) => {
        burger.addEventListener("click", () => {
            const targetId = burger.dataset.target;
            const target = targetId ? document.getElementById(targetId) : null;
            burger.classList.toggle("is-active");
            target?.classList.toggle("is-active");
            burger.setAttribute("aria-expanded", String(burger.classList.contains("is-active")));
        });
    });
    const resultsRoot = document.querySelector("[data-rism-search-results]");
    if (resultsRoot) {
        void loadRismSearch(resultsRoot);
    }
});