var donutDeg = 0;

var spinDonut = setInterval(() => {
    donutDeg++;
    $("#donut1").css("transform", `rotate(${donutDeg}deg)`);
    $("#donut2").css("transform", `rotate(${donutDeg}deg)`);
}, 50);



