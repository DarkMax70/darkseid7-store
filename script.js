document.addEventListener("mousemove", function(e) {
    var mouseTrail = document.createElement("div");
    mouseTrail.classList.add("mouse-trail");
    document.body.appendChild(mouseTrail);
    mouseTrail.style.left = e.pageX - 10 + "px";
    mouseTrail.style.top = e.pageY - 10 + "px";

    setTimeout(function() {
        mouseTrail.remove();
    }, 500); // This will control the duration of the trail effect
});
