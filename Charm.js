// var v01 = 0
// function c01(){
//     var c01 = document.getElementById("c01");
//     c01.innerHTML="<img src=\"image/Wayward Compass.png\">"
// }

// var 
// function evt(var i)


// var imageIndex = [0, 0]  
// var imageName = [["Way~~~.png","~~~"],["~~~","~~"]]
// function evt(index){
//     var targetElement = document.getElementById("c" + str(index));
//     imageIndex[index] += 1;
//     if(imageIndex[index] >= imageName[index].length){
//         imageIndex[index] = 0;
//     targetElement.innerHTML = "<img src=\"image/" + imageName[index][imageIndex[index]] + "\">";
//   }
// }



var image = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  
var imageName = [
    ["charm_backboard","c0"],
    ["charm_backboard","c1"],
    ["charm_backboard","c2"],
    ["charm_backboard","c3"],
    ["charm_backboard","c4"],
    ["charm_backboard","c5"],
    ["charm_backboard","c6"],
    ["charm_backboard","c7"],
    ["charm_backboard","c8"],
    ["charm_backboard","c9"],
    ["charm_backboard","c10-1","c10-2","c10-3"],
    ["charm_backboard","c11-1","c11-2","c11-3"],
    ["charm_backboard","c12-1","c12-2","c12-3"],
    ["charm_backboard","c13"],
    ["charm_backboard","c14"],
    ["charm_backboard","c15"],
    ["charm_backboard","c16"],
    ["charm_backboard","c17"],
    ["charm_backboard","c18"],
    ["charm_backboard","c19"],
    ["charm_backboard","c20"],
    ["charm_backboard","c21"],
    ["charm_backboard","c22"],
    ["charm_backboard","c23"],
    ["charm_backboard","c24"],
    ["charm_backboard","c25"],
    ["charm_backboard","c26"],
    ["charm_backboard","c27"],
    ["charm_backboard","c28"],
    ["charm_backboard","c29"],
    ["charm_backboard","c30"],
    ["charm_backboard","c31"],
    ["charm_backboard","c32"],
    ["charm_backboard","c33"],
    ["charm_backboard","c34"],
    ["charm_backboard","c35"],
    ["charm_backboard","c36"],
    ["charm_backboard","c37"],
    ["charm_backboard","c38-1","c38-2","c38-3","c38-4","c38-5"],
    ["charm_backboard","c39-1","c39-2","c39-3","c39-4"],
]

function evt(n){
    var targetElement = document.getElementById("c" + String(n));
    var tempIndex =  image[n];
    image[n] += 1;

    if(image[n] >= imageName[n].length){
        image[n] = 0;
    }
    targetElement.innerHTML = targetElement.innerHTML.replace(imageName[n][tempIndex], imageName[n][image[n]]);
}

function allclik(){
    for (n = 0;n<40;n++){
        var targetElement = document.getElementById("c" + String(n));
        var tempIndex =  image[n];
        image[n] += 1;

        if(image[n] >= imageName[n].length){
            image[n] = 0;
        }
        targetElement.innerHTML = targetElement.innerHTML.replace(imageName[n][tempIndex], imageName[n][image[n]]);
    }
}
