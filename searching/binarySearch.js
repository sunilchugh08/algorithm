const arr = [2,5,8,12,16,23,38,56,72,91,95];


const seachElement = 380;
let endIndex = arr.length;
let startIndex = 0;
var elementFound = false;
let midIndex = Math.round((startIndex + endIndex ) /2);
while (startIndex <= midIndex){
    if(arr[midIndex] == seachElement){
        elementFound = true;
        console.log("element found at ",midIndex," position");
    }

    if(arr[midIndex] > seachElement){
        endIndex = midIndex -1;
    }else{
        startIndex = midIndex +1;
    }
    midIndex =  parseInt((startIndex + endIndex ) /2);
}

if(!elementFound){
    console.log("element not found  ");
}