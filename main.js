let coordinates = {r: 1, c: 1};
let stringGrid = "r" + coordinates.r + "c" + coordinates.c;
const pikaURL = '<img src="pika.gif">';

document.onkeydown = function(e){
    switch(e.key){
        case "ArrowUp":
            if(coordinates.r > 1){
                removePika();
                coordinates.r--;
                stringGrid = updateLocation();
                updateGrid();
            }
            console.log("up " + coordinates.r + ' ' + coordinates.c);
            break;
        case "ArrowDown":
            if(coordinates.r < 10){
                removePika();
                coordinates.r++;
                stringGrid = updateLocation();
                updateGrid();
            }
            console.log("Down " + coordinates.r + ' ' + coordinates.c);
            break;
        case "ArrowRight":
            if(coordinates.c < 10){
                removePika();
                coordinates.c++;
                stringGrid = updateLocation();
                updateGrid();
            }
            console.log("Right " + coordinates.r + ' ' + coordinates.c);
            break;
        case "ArrowLeft":
            if(coordinates.c > 1){
                removePika();
                coordinates.c--;
                stringGrid = updateLocation();
                updateGrid();
            }
            console.log("Left " + coordinates.r + ' ' + coordinates.c);
            break;
    }



}


function updateLocation(){
    return "r" + coordinates.r + "c" + coordinates.c;
}

function updateGrid(){
    $("." + stringGrid).html(pikaURL);
}

function removePika(){
    $("." + stringGrid).html("");
}
