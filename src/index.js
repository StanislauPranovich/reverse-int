module.exports = function reverse (num) {
    num = Math.abs(num);
    let result = 0;
    while(num) {
        result = (result*10) + num%10;
        num = Math.floor(num/10);
    }
    return result;
}
