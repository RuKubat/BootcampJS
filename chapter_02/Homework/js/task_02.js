/* Напишите функцию которая принимает два аргумента, строку и букву и
возвращает количество сколько раз эта буква встречается в строке. */


/* function countLetter(str)
{
       var length = str.length; 
       count = 0;                        
       for(n = 0; n < length; n++)
       {
           var c = str.charAt(n);      
           if(c == 't')            
          count++;
        }
      return count;
 }
console.log(countLetter('ReturnOftheking')); */



 function wordString(str, letter){
    return str.split("").filter(function(item){
        return letter === item
    }).length
}

function a(str, letter){
    let filterParam = function(item){
        return letter === item
    }

    let arr = str.split("");
    
    let filterArr = arr.filter(filterParam)
    let count = filterArr.length;
    
    console.log(str, letter, arr, filterArr, count)

    return count;
}
console.log(wordString('occupation', 'o'))
console.log(a('occupation', 'o')) 

 
