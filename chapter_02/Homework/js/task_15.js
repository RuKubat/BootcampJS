/* Функция принимает параметр min. Параметр должен являться числом. 
В нем лежит число от 0 до 59. Функция должна возвращать в какую 
четверть часа попадает это число (впервую, вторую, третью или четвертую). */

let min = prompt('Minutes');
function Quarters(min) {
    if(min >= 0 && min <= 15){
        return('In first quarter')
    } else if(min <= 30){
        return('In second quarter')
    } else if(min <= 45){
        return('In third quarter')
    } else if(min <= 60){
        return('In forth quarter')
    }
}
alert(Quarters(min));




