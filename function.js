// Задание 1 

/* Спросить у пользователя age и отправить в функцию 18+ Впускаем
18- Выгоняем
Не цифра или меньше 0 - Дебил */ 

let age = +prompt("Введите сколько вам лет:")
let toAge = function() {
    if (age < 18) {
        console.log("Ваш возрост не подходит - ВЫГОНЯЕМ!!!");
    } else if (age >= 18) {
        console.log("Впускаем!");
    } else if (age != Number) {
        console.log("Дебил!");
    }
}

toAge()

// Задание 2 

/* Спросить у пользователя a и b Отправить их в функцию Функция выводит в консоли ответ с помощью методов  ( + - / * ** % ) */

let a = +prompt("Число-1:")
let operator = prompt("+_-_/_*_**_%")
let b = +prompt("Число-2:")

let сalculator = function() {
    if (operator === '+') {
        console.log(`${a} + ${b} = ${a + b}`);
    } else if (operator === '-') {
        console.log(`${a} - ${b} = ${a - b}`);
    } else if (operator === '/'){
        console.log(`${a} / ${b} = ${a / b}`);
    } else if (operator === '*'){
        console.log(`${a} * ${b} = ${a * b}`);
    } else if (operator === '**'){
        console.log(`${a} ** ${b} = ${a ** b}`);
    } else if (operator === '%'){
        console.log(`${a} % ${b} = ${a % b}`);
    } else {
        console.log('Что-то пошло не так:');
    }
}

сalculator()

// Задание 3 

/* Самое длинное имя в списке
Отправляем функции три аргумента с разными именами
Функция возвращает максимально длинное имя
max_name('Alex', 'George', 'Michael') */ 

let name = ['Alex', 'George', 'Michael', 'Akhmad', 'Konstantin', 'Vasiliy', 'RajKapur', 'Farrukh',  'Vladimir'] 

    console.log(name);

let toName = function() {
    name.forEach(element => {
        console.log(element.length);
        if (element.length >= 10) {
            console.log(element);
        }
    });
}

toName()

//Задача 4 

/* Обратный инжиниринг с массивом
      функция сама понимает как найти мин
      не смотря какие параметры мы отправляем */

let aa = prompt("Выведите параметры a;")
let bb = prompt("Выведите параметры b;")

let toMin = function () {
    if (aa > bb) {
        console.log('min ' + 'b:' + bb);
    } else if (a < b) {
        console.log('min ' +"a:" + aa);
    } else if (a === b) {
        console.log(`Равны - a:${aa} = b:${bb}`);
    }
}

toMin()

// Задание 5

/* Создать функцию которая делает пропорции не в   зависимости от каких  либо цифр */ 

let pro = +prompt('Любую цифру пиши я сделаю пропорцию') 

let toPro = function () {
    console.log(`${pro / 2} = ${pro / 2}`);
}

toPro()
