// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// 'use strict'
// const number = prompt("enter number");
// if (+number === 10) {
//   alert('Вірно ');
// } else
// alert('невірно');
// console.log(number);

// // ===============================================================================================// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// 'use strict'
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min >= 0 && min < 14) {
//   alert(`${min}  входіт в першу чергу `);
// }
//   else if  (min >= 15 && min < 29){
//     alert(`${min} входит в другу чверть`)
// }
// else if (min >= 30 && min < 44) {
//   alert(`${min} входить в третью четверть`);
// }
// else if (min >= 45 && min < 59) {
//   alert(`${ min } входить в четверту четверть`);
//   }


// ============================================================================================
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.



// const num = prompt ('введите номер сезона(1-4)', '1');
// switch (num) {
//   case '1':
//     alert('зима');
//     console.log('зима')
//     break;
//   case '2':
//     alert('весна');
//      console.log('весна');
//     break;
//   case '3':
//     alert('лето');
//      console.log('лето');
//     break;
//   case '4':
//     alert('осень');
//      console.log('осень');
//     break;
//   default:
//     alert('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
//      console.log('Вибачте, але ви маєте ввести значення від 1 до 4 включно');
// }
// console.log(num);
// function getSeason() {
//   const num = prompt('Введите номер сезона (1 - 4)', '1');
//   let result;

//   switch (num) {
//     case '1':
//       result = 'Зима';
//       break;
//     case '2':
//       result = 'Весна';
//       break;
//     case '3':
//       result = 'Лето';
//       break;
//     case '4':
//       result = 'Осень';
//       break;
//     default:
//       result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//   }

//   console.log(result);
// }

// getSeason();
// // ===================================================================================================
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// задаємо функцію
// function converToTime() {

//   //вводім змінну для діі користувача тільки число
//   const teim = parseInt(prompt('введіте кількість хвилин'));

//   // находім повне колічество часов
//   const hour = Math.floor(teim / 60);

//   // находим количество оставшихя минут от деления
//   const remainingMinutes = teim % 60;

//   //  виводимо результат як години і хвилини
//   const formattedTime = `${String(hour).padStart(2, '0')}:${String(
//     remainingMinutes
//   ).padStart(2, '0')}`;

//    console.log(formattedTime);


// }
// converToTime();
// // ====================================================================================================
// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// Запит логіна
// const login = prompt("Введіть ваш логін:");

// if (login === null || login === '') {
//   // Якщо нічого не введено або натиснуто Cancel
//   alert('Скасовано');
  
// } else if (login === 'Адмін') {
//   // Якщо логін "Адмін"
//   const password = prompt('Введіть ваш пароль:');

//   if (password === null || password === '') {

//     // Якщо користувач натиснув Cancel або не ввів пароль
//     alert('Скасовано');

//   } else if (password === 'Я головний') {

//     // Якщо введено правильний пароль
//     alert('Добрий день!');

//   } else {
//     // Якщо пароль невірний
//     alert('Невірний пароль!');
//   }
// } else {
//   // Якщо логін не "Адмін"
//   alert('Я вас не знаю');
// }
  
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// створюємо змінну
// let number = 0
// // задаємо цикл
// while (number <=20) {
//   // виводимо результат зі зміной 1,завершеня цикла 19
//   console.log(number);
//   number += 1;
// }


// через функцію
// function seriesOfNumbers(start, end) {

//   //создаємо локальну змінну
//   let number = start;
// // запускаєм цикл с условіямі
//   while (number < end) {
//     console.log(number);
//     number += 1;
//   }
// }
// // визиваємо функцію
// seriesOfNumbers(0,20);
// ==========================================================================================
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {

//   for()
// }
// function getNumbers(min, max) {
//   // Змінна для збереження суми парних чисел
//   let sumEven = 0;

//   // Цикл для перебору чисел від max до min
//   // Важливо, що не потрібно створювати нові змінні тут, ми просто використовуємо i у циклі
//   for (let i = max; i >= min; i--) {
//     console.log(i); // Виводимо поточне число

//     // Перевіряємо, чи число парне
//     if (i % 2 === 0) {
//       sumEven += i; // Додаємо парне число до суми
//     }
//   }

//   // Повертаємо суму парних чисел
//   return sumEven;
// }


// // Пример вызова функции с любыми значениями min и max
// // const result = getNumbers(2, 8); // можно заменить на любые другие
// const result = getNumbers(-2, 8);
// console.log("Сума парних чисел:", result);
// =============================================================================
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
  // Повертаємо меньшее из двух чисел :  используем тернарний оператор // Логіка  роботи тернарного оператора Есликщо условие до знака ? истинно (a < b), то повертається значение, стоящее перед двоеточием,  у нас  a.

// Если условие ложно (a >= b), то возвращается значение после двоеточия, в данном случае b.
//   return a < b ? a : b;
// }
// console.log(min(5, 10)); // Выводит 5
// console.log(min(15, 10)); // Выводит 10
// console.log(min(5, '10')); // Выводит 'Not a number!'
// console.log(min('5', 10)); // Выводит 'Not a number!'
// // ============================================================================================
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//     else {
//       return confirm('Вам є 18 років');
    
//     }
  
// }
// // Пример вызова функции:
// console.log(isAdult(20)); // Выведет true, так как 20 >= 18
// console.log(isAdult(16)); // Выведет результат confirm (true или false)
// ======================================================================================
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//    if (num % 3 === 0 && num % 5 === 0) {
//      return 'fizzbuzz';
//    }
//   if (num % 3 === 0) {
//     return 'fizz';
//   }
//   if (num % 5 === 0) {
//     return 'buzz';

//   }
 
// }
// console.log(fizzBuzz(3));//виводить в консоль 'fizz',
// console.log(fizzBuzz(5));//виводить в консоль 'buzz',
// console.log(fizzBuzz(15));//виводить в консоль 'fizzbuzz'.
// console.log(fizzBuzz(4));//undefaned
// =================================================================================