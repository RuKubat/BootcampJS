/* Необходимо создать объект, который будет представлять из себя лифт. У него
должны быть методы:
● toFloor - принимает целое числовое значение от 1 до 16 - переместиться на
определенный этаж.
● printFloor - печатает текущий этаж, на котором находится лифт
● upOneFloor - перемещает на один этаж вверх
● downOneFloor - перемещает на один этаж вниз
Изначально лифт находится на первом этаже. Когда мы вызываем метод toFloor(),
программа должна в консоли отобразить постепенное перемещение лифта на нужный этаж
(только в этом методе). */


let lift = {
    onFloor: 1,
    minFloor: 1,
    maxFloor: 16,

    upOneFloor(){
        if(this.onFloor < this.maxFloor) {
            this.onFloor++
            this.printFloor()
        } else {
            console.log('Wrong stage')
            return
        }
    },
downOneFloor() {
    if(this.onFloor > this.minFloor) {
        this.onFloor --
        this.printFloor()
    } else {
        console.log('Wrong stage')
        return
    }
},
printFloor() {
    console.log('You on ' + this.onFloor + 'stage')
},
toFloor: function(countOfFloor) {
    while(onFloor != this.countOfFloor) {
        if(countOfFloor > this.onFloor && countOfFloor <= 
    this.maxFloor) {
        this.upOneFloor()
    } else if(countOfFloor < this.onFloor && countOfFloor <=
    this.minFloor){
       this.downOneFloor() 
    } else {
        console.log('Wrong stage')
        return
    }
    }
}
};

lift.upOneFloor();
lift.downOneFloor();
lift.toFloor(3);
lift.toFloor(7);
lift.toFloor(23);