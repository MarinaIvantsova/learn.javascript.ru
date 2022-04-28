//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля
let arra = [5, 6, 7, 8, 9];
function func(elem){
    return elem > 0;
};
let check = arra.every(func);
console.log(check);  
