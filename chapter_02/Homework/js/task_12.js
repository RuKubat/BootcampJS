/* Теперь создайте валидатор для тел номера, 
дополнительно вытащите код страны
Пример для телефона: +996700405060 */

let number = prompt('Your number');
function validNum(number) {
    var re = /(\+\d{1,4}\s)|(\d+\s?)(\d\s?)/;
    var code = /^\+\d+\s/;
    console.log(re.test(number));
    return number.match(code);
}
console.log(validNum(number));