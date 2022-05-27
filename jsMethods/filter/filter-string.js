// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let stringsArray = ['dhcbsdjc', 'sdbchjbdsjkcnsdkj', 'dhd', '', 'djscndjsnc'];

console.log(stringsArray.filter((elem) => {
    return elem.length > 5;
    }));


