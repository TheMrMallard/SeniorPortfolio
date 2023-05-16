
sway("main-header", 0.005, 0.001, 1, 5, 1)
sway("water", 0.0025, 0.001, 2, 0, 0)
sway("experiences", 0.001, 0.003, 1, 2, 5)

function sway(tag, speedX, speedY, ampX, ampY, degree) {
    var velX = 0;
    var posX = 0;
    var accX = 0;
    var velY = 0;
    var posY = 0;
    var accY = 0;

    var floatHeader = setInterval(() => {
        accX += speedX;
        velX =+ ampX * Math.sin(accX);
        posX =+ velX;

        accY += speedY;
        velY =+ ampY * Math.sin(accY);
        posY =+ velY;

        $(`#${tag}`).css("transform", `translate(${posX}rem, ${posY}px) rotate(${posX * degree}deg)`)
    }, 1)
}




