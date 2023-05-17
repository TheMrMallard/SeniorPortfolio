
sway("main-header", 0.005, 0.001, 1, 5, 1)
sway("achievements", 0.001, 0.003, 1, 2, 5)
sway("achievements-list", 0.002, 0.002, 1, 2, 1)
sway("experiences", 0.001, 0.0015, -1, 2, 5)
sway("experiences-list", 0.002, 0.001, -1, 2, 1)
sway("line", 0.002, 0.0011, -1, 2, 1)

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




