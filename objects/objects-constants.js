//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const people = {
  name: "John"
};

// это будет работать?
people.name = "Pete";

console.log(people);

//Да, т.к при const нельзя объявление const защищает только саму переменную от изменений, 
// а содержимое объекта, т.е значения свойств можно менять;
// Другими словами, user хранит ссылку на объект. И это не может быть изменено.
//  Но содержимое объекта менять можно.