var arr = [7, 1, 2, 3, 4, 5, 6];

const arrLength = arr.length;

function sortArray(){
    for(let i=0;i<arrLength -1 ; i++){
        for(let j= i+1; j < arrLength ; j++){
             if(arr[j]< arr[i]){
                 let temp  = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
        }   
    }
}
sortArray();
function printarray(){
    let j = arrLength;
    for(let i=0; i< arrLength; i++){
        if(i >= j-1){
            console.log(arr[j-1]);
            break;
        }
      
        console.log(arr[j-1]);
        console.log(arr[i]);
        j--;
       
    }
}

printarray(arr);