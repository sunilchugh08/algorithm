var str = "geeGkEEsKS";
var str = "GeEkKg";

var lowerCase = "";
var upperCase = "";
for(let s of str){
    c = s.charCodeAt();
    if(c >= 97 && c <= 122){
        lowerCase += s;
    }else if(c >=65 && c <=90){
        upperCase+=s;
    }
}

if(lowerCase.toUpperCase() == upperCase){
    console.log("lower and upper case character follow same order");
}else{
    console.log("no")
}