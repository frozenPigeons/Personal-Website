const gallery = document.getElementById("container");

window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;

      const maxX = gallery.offsetWidth - window.innerWidth,
            maxY = gallery.offsetHeight - window.innerHeight;

      const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

      gallery.animate({
            transform: `translate(${panX}px, ${panY}px)`
      }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
      })
}

let container = document.getElementById("storage");
let info = document.getElementById("info");

container.onclick = function () {
      info.className = "open";
      //if you want it to toggle make an if statement
}; 