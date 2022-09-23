let first = document.getElementById("first");

let imgsArray = new Array 
(
    "assets/imgs/Asset20.png",
    "assets/imgs/Asset21.png",
    "assets/imgs/Asset22.png",
    "assets/imgs/Asset23.png",
    "assets/imgs/Asset24.png",
    "assets/imgs/Asset25.png",
    "assets/imgs/Asset26.png",
    "assets/imgs/Asset27.png",
)

let count = 0;

function animate () {
    first.src = imgsArray[count];
    count++;
    if (imgsArray.length == count) {
        count = 0; 
    }
}

setInterval(animate, 100)
