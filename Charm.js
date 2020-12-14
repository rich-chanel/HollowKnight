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



var image = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var imageName = [
    ["charm_backboard", "c0"],
    ["charm_backboard", "c1"],
    ["charm_backboard", "c2"],
    ["charm_backboard", "c3"],
    ["charm_backboard", "c4"],
    ["charm_backboard", "c5"],
    ["charm_backboard", "c6"],
    ["charm_backboard", "c7"],
    ["charm_backboard", "c8"],
    ["charm_backboard", "c9"],
    ["charm_backboard", "c10-1", "c10-2", "c10-3"],
    ["charm_backboard", "c11-1", "c11-2", "c11-3"],
    ["charm_backboard", "c12-1", "c12-2", "c12-3"],
    ["charm_backboard", "c13"],
    ["charm_backboard", "c14"],
    ["charm_backboard", "c15"],
    ["charm_backboard", "c16"],
    ["charm_backboard", "c17"],
    ["charm_backboard", "c18"],
    ["charm_backboard", "c19"],
    ["charm_backboard", "c20"],
    ["charm_backboard", "c21"],
    ["charm_backboard", "c22"],
    ["charm_backboard", "c23"],
    ["charm_backboard", "c24"],
    ["charm_backboard", "c25"],
    ["charm_backboard", "c26"],
    ["charm_backboard", "c27"],
    ["charm_backboard", "c28"],
    ["charm_backboard", "c29"],
    ["charm_backboard", "c30"],
    ["charm_backboard", "c31"],
    ["charm_backboard", "c32"],
    ["charm_backboard", "c33"],
    ["charm_backboard", "c34"],
    ["charm_backboard", "c35"],
    ["charm_backboard", "c36"],
    ["charm_backboard", "c37"],
    ["charm_backboard", "c38-1", "c38-2", "c38-3", "c38-4", "c38-5"],
    ["charm_backboard", "c39-1", "c39-2", "c39-3", "c39-4"],
];

var c_titleName = [
    ["클릭하면 바뀝니다", "변덕스런 나침반"],
    ["클릭하면 바뀝니다", "수집벌레무리"],
    ["클릭하면 바뀝니다", "튼튼한 껍데기"],
    ["클릭하면 바뀝니다", "영혼 포획자"],
    ["클릭하면 바뀝니다", "주술사의 돌"],
    ["클릭하면 바뀝니다", "영혼 포식자"],
    ["클릭하면 바뀝니다", "대시마스터"],
    ["클릭하면 바뀝니다", "잘주마스터"],
    ["클릭하면 바뀝니다", "애벌레의 노래"],
    ["클릭하면 바뀝니다", "애벌나비 애가"],
    ["클릭하면 바뀝니다", "허술한 심장", "깨진 허술한 심장", "불멸의 심장"],
    ["클릭하면 바뀝니다", "허술한 탐욕", "깨진 허술한 탐욕", "불멸의 탐욕"],
    ["클릭하면 바뀝니다", "허술한 힘", "깨진 허술한 힘", "불멸의 힘"],
    ["클릭하면 바뀝니다", "주문 회오리"],
    ["클릭하면 바뀝니다", "흔들림없는 자세"],
    ["클릭하면 바뀝니다", "묵직한 타격"],
    ["클릭하면 바뀝니다", "빠른 참격"],
    ["클릭하면 바뀝니다", "기다란 대못"],
    ["클릭하면 바뀝니다", "긍지의 표식"],
    ["클릭하면 바뀝니다", "전사자의 분노"],
    ["클릭하면 바뀝니다", "고통의 가시덩굴"],
    ["클릭하면 바뀝니다", "발더 껍데기"],
    ["클릭하면 바뀝니다", "흡충 둥지"],
    ["클릭하면 바뀝니다", "수호기사의 문장"],
    ["클릭하면 바뀝니다", "영롱한 알집"],
    ["클릭하면 바뀝니다", "쾌속 집중"],
    ["클릭하면 바뀝니다", "깊은 집중"],
    ["클릭하면 바뀝니다", "생명혈 심장"],
    ["클릭하면 바뀝니다", "생명혈 핵"],
    ["클릭하면 바뀝니다", "조니의 축복"],
    ["클릭하면 바뀝니다", "벌집 정수"],
    ["클릭하면 바뀝니다", "포자 버섯"],
    ["클릭하면 바뀝니다", "날카로운 그림자"],
    ["클릭하면 바뀝니다", "우운의 호수"],
    ["클릭하면 바뀝니다", "대못사부의 영예"],
    ["클릭하면 바뀝니다", "엮는 이의 노래"],
    ["클릭하면 바뀝니다", "꿈의 주인"],
    ["클릭하면 바뀝니다", "몽환의 방패"],
    ["클릭하면 바뀝니다", "그림의 아이(1)", "그림의 아이(2)", "그림의 아이(3)", "그림의 아이(최종)", "경쾌한 선율"],
    ["클릭하면 바뀝니다", "백색 파편(좌)", "백색 파편(우)", "왕의 영혼", "공허의 심장"]
];

var targetElement;
var tempIndex;

function evt(n){
    targetElement = document.getElementById("c" + String(n));
    tempIndex =  image[n];
    image[n] += 1;
    if(image[n] >= imageName[n].length){
        image[n] = 0;
    }
    targetElement.innerHTML = targetElement.innerHTML.replace(imageName[n][tempIndex], imageName[n][image[n]]);
    targetElement.innerHTML = targetElement.innerHTML.replace(c_titleName[n][tempIndex], c_titleName[n][image[n]]);
}

function allclik(){
    for (n = 0;n<40;n++){
        targetElement = document.getElementById("c" + String(n));
        tempIndex =  image[n]
        if (n == 38){
            image[n] = imageName[n].length - 2;
        }
        else{
            image[n] = imageName[n].length - 1;
        }
        targetElement.innerHTML = targetElement.innerHTML.replace(imageName[n][tempIndex], imageName[n][image[n]]);
        targetElement.innerHTML = targetElement.innerHTML.replace(c_titleName[n][tempIndex], c_titleName[n][image[n]]);
    }
}

function allunclik(){
    for (n = 0;n<40;n++){
        targetElement = document.getElementById("c" + String(n));
        tempIndex =  image[n]
        image[n] = 0;
        targetElement.innerHTML = targetElement.innerHTML.replace(imageName[n][tempIndex], imageName[n][image[n]]);
        targetElement.innerHTML = targetElement.innerHTML.replace(c_titleName[n][tempIndex], c_titleName[n][image[n]]);
    }
}
