'user strict';
//завдання 7-8 модуль

//task-1
// 1 - отримай body елемент і виведи його в консоль;

const bodyElm = document.body;
console.log(bodyElm);

// 2 - отримай елемент id="title" і виведи його в консоль;

const idElem = document.querySelector('#title');
console.log(idElem);


// 3 - отримай елемент class="list" і виведи його в консоль;

const gElem = document.querySelector('.list');
console.log(gElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const generalElm = document.querySelectorAll('[data-topic]');
console.log(generalElm);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElem = document.querySelector('[data-topic]');
console.log(firstElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const elemWidtDataTopic = document.querySelectorAll('[data-topic]');
if (elemWidtDataTopic.length > 0) {
  const lastElem = elemWidtDataTopic[elemWidtDataTopic.length - 1];
  console.log(lastElem);
} else { console.log('нема нічого'); }

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const hElem = document.querySelector('h1');
console.log(hElem);
if(hElem){const nextElem = hElem.nextElementSibling;
  console.log(nextElem);
}
else { console.log(errr); }



// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const titleElem = document.querySelectorAll('h3');
console.log(titleElem);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const hListElem = document.querySelectorAll('h3');//находим список елементів h3
console.log(hListElem);

hListElem.forEach(elem => {
  elem.classList.add('active');//метод можно використовувати для окремих елементів 
  elem.style.color = 'red';
  console.log(elem);
  
});
 
// 10,11 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const elemDataTopic = document.querySelector('li[data-topic="navigation"]');
// Перевіряємо, чи елемент знайдено
if (elemDataTopic) {
  // Змінюємо стиль через JS
  elemDataTopic.style.backgroundColor = 'yellow';
  // Додаємо атрибут style безпосередньо в HTML використовуючі метод setAttribute
  elemDataTopic.setAttribute('style', 'background-color: yellow;');
  console.log(elemDataTopic);
} else {
  console.log('Елемент з атрибутом data-topic="navigation" не знайдено');
}

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим


// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// Знаходимо елемент li з атрибутом data-topic="navigation"
const dataTopicElement = document.querySelector('li[data-topic="navigation"]');
// Перевіряємо, чи знайдено li[data-topic="navigation"]
if (dataTopicElement) {
  // Шукаємо елемент p всередині знайденого li
  const paragrafElement = document.querySelector('p');
  // Перевіряємо, чи знайдено елемент p
  if (paragrafElement) {
    paragrafElement.textContent = 'Я змінив тут текст!';
    console.log(paragrafElement);
  } else {
    console.log('Елемент <p> не знайдено в li[data-topic="navigation"]');
  }
} else {
  console.log('Елемент li[data-topic="navigation"] не знайдено');
}




// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
// ===================================================
//task-2

// Створіть контейнер div (з класом numberContainer )в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// =========================================================================
//task-3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// =============================================================
//task-4
 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

