function preload() {

}

function setup() {
    canvas=createCanvas(320, 300);
    canvas.position(300, 150);
    video= createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw() {
    image(video, 0, 0, 320, 300);
    tint(tint_color);
}

function take_snapshot() {
    save('tint_color_img.png');
}

function Appy_Filter() {
    tint_color= document.getElementById("filter_input").value;
}