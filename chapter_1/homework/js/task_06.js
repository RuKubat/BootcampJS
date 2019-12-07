var age = +prompt('Skolko vam let?');

    if(age <= 0 || age > 110 || isNaN(age)) { 
    alert('Vvedite pravilnuy vozrast');
}   else if(age <= 13) {
    alert('Kung Fu Panda');
}   else if(age <= 17) {
    alert('Zvezdnie voinu');
}   else if (age >= 18) {
    alert('Posmotrite \'Dikie istorii\'');
}
