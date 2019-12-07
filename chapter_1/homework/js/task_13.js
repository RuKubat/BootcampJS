var radius = +prompt('Vvedite radius kruga');
var s = Math.floor(Math.PI * radius * radius) +'^2';
var p = Math.floor(2 * Math.PI * radius);
alert(s + '\n' + p);