// Каким будет результат выполнения этого кода?

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// }

// (user.go)()

/*Ошибка появляется, потому что точка с запятой пропущена после user = {...}.

JavaScript не вставляет автоматически точку с запятой перед круглой скобкой (user.go)(), 
поэтому читает этот код так:

let user = { go:... }(user.go)()
Теперь мы тоже можем увидеть, 
что такое объединённое выражение синтаксически является вызовом объекта { go: ... }
 как функции с аргументом (user.go). 
И это происходит в той же строчке с объявлением переменной let user,
 т.е. объект user ещё даже не определён, поэтому получается ошибка.

Если мы вставим точку с запятой – всё заработает:

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
};

(user.go)() // Джон

Обратите внимание, что круглые скобки вокруг (user.go) ничего не значат. 
Обычно они определяют последовательность операций (оператор группировки), 
но здесь вызов метода через точку . срабатывает первым в любом случае, 
поэтому группировка ни на что не влияет. 
Только точка с запятой имеет значение. */