var relX = 0;
var relY = 0;

$("#floating").css("background-color", "red")

var floatAnimationY = setInterval(() => {
    relY++

    var resultY = 2 * Math.sin(relY);
    
}, 100)
