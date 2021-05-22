var str = [4,8,3,9];
var count =0;

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;  
        y  = x % y;  
        x = t;    
    }
    return x;
  }

  for(let i=0; i< str.length-1; i++){
      for(let j= i+1; j< str.length; j++){
          if(gcd_two_numbers(str[i],str[j]) == 1){
              count++;
          }
      }
  }

console.log(" co prime count is ",count);