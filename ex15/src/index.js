// only change code below this line
function myDoWhile() {
    var myNumbers = "";

    var i = 0;
    do {
        myNumbers += i;
        if(i !== 9) myNumbers += ", ";
        i++;
    } while(i < 10);

    return myNumbers;
}

console.log(myDoWhile());

// only change code above this line
module.exports = myDoWhile;
