
function slide(){
    character.classList.add("animate");
};

console.log("test");

function setup() {
    // createCanvas(1000, 800);
    createCanvas(100, 100)
    background("light-blue")
    console.log("test")
}

function draw() {
    noStroke();
    fill(100)
    circle(mouseX, mouseY, 20)
}