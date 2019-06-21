let gridX = 1;
let gridY = 1;
let stringGrid = "r" + gridX + "c" + gridY;
const pikaURL = '<img src="pika.gif">';

// $(document).ready(function() {
    

document.onkeydown = function(e){
    switch(e.key){
        case "ArrowUp":
            if(gridX > 1){
                removePika();
                gridX--;
                stringGrid = updateLocation(gridX, gridY);
                updateGrid();
            }
            console.log("up " + gridX + ' ' + gridY);
            break;
        case "ArrowDown":
            if(gridX < 10){
                removePika();
                gridX++;
                stringGrid = updateLocation(gridX, gridY);
                updateGrid();
            }
            console.log("Down " + gridX + ' ' + gridY);
            break;
        case "ArrowRight":
            if(gridY < 10){
                removePika();
                gridY++;
                stringGrid = updateLocation(gridX, gridY);
                updateGrid();
            }
            console.log("Right " + gridX + ' ' + gridY);
            break;
        case "ArrowLeft":
            if(gridY > 1){
                removePika();
                gridY--;
                stringGrid = updateLocation(gridX, gridY);
                updateGrid();
            }
            console.log("Left " + gridX + ' ' + gridY);
            break;
    }



}


function updateLocation(gridX, gridY){
    return "r" + gridX + "c" + gridY;
}

function updateGrid(){
    $("." + stringGrid).html(pikaURL);
}

function removePika(){
    $("." + stringGrid).html("");
}






// });