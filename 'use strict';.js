'use strict'
const chlen = {   // создаем объект
  a: 2,
  b: 'pisda',
  c: true,
  "Fuck your JS": true,   // если свойство из нескольких св.- то берем кавычки 
};

chlen.f = false; // добавляем новое свойство
delete chlen.b   // как удалять свойство из объекта
console.log(chlen.b); // если вывести удаленное св. то выведет андефайнд ыхыхых

chlen.a = 3;
console.log(chlen.a)    // охуеть, можно измениять свойства в КОНСТАНТЕ в которую помещен объект

console.log(chlen["Fuck your JS"]); // ксли св. из нескольких слов-то вызов через точку нихуя не проканает только черех [] 

// let bouls = "Fuck you JS";

chlen[bouls] = true;

console.log(chlen[bouls]);  // так же можно присвоить выражение переменной, чтобы обойти ебучую точку если много букаф


// ВЫЧИСЛЯЕМЫЕ СВОЙСТВА ПОЧЕМУ ТАК СЛОЖНА БЛЯТЬ

let gandon = prompt("Какие гандоны купить?","contex");

let bag = {
  [gandon]: 5,       // Можно еще составлять более сложные конструкции например: [gandon + 'Wiskey'] и т.д
};

alert( bag.contex); // Если даем ответ contex то будет 5..

// let gandon = prompt("Какие гандоны купить?","contex");
// let bag = {};
// bag[gandon] = 5;            Те же яйца -только в профиль (хуже)

// Умные дяди говорят что квадратные скобки в работе со свойствами объекта развязывают руки, но большинство 
// вызовов все равно будет через точку - нахер дрочился  не понятно.


// СВОЙСТВО ИЗ ПЕРЕМЕННОЙ 

function makeUser(name, age) { // функция возвращает объект 
  return {
    name: name,
    age: age
    // и другие свойства
  };
}
let user = makeUser("Arkadiy, 40");  // даем аргумент параметрам name и age ФЛЕШБЕК ИЗ ПРОЕКТА ПО МКС АХАХАХА
console.log(user.name); 

// есть более короткий и практичный способ:
// function makeUser (name, age)  {
  // return {
//   name,
//   age
// }
// }

//  ОГРАНИЧЕНИЕ НА ИМЕНА СВОЙСТВ
// эти имена свойств допустимы:

let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj.for + obj.let + obj.return ); // зарезервированные слова языком могут употреБЛЯТся в свойствах объекта

//  Например если использовать число 0 в качестве ключа, то оно превратится в строку "0" :

let object = {
  0: "Текст"
};

console.log(object["0"])
console.log(object[0])

// ПРОВЕРКА СУЩЕСТВОВАНИЯ СВОЙСТВА, ОПЕРАТОР IN
// синтаксис "key"
let user1 = {name:"Peta", age: 30};

console.log("age" in user1); // слева от оператора IN должно быть имя свойства 
console.log("pidartvo" in user1);

let key = "age";
console.log(key in user1); // если хочется почилить без кавычек, то лучше свойство поместить в переменную

//  ЦИКЛ FOR....IN
// Синтаксис :
for (key in object) {
}

let user2 = {
  name: "Artur",
  age: 26,
  isAdmin: true
};

for (let key in user2) {
console.log(key);
console.log(user2[key]);
}

//  Упорядочение свойств объекта

let codes = {
  "+49": "Germany",
  "+41": "Swiss",
  "+44": "GreatBritain",     // Можно сделать свойства нецелочисленными свойствами добавив "+" тогда все будет по списку
  "+1": "USA" 
};

for (code in codes) {
  console.log(code);  // Сортировка идет по возрастанию целочисленного значения свойства
};

let user3 = {
  name: "John",
  surname: "Smith"
};
user3.age = 25;

for (let prop in user3) {
  console.log(prop);   // Перебираются в порядке создания свойства 
}

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Дополнительные операторы:
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
//  … и так далее.
// У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде «тип данных Array» 
// или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу данных Object. 
// Они лишь расширяют его различными способами.

// Объекты в JavaScript очень мощные. Здесь мы только немного углубились в действительно огромную тему. 
// Мы будем плотно работать с объектами и узнаем о них больше в следующих частях учебника.

// Задачи по объектам 
 

 let user4 = {
  name: "John",
  surname: "Smith"
 }
user4.name = "Pete";
delete user4.name;
console.log(user4.name);


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for(let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

function ret() {
  let num = 50;
  
}

let usdCurr = 28;
let discount = 0.8;

function convert(amount, curr) {
  return curr * amount;
}

function promotion (result) {
  console.log(result * discount)
}
const res = convert(500, usdCurr)
promotion(convert(500, usdCurr));