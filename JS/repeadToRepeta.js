// повтор за Репетой 2-го модуля вспомнить ВСЕ!!!!
/* const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];

console.log(friends);
console.table(friends);

console.log(friends.length);

const lastIndex = friends.length - 1;
console.log(lastIndex);

console.log(friends[2]);

friends[1] = 'jhbdhb';
console.log(friends);

// Перебор массива если нужно знать индекс

for (let i = 0; i <= friends.length - 1; i +=1) {
    console.log(i, friends[i]);
/*     console.log(i); */
/* };

for (const friend of friends) {
    console.log(friend);
}; */ 

// Посчитать общую сумму покупок в корзине

// const carts = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const cart of carts) {
// total += cart;
// }

// console.log(total);

// // Изпользуя счетчик изменить элекменты массива

// for (let cart = 0; cart < carts.length; cart += 1) {
//     carts[cart] = Math.round(carts[cart] * 1.1);
// }

// console.log(carts);

// // Напиши скрипт который подсчитывает значения всех четных чисел в массиве

// const numbers = [1, 2, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let totalEven = 0;
// let totalUneven = 0;


// for (let number = 0; number < numbers.length; number += 1) {
//     if (numbers[number] % 2 === 0) {
//         totalEven += numbers[number];
//     }
//     else {
//         totalUneven += numbers[number]
//     }

// }
// console.log(`сумма Четное: ${totalEven}, сумма Нечетное: ${totalUneven}`);


// Напиши скрипт поиска логина 
// Если логина нет, вывести сообщение "Пользователь [логин] не найлен"
// Если нашли логин, вывести сообщение "Пользователь [логин] найден"

// const logins = ['mango', 'kiwi', 'poly', 'ajax'];
// const loginToFind = 'poly';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} НЕ найден`;
//  }

// const message = logins.includes(loginToFind) 
//     ? `Пользователь ${loginToFind} НАЙДЕН`
//     : `Пользователь ${loginToFind} НЕ Найден`;

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

// const add = function (x, y) {
//     console.log(x);
//     console.log(y);

//     const result = x + y;
//     // const result2 = x * y;
//     // console.log('x + y: ', result);
//     // console.log('x * y: ', result2);
//     console.log('Выполняется функция add');

//     return result;
// };

// const r1 = add (5, 3);
// console.log(r1);

//Напиши функцию которая принимает массив цен (чисел) и возвращает их сумму
/* const calculateTotalPrice = function (items) {
    let total = 0;
    for (const item of items) {
        total += item;
    }

    return total;
}
console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));
 */


//Функия поиска логина в массиве логинов
/* const logins1 = ['Mango', 'Ajax', 'Kiwi', 'Poly'];
const logins2 = ['Vasya', 'Petya', 'Vanya', 'Saha'];

const findLogin = function (logins, loginToFind) {

        const message = logins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден`
        : `Пользователь ${loginToFind} не найден`
    
return message;
}
console.log(findLogin(logins1, 'Mango'));
console.log(findLogin(logins1, 'tramparam'));
console.log(findLogin(logins2, 'Vasya'));
console.log(findLogin(logins2, 'thjj')); */

//Функция поиска наименьшего числа
/* const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber
}
console.log(findSmallestNumber([3, 5, -2, 6]));
console.log(findSmallestNumber([3, 5, -2, 6, -8]));
console.log(findSmallestNumber([10, 11, 45, 2])); */

//Напиши функцию которая заменяет регистр каждого символа в строке на противоволожный 
/* const changeCase = function (string) {
    const letters = string.split('');
    let changeString = '';
    
    for(const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();
        changeString += isInLowerCase 
        ? letter.toUpperCase() 
        : letter.toLowerCase();
    }
    return changeString;
}
console.log(changeCase('JavaScript'));
console.log(changeCase('VadimusForever')); */


// Скрипт по приведению строки в слаг (сделать в форме функции)
/* const title = 'Top 10 benefits of React framework';
const normalizeTitle = title.toLowerCase();
const slagTitle = normalizeTitle.split(' ').join('-');
console.log(slagTitle); */
/* const slagTitleFunctoin = function (title) {
    const slagTitle = title.toLowerCase().split(' ').join('-');  
    return slagTitle;
}
console.log(slagTitleFunctoin('Top 10 benefits of React framework'));
console.log(slagTitleFunctoin('thfHHfh Tgjgjgj fgjgjg j jLL jjj')); */

// Функции с помощью Array.from (по старому) и просто с помощью операции rest - ...args (по Новому). Исполь
// в случае когда передается разное количество аргументов в параметры
/* const fn = function (params) {
    console.log(arguments);
    const args = Array.from(arguments);
    console.log(args);
}; */
const fn = function (a, b, ...params) {
    console.log(`${a} ${b}`);
    console.log(params);
    
}
fn(1, 2 , 3);//1 2 [3]
fn(1, 2, 3 , 4); // 1 2 [3, 4] в итоге записались только первых два аргумента а остальное пошло в массив

const message = ['Welcome to Bahamas!', 5];
const ob = String(message);

console.log(message); // Welcome to Bahamas!
console.log(ob);

console.log(message.indexOf('to')); // 8