let numbers = [];
for(var i = 0; i < 10; i++){
    
    numbers.push(Math.floor(Math.random() * 899) + 100);
}

var firstMax = numbers[0];
var firstMin = numbers[0];
var secondMax = numbers[0];
var secondMin = numbers[0];

for(var i=0;i<10;++i){
    if(numbers[i] > firstMax){
        secondMax = firstMax;
        firstMax = numbers[i];
    }
    else if(numbers[i] > secondMax){
        secondMax = numbers[i];
    }
    if(numbers[i] < firstMin){
        secondMin = firstMin;
        firstMin = numbers[i];
    }
    else if(numbers[i] < secondMin){
        secondMin = numbers[i];
    }
}
console.log("Second Max number in array is ",secondMax)
console.log("Second MIn Number in array is ",secondMin)
