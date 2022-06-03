// Что выведет код ниже?

// alert( null || 2 || undefined ); // 2
// alert( alert(1) || 2 || alert(3) ); // Сначала 1, потом 2
// alert( 1 && null && 2 ); // null
// alert( alert(1) && alert(2) ); // Сначала 1, затем undefined
// alert( null || 2 && 3 || 4 ); // 3