// // Дан массив с числами. 
// Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти
let array = [1, 7, 6, 1, 4, 5, 6];
let answer = 0;
let result = array.reduce((prevValue, elem) => {
    if (prevValue > 10) {
		console.log(answer);
	} else {
		answer++;
		return prevValue + elem;
	}
}, 0);



