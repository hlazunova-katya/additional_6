module.exports = function zeros(expression) {
  // your solution
    expression=expression.split('*');
    //if there are double factorials to find
    const doubleFactNums=[];
    //if there are simple factorials to find
    const factNums=[];
    //a buffer for factors
    const buffer=[];
    const result=[];
    //sorting numbers, depending on what king of factorial we need to find
    for (let i=0; i<expression.length; i++){
        if (expression[i].includes('!!')){
            doubleFactNums.push(parseInt(expression[i]));
        }
        else factNums.push(parseInt(expression[i]));
    }
    //if we have only uneven double factorials to find return 0
    //cause they have no zeroes at all
    if (!factNums.length){
        let checkEven = false;
        for (let i=0; i<doubleFactNums.length; i++){
            if (doubleFactNums[i]%2===0){
               checkEven = true;
            }
        }
        if (!checkEven) return 0;
    }
    //getting factors
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
    //getting factors with 5 on the end
    for (let i=0; i<buffer.length; i++){
        if (buffer[i]%25===0){
            result.push(5);
            result.push(5);
        }
        else if (buffer[i]%5===0){
            result.push(5);
        }
    }
    //return the number of 5s
    return result.length;
}
