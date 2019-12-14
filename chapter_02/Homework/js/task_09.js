function diap(num) {
    let i = 1;
    let arr = [];
    while(i != num) {
        arr.push(i)
        if(i < num) {
            i++;
        } else if (i > num) {
            i--
        }
    }
    arr.push(num)
return arr.join()
}
console.log(diap(-2));
