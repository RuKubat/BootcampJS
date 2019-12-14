/* Функция принимает количество часов (проверить что это число). 
Функция возвращает количество секунд в переданых часах. */

let a =+prompt('Hours');
function inSeconds(s) {
    if(isNaN(a)){
        return('Enter in numbers')
    } else{
        a = 3600 * s;
        return a
    }
}
alert(inSeconds(a));