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
    ["charm_backboard","c_0"],
    ["charm_backboard","c_1"],
    ["charm_backboard","_2"],
    ["charm_backboard","_3"],
    ["charm_backboard","_4"],
    ["charm_backboard","_5"],
    ["charm_backboard","_6"],
    ["charm_backboard","_7"],
    ["charm_backboard","_8"],
    ["charm_backboard","_9"],
    ["charm_backboard","_10-1","_10-2","_10-3"],
    ["charm_backboard","_11-1","_11-2","_11-3"],
    ["charm_backboard","_12-1","_12-2","_12-3"],
    ["charm_backboard","_13"],
    ["charm_backboard","_14"],
    ["charm_backboard","_15"],
    ["charm_backboard","_16"],
    ["charm_backboard","_17"],
    ["charm_backboard","_18"],
    ["charm_backboard","_19"],
    ["charm_backboard","_20"],
    ["charm_backboard","_21"],
    ["charm_backboard","_22"],
    ["charm_backboard","_23"],
    ["charm_backboard","_24"],
    ["charm_backboard","_25"],
    ["charm_backboard","_26"],
    ["charm_backboard","_27"],
    ["charm_backboard","_28"],
    ["charm_backboard","_29"],
    ["charm_backboard","_30"],
    ["charm_backboard","_31"],
    ["charm_backboard","_32"],
    ["charm_backboard","_33"],
    ["charm_backboard","_34"],
    ["charm_backboard","_35"],
    ["charm_backboard","_36"],
    ["charm_backboard","_37"],
    ["charm_backboard","_38-1","_38-2","_38-3","_38-4","_38-5"],
    ["charm_backboard","_39-1","_39-2","_39-3","_39-4"],
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
