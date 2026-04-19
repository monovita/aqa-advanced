// Завдання 2: Конкатенація рядків та шаблонний рядок

//Створіть дві змінні, які містять імена двох осіб.
let firstPerson = 'Joanna';
let secondPerson = 'Samantha';

// Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб.
let congratsForDuet = 'Congrats to ' + firstPerson + ' and ' + secondPerson + ' with new achievements!';
// Виведіть результат в консоль.
console.log(congratsForDuet);
// Потім використайте шаблонний рядок для створення того ж вітання.
congratsForDuet = `Congrats to ${firstPerson} and ${secondPerson} with new achievements!`;
// Виведіть результат в консоль.
console.log(congratsForDuet);
