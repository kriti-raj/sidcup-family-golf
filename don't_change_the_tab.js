let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Hey! Don't Go Away ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});