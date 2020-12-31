var completion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Completion(x, k) {
    var sum = 0;
    for (i = 1; i < x.length; i++) {
        sum += x[i].checked == true;
        if (k == 6) {
            sum += x[i].checked == true;
        }
    }
    completion[k] = sum;
    sum = 0;
    for (i = 0; i < completion.length; i++) {
        sum += completion[i];
    }
    document.getElementById("result").innerHTML = "완성도 : " + sum + "%";
}

// function Completion_2() {
//     var sum = 0;
//     for (i = 0; i < completion.length; i++) {
//         sum += completion[i];
//     }
//     document.getElementById("result").innerHTML = "완성도 : " + sum + "%";
// }

function box_1(name, n, k){
    var x = document.getElementsByName(name);
    if (x[n].checked) {
        for (i = 1; i < n; i++) {
            x[i].checked = true;
        }
    }
    else {
        for (i = n + 1; i < x.length; i++) {
            x[i].checked = false;
        }
    }

    if (n == 0){
        x[x.length - 1].checked = x[0].checked;
        box_1(name, x.length - 1, k);
    }
    else{
        x[0].checked = x[x.length - 1].checked;
    }

    Completion(x, k);

    // Completion_2();

    // var sum = 0;
    // for (i = 1; i < x.length; i++) {
    //     sum += x[i].checked == true;
    // }
    //  completion[k] = sum;
}

function box_2(name, n, k) {
    var x = document.getElementsByName(name);

    if (n == 0) {
        if (x[0].checked) {
            for (i = 1; i < x.length; i++){
                x[i].checked = true;
            }
        }
        else {
            for (i = 1; i < x.length; i++){
                x[i].checked = false;
            }
        }
    }

    var sum = 0;
    for (i = 1; i < x.length; i++) {
        if (x[i].checked) {
            sum += 1;
        }
    }
    if (sum == x.length - 1) {
        x[0].checked = true;
    }
    else{
        x[0].checked = false;
    }

    Completion(x, k);
}

function Open() {
    var x = document.getElementsByTagName("details");
    for (i = 0; i < x.length; i++) {
        x[i].open = true;
    }
}

function Close() {
    var x = document.getElementsByTagName("details");
    for (i = 0; i < x.length; i++) {
        x[i].open = false;
    }
}

var check = [
    "nail",
    "dream_nail",
    "boss",
    "charm",
    "colosseum",
    "dreamer",
    "equipment",
    "mask",
    "nailart",
    "spell",
    "vessel",
    "warrior",
    "godmaster"
];

function Checked() {
    for (j = 0; j < check.length; j++){
        document.getElementById(check[j] + "0").checked = true;
        box_2(check[j], 0, j);
    }
}

function Unchecked() {
    for (j = 0; j < check.length; j++){
        document.getElementById(check[j] + "0").checked = false;
        box_2(check[j], 0, j);
    }
}