var velX = 0;
var posX = 0;
var accX = 0;

var velY = 0;
var posY = 0;
var accY = 0;

$("#floating1").css({"background-color": `lightgrey`, "height": "300px"})

var floatWater = setInterval(() => {
    accX += .005
    velX =+ 10 * Math.sin(accX);
    posX =+ velX

    accY += .01
    velY =+ 10 * Math.sin(accY);
    posY =+ velY
    $("#floating").css("transform", `translate(${posX}px, ${posY + 450}px)`)
}, 1)

var velX1 = 0;
var posX1 = 0;
var accX1 = 0;

var velY1 = 0;
var posY1 = 0;
var accY1 = 0;

var floatHeader = setInterval(() => {
    accX1 += .01
    velX1 =+ 10 * Math.sin(accX1);
    posX1 =+ velX

    accY1 += .001
    velY1 =+ 10 * Math.sin(accY1);
    posY1 =+ velY1

    $("#floating1").css("transform", `translate(${posX1}px, ${posY1 + 600}px) rotate(${posX1 * .1}deg)`)
}, 1)