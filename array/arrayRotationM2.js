var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// rotation 3 elements 12
const rotation =  3;
const arrLength = arr.length;

//method 2
for(let i=0; i < arrLength - rotation; i++){
    let temp = arr[i];
    arr[i] = arr[i+rotation];
    arr[i+rotation] = temp;
}

function printarray(){
    for(let i=0; i< arrLength; i++){
        console.log(arr[i]);
    }
}

printarray(arr);


