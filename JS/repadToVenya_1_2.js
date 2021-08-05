/* Пример 1 цикл for
Напишите цикл for который выводит в консоль браузера числа по 
возрастанию от min до max */

// let count = 1;
// let a = count++;

// console.log(a);

// a = ++count;
// console.log(a);

const s = 'jjj';
let result = '';

for (let i = 0; i < s.length; i++) {
    if (i === 0) {
        result += s[i].toUpperCase();
      continue;
    }
    result += s[i];

}

console.log(result);