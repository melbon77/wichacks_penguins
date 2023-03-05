if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="style.css">');

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '/style.css';
    link.media = 'all';
    head.appendChild(link);
}

// Making navbar background sticky after scrolling down page
// function executes on scroll
window.onscroll = function() {
    makeSticky()
};

let navBg = document.querySelector("#nav_bg");
let navTop = navBg.offsetTop;

function makeSticky() {
    if (window.scrollY >= sticky) {
        navBg.classList.add("sticky");
    } else {
        navBg.classList.remove("sticky");
    }
}

window.addEventListener('scroll', makeSticky)
