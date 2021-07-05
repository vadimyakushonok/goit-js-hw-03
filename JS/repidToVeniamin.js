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
Привер 5 - Шаблонные строки
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

/* Привер 7 - if...else и prompt
Используй конструкцию if....else, напишите код, который будет спрашивать:
"Какое "официальное" название JavaScript?".
Если пользователь вводит 'ECMAScript', то показать "Верно!"
в противном случае - отобразить "Не знаете? ECMAScript" */


