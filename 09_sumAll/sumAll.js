const sumAll = function(a, b) {
    if ((a<=0||!(Number.isInteger(a)))||(b<=0||!(Number.isInteger(b)))){
        return "ERROR";
    }
    let min;
    let max;
    if (a<=b){
        min=a;
        max=b;
    }
    else{
        min=b;
        max=a;
    }
    let sum=0;
    for(;min<=max;min++){
        sum+=min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
