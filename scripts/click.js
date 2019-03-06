var evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
    /* whatever properties you want to give it */
}),

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  ele = document.getElementById("particles-js");
  ele.dispatchEvent(evt);
}
