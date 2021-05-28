canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1W = 100;
car1H = 100;

car1X = 10;
car1Y = 10;

car2W = 100;
car2H = 100;

car2X = 10;
car2Y = 100;

bgImg = "racing.jpg";
car1Img = "car1.png";
car2Img = "car2.png";

function add(){
    bgImgN = new Image();
    bgImgN.onload = bgUpload;
    bgImgN.src = bgImg;
    
    car1ImgN = new Image();
    car1ImgN.onload = car1Upload;
    car1ImgN.src = car1Img;

    bgImgN = new Image();
    bgImgN.onload = bgUpload;
    bgImgN.src = bgImg;
    
    car2ImgN = new Image();
    car2ImgN.onload = car2Upload;
    car2ImgN.src = car2Img;

}

function bgUpload(){
ctx.drawImage(bgImgN, 0, 0, canvas.width, canvas.height);
}
function car1Upload(){
    ctx.drawImage(car1ImgN, car1X, car1Y, car1W, car1H)
}

function car2Upload(){
    ctx.drawImage(car2ImgN, car2X, car2Y, car2W, car2H)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log("keyPressed");

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }


    if(keyPressed == '65')
    {
        a();
        console.log("left");
    }
    if(keyPressed == '87')
    {
        w();
        console.log("up");
    }
    if(keyPressed == '68')
    {
        d();
        console.log("right");
    }
    if(keyPressed == '83')
    {
        s();
        console.log("down");
    }

}

function up()
{
    if(car1Y >= 0)
    {
        car1Y = car1Y - 10;
        console.log("car1X = " + car1X + ", car1Y = " + car1Y);
        bgUpload();
        car1Upload();
    }
}
function down()
{
    if(car1Y <= 500)
    {
        car1Y = car1Y + 10;
        console.log("car1X = " + car1X + ", car1Y = " + car1Y);
        bgUpload();
        car1Upload();
    }
}
function left()
{
    if(car1X >= 0)
    {
        car1X = car1X - 10;
        console.log("car1X = " + car1X + ", car1Y = " + car1Y);
        bgUpload();
        car1Upload();
    }
}
function right()
{
    if(car1X <= 700)
    {
        car1X = car1X + 10;
        console.log("car1X = " + car1X + ", car1Y = " + car1Y);
        bgUpload();
        car1Upload();
    }
}


function w()
{
    if(car1Y >= 0)
    {
        car2Y = car2Y - 10;
        console.log("car2X = " + car2X + ", car2Y = " + car2Y);
        bgUpload();
        car2Upload();
    }
}
function s()
{
    if(car1Y <= 500)
    {
        car2Y = car2Y + 10;
        console.log("car2X = " + car2X + ", car2Y = " + car2Y);
        bgUpload();
        car2Upload();
    }
}
function a()
{
    if(car2X >= 0)
    {
        car2X = car2X - 10;
        console.log("car2X = " + car2X + ", car2Y = " + car2Y);
        bgUpload();
        car2Upload();
    }
}
function d()
{
    if(car2X <= 700)
    {
        car2X = car2X + 10;
        console.log("car2X = " + car2X + ", car2Y = " + car2Y);
        bgUpload();
        car2Upload();
    }
}

