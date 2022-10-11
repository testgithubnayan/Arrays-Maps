let dieRollMap = new Map();
while(true) {
    let numOnDie = Math.floor(Math.random() * 6) + 1;
    if (dieRollMap.has(numOnDie)) {
        let count = dieRollMap.get(numOnDie);
        count++;
        dieRollMap.set(numOnDie, count);
        if(count == 10){
        console.log("Number that appeared Maximum times : " + numOnDie);
            break;
        }
    }
    else {
        dieRollMap.set(numOnDie, 1);
    }
}

let numThatAppearedLeast;
let minimumCountOfParticularNumber = 10;

for (let [key, value] of dieRollMap) {
    if(value < minimumCountOfParticularNumber){
        minimumCountOfParticularNumber = value;
        numThatAppearedLeast = key;
    }
}
console.log("Number That appeared Least times: " + numThatAppearedLeast);
console.log(dieRollMap);
