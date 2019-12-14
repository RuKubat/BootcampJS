/* Напишите функцию которая принимает массив с названиями стран и 
возвращает страну с самым длинным названием
(затем страну с самым коротким названием) */

// let countryList = ['Kyrgyz Republic', 'Australia', 
// 'Spain', 'Mali', 'Brazil' ];
// function sortCountries() {


// }
// sortCountries(countryList);


 let countries = [
'Kyrgyz Republic', 'Australia', 
'Spain', 'Mali', 'Brazil'
];

function veryLongCountry(arr){
    let sortArr = arr.sort(function(a,b){
        return a.length - b.length;
    })
    return sortArr.pop()
}
console.log( veryLongCountry(countries) );


let country = [
'Kyrgyz Republic', 'Australia', 
'Spain', 'Mali', 'Brazil'
];

function veryShortCountry(arr){
    let sortArr = arr.sort(function(a,b){
        return b.length - a.length;
    })
    return sortArr.pop()
}
console.log( veryShortCountry(country) ); 









// for(let i = 0; i < countryList.length; i++)
//     alert(countryList[i]);
// console.log(sortCountries);