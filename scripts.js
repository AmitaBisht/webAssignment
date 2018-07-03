var A, B, C,result;

function init(){
    A = document.querySelector("#valuea");
    B = document.querySelector("#valueb");
    C = document.querySelector("#valuec");
    result = document.querySelector("#result");
}

function updateEquation(){
    document.getElementById("a").innerHTML = A.value==1?"":A.value;
    document.getElementById("b").innerHTML = B.value==1?"":B.value;
    document.getElementById("c").innerHTML = C.value;
}

function solve(){
    if(eval(A.value) !== undefined && eval(B.value) !== undefined && eval(C.value) !== undefined){
        let a = A.value, b = B.value, c = C.value;
        let discriminant = getDiscriminant(a, b, c);
        if (discriminant<0){
            result.innerHTML = "There is no real root.";
        }
        else if (discriminant===0){
            let root1 = (-b+Math.sqrt(discriminant))/(2*a);
            let root2 = (-b-Math.sqrt(discriminant))/(2*a);
            result.innerHTML = "There is real and equal root.<br>";
            result.innerHTML += "x<sub>1</sub>: " + root1 + "<br>";
            result.innerHTML += "x<sub>2</sub>: " + root2 + "<br>";
        }
        else{
            let root1 = (-b+Math.sqrt(discriminant))/(2*a);
            let root2 = (-b-Math.sqrt(discriminant))/(2*a);
            result.innerHTML = "There is real and distinct root.<br>";
            result.innerHTML += "x<sub>1</sub>: " + root1 + "<br>";
            result.innerHTML += "x<sub>2</sub>: " + root2 + "<br>";
        }
    }
    else{
        result.innerHTML = "Please fill in all 3 coefficient";
    }
}

function getDiscriminant(a, b, c){
    return Math.pow(b, 2)-4*a*c;
}