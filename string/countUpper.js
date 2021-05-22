var str = "*GeEkS4GeEkS*";

var upperCase = 0;
var lowerCase = 0;
var numeric = 0;
var specialCharcter = 0;
for(let code of str){
    let c = code.charCodeAt();
    if(c >= 65 && c <= 90){
        upperCase++;
    }else if(c>=97 && c <=122){
        lowerCase++;
    }else if(c >=48 && c<= 57){
        numeric++;
    }else{
        specialCharcter++;
    }
}

console.log("upper case",upperCase);
console.log("lower case",lowerCase);
console.log("numeric", numeric);
console.log("special ", specialCharcter);