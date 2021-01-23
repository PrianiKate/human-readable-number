module.exports = function toReadable(number) {
    let digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tenPlus = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    if (number === 0) return 'zero';
    let hundred = (number - number % 100) / 100;
    number = number % 100;
    let str = '';
    if (hundred > 0) str += digits[hundred - 1] + ' hundred';
    let dozen = (number - number % 10) / 10;
    let digit = number % 10;
    if (dozen > 0) {
        if (dozen > 1) {
            str += str.length == 0 ? dozens[dozen - 2] : (' ' + dozens[dozen - 2]);
        } else {
            console.log(tenPlus[digit]);
            str += str.length == 0 ? tenPlus[digit] : (' ' + tenPlus[digit]);
            return str;
        }
    }
    if (digit > 0)
        str += str.length == 0 ? digits[digit - 1] : (' ' + digits[digit - 1]);
    return str;
}
