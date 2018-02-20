
// dialog opener
(function(){
    const dialogElementOpen = document.querySelector('button[name="dialog-open"]');
    const focusOnDialog = function () {

        // Using inline style hack to make focus able.
        document.querySelector("dialog").style.visibility = "visible";
        document.querySelector("dialog").focus();

        // next frame remove style
        setTimeout(function () {
            document.querySelector("dialog").style.visibility = "";
        });

    };
    dialogElementOpen.addEventListener("click", focusOnDialog);

})();

// hide loader
setTimeout(function () {
    const loader = document.querySelector("[aria-label=\"loader\"]");
    loader.parentElement.removeChild(loader);
}, 4000);


const inputFields = document.querySelectorAll("[type=\"email\"], [type=\"password\"]");

const enableInputFeedback = function (e) {
    const source = e.target;
    source.removeEventListener("focus", enableInputFeedback);
    setTimeout(function () {
        source.setAttribute("used", true);
    }, 1000);
};

for (let i = 0; i < inputFields.length; i++) {
    const inputField = inputFields[i];
    inputField.addEventListener("focus", enableInputFeedback, false);
}
