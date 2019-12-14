/* В функцию передаются переменные first и second. Проверьте, что first делится без
остатка на second. Если это так - возвращаете true, иначе возвращаете false. */

let i =+prompt('Enter');
let z =+prompt('Enter');

function some(i,z) {
    return i % z === 0;
}
alert(some(i,z));

       