var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// rotation 3 elements 12
const rotation =2;
const arrLength = arr.length;

//method 1

var temp1 = [];
for(let i =0;   i< rotation;    i++){
    temp1.push(arr[i]);
}

for(let i=0; i < arrLength-rotation; i++){
    arr[i] = arr[i+rotation];
}
let j =0;
for(let i=arrLength-rotation; i< arrLength; i++, j++){
    arr[i] = temp1[j];

}
function printarray(){
    for(let i=0; i< arrLength; i++){
        console.log(arr[i]);
    }
}

printarray(arr);


