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


setTimeout(function (){
    const loader = document.querySelector("[aria-label=\"loader\"]");
    loader.parentElement.removeChild(loader);
}, 4000);
