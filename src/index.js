module.exports = function zeros(expression) {
  // your solution
    expression=expression.split('*');

    const doubleFactNums=[];
    const factNums=[];
    const buffer=[];
    const result=[];
    let checkEven = false;

    for (let i=0; i<expression.length; i++){
        if (expression[i].includes('!!')){
            doubleFactNums.push(parseInt(expression[i]));
        }
        else factNums.push(parseInt(expression[i]));
    }
    for (let i=0; i<doubleFactNums.length; i++){
        if (doubleFactNums[i]%2===0){
            checkEven=true;
        }
    }
    if (!checkEven&&!factNums.length) return 0;

    for (let i=0; i<factNums.length; i++){
        for (let j=factNums[i]; j>0; j--){
            buffer.push(j);
        }
    }
    for (let i=0; i<doubleFactNums.length; i++){
        for (let j=doubleFactNums[i]; j>=1;){
            buffer.push(j);
            j-=2;
        }
    }

    for (let i=0; i<buffer.length; i++){
        if (buffer[i]%25===0){
            buffer.push(5);
            buffer.push(5);
        }
        else if (buffer[i]%5===0){
            result.push(5);
        }
    }
    return result.length;
}
