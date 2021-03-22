const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);

user.mood = 'happy';
console.log(user);

user.hobby = 'skydiving';
console.log(user);

user.premium = false;
console.log(user);

const keys = Object.keys(user);
console.log(keys);



/* const name = 'rjrjr'
const capasity = 6

const hotel = {
    name,
    capasity,
    tramparam: 'ononline',
}

console.log(hotel);

console.log(hotel.name);
console.log(hotel['name']);

hotel.name = 'Resort';

console.log(hotel.name);

hotel['name'] = 'Resort hotel';
console.log(hotel.name);

console.log(hotel.stars);

hotel.stars = 5;
console.log(hotel);

delete hotel.tramparam;
console.log(hotel); */

/* const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  hotel.greet = function () {
    console.log('Welcome!');
  };
  
  hotel.greet(); // Welcome!

  console.log(hotel);
   */
/* 
  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };
  
  // Перебор ключей объекта hotel
  for (const key in hotel) {
    console.log('Key: ', key);
  }  

  console.log(Object.keys(hotel));
  console.log(Object.values(hotel));
  console.log(Object.entries(hotel));
  const entries = Object.entries(hotel);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key}: ${value}`);
  }

  const add = function (value, ...args) {
    console.log(value); // первый аргумент
    console.log(args); // массив всех остальных аргументов
  };
  
  add(10, 1, 2, 3);
  add(15, 1, 2, 3, 4, 5); */