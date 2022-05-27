//Дан массив с числами. Оставьте в нем только отрицательные числа.
let numberssArray = [5, -3, -4, 5];
let funct = (elem) => {
    return elem < 0;
};
let newArra = numberssArray.filter(funct);
console.log(newArra);

//Своим результатом метод возвращает новый массив, в который войдут только те элементы, для которых переданная функции вернет true.