/* Пример 1 - определение типа значения, оператор typeof
За допомогою оператора вызначення типу переконайтеся 
що зминных належить типам: string, number, boolean. */


const productName = 'Mango';
const pricePerItem = 150;
const isOnSale = false;
const error = null;
let quantity;

console.log(typeof productName);
console.log(typeof pricePerItem);
console.log(typeof isOnSale);
console.log(typeof error);
console.log(typeof quntity);

/* Пример 2 - Базовые операторы +, -, *, /,
Вывести на экран сумму колличество яблок + колличество винограда */

const apples = 47;
const grapes = 135;
const total = apples + grapes;

console.log(total);
console.log(apples - grapes);

/* Пример 3 - Базовые операторы +, -, *, /,
Создать переменную result присвоить ей выражение 108+223-2*5 
и вывести ее значение в консоль */

const result = 108 + 223 - 2 * 5;
console.log(result);

/* Пример 4 - Объект Math
Определить площадь круга с радиусо 10 см (PR(2)). Math.pow(a,b)
- возведение в степень
 */

const area = Math.PI * Math.pow(10, 2);
console.log(area);

/* 
Пример 5 - Шаблонные строки
Написать фразу с помощью шаблонных строк 
Здраствуйте, меня зовут А, мне Б лет и мне нарвится Ц, 
где А,Б,Ц - ставленные строу */

const name = 'Mango';
const age = 5;
const hobby = 'плавать';
const message = `Здраствуйте, меня зовут ${name}, мне ${age} лет и мне нарвится ${hobby}`;

console.log(message);

/* Пример 6 - Операторы сравненийи приведение типов
Каким будет результат этих выражений */

console.log(5 > 4);
console.log(10 >= '7');
console.log('2' > '12');
console.log('2' < '12');

/* Пример 7 - if...else и prompt
Используй конструкцию if....else, напишите код, который будет спрашивать:
"Какое "официальное" название JavaScript?".
Если пользователь вводит 'ECMAScript', то показать "Верно!"
в противном случае - отобразить "Не знаете? ECMAScript" */

/* const question = prompt('Какое "официальное" название JavaScript?'); */

/* if (question === 'ECMAScript') {
    alert ('Верно!');
} else {
    alert ('Не знаете? ECMAScript"');
} */

/* const messages = question === 'ECMAScript'
? 'Верно!' 
: 'Не знаете? ECMAScript';

console.log(alert(messages)); */

/* Пример 8 - Тернарный оператор
Перепишите if...else с использованием тернарного оператора. */

const a = 6;
const b = 2;

const results = a + b < 4 ? 'Мало' : 'Много';

console.log(results);

/* Пример 9 - что выведет код */

console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && 'hello');
console.log(true && 0 && 'hello');
console.log(true || 3);
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);
console.log((1 && null && 2) > 0);
console.log(null || 2 && 3 || 4);

/* Пример 10 - Логистические операторы и if. Напишите условие if для проверки
что переменная age находится в диапазоне между 14 и 90 Включительно означает,
что значение переменной age может быть равно 14 или 90 */

const min = 14;
const max = 90;
const ages = 14;

if (ages >= min && ages <= max) {
console.log ('Все хорошо');
} else {
console.log ('ПЛОХО');
};

/* Пример 11 - Оператор %
Написать программу которая получит от пользователя число (количество минут)
и выведет на экран строку в формате часов и минут.
70 покажет 01:10
450 покажет 07:30 */

/* const allMinutes = +prompt('Введите количество минут');
const minutesPerHour = 60;

const hour = Math.floor(allMinutes / minutesPerHour);
const minutes = allMinutes % minutesPerHour;

alert(`${String(hour).padStart(2, '0')} : ${String(minutes).padStart(2, '0')}`);
 */
console.log(0.1 + 0.2 === 0.3);
