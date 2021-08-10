/* Пример 1 цикл for
Напишите цикл for который выводит в консоль браузера числа по 
возрастанию от min до max */

// let count = 1;
// let a = count++;

// console.log(a);

// a = ++count;
// console.log(a);

/* const s = 'jjj';
let result = '';

for (let i = 0; i < s.length; i++) {
    if (i === 0) {
        result += s[i].toUpperCase();
      continue;
    }
    result += s[i];

}

console.log(result); */

// Пример №1 - Цикл for
// Напишите цикл for  который выводит в консоль браузера 
// числа по возрастанию от min  до max

/* const max = 100;
const min = 20;

for (let i = min; i <= max; i++) {
  console.log(i);
} */

// Пример №2 - цикл for
// Напишите цикл for который выводит в консоль браузера числа по убыванию
// от max до min

/* const max = 100;
const min = 20;

for (let i = max; i >= min; i--) {
  console.log(i);
}; */

// Пример 3 - Цикл for
// При помощи цикла for выведите четные числа от 2 до 10.
// Решение 2: c continue
// Решение 3: меньше кода и итерации

const max = 10;
const min = 2;

// Решение 1: больше кода и итерации 
for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Решение 2: c continue
for (let i = min; i <= max; i++) {
  if (i % 2 !== 0) {
    continue
  };
  console.log(i);
}

// Решение 3: меньше кода и итерации
for (let i = min; i <= max; i +=  2) {

}
