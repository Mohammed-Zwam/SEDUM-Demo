
let myEle = document.getElementsByClassName("slider");
let videos = myEle[0].children;

let i = -1;
setInterval(function () {
    i++;

    if (i == videos.length) {
        videos[i - 1].style.cssText = "left: -100%; z-index: -3;";
        videos[i - 1].removeAttribute("autoplay", "");
        i = 0;
    }
    videos[i].style.cssText = "left: 100%;";
    videos[(i + 1) % videos.length].style.cssText = "left: 0; z-index: 3; ";
    videos[(i + 1) % videos.length].setAttribute("autoplay", "");

    if (i != 0) {
        videos[i - 1].style.cssText = "left: -100%; z-index: -3;";
        videos[i - 1].removeAttribute("autoplay");
    }

}, 5000)
