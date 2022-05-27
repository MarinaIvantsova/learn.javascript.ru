// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. 
// Оставьте в нем только подмассивы.

let arraysAndSubarrays = [1, 2, 'gffh', [3, 4], 5, [6, 7]];

let subarrays = arraysAndSubarrays.filter((elem) => {
return Array.isArray(elem);
});

console.log(subarrays);