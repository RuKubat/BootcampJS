/* Создайте функцию которая принимает строку (email адресс) и возвращает булево.
Функция должна проверить правильно ли написан email.
(Такие функции называются валидаторами) */

// let email = prompt('Your E-mail')
// function validEmail(email) {
//     var re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/i;
//     return re.test(email);
// }
// console.log(validEmail(email));




function discountPrices(prices, discount) {
    var discounted = []
    for(var i = 0; i < prices.length; i++)
    {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(FinalPrice)
    }
    console.log(i)
    console.log(discountedPrice)
    console.log(finelPrice)
    return discounted
    }
    console.log(i)