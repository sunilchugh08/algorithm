var str = "zACaAbbaazzC";
var count =0;

for(let s of str){
    let code = s.charCodeAt();
    if(code >=97 && code <= 122){
        count++;
    }
}

console.log("count ", count);