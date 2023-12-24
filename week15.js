//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i < 11; i++) {
    console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i < 21; i++) {
    if(i%2===0){
    console.log(i);
    }
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i < 11; i++) {
    console.log(i * 5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i < 101; i++) {
    sum = sum + i; 
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sumArray = 0;
for(let i = 0; i < numbers.length; i++){
    sumArray = sumArray + array[i];
}
console.log(sumArray);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Обезьяна", "Тигр", "Панда"];
for(let i = 0; i < animals.length; i++){
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let symbol of str) {
    console.log(symbol);
    }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let symbol of array) {
    console.log(symbol);
    }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
const sentencesJoin = sentences.join(' ');
const sentencesSplit = sentencesJoin.split(' ');
for(let symbol of sentencesSplit){
    console.log(symbol);
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sumNumbers = 0;
for(let symbol of numbers){
    sumNumbers = sumNumbers + symbol;
}
console.log(sumNumbers);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for(let symbol of list){
    console.log(symbol.length);
}
//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
{
const words = ['Hello', 'world', '!'];
for(let i = 0; i < words.length; i++){
    words[i] = words[i].toUpperCase();
}
console.log(words);
}
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for(let symbol of greeting){
    if(vowels.includes(symbol)){
        vowelCount = vowelCount + 1;
    }
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
const wordsJoin = words.join(' ');
console.log(wordsJoin);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let num = 0;
while(num < 10){
    console.log(num);
    num++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let num2 = 10;
while(num2 >= 1){
    console.log(num2);
    num2--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
{
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let i = 0;
while(allNumbers[i]>0){
        console.log(allPositive);
        i +=1;
        // break; он тут не нужен, цикл же выполняется до тех пор пока не встретит отрицательное число
}
}


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i = 0;
do {
    console.log(random[i]);
    i++;
}while(random[i]%2===0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let numder = 1;
do{
    if(numder % 3 === 0){
    console.log(numder);
    }
    numder++; 
}while(numder <=100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

{
    let sum = 0;
    do{
        let num = prompt("Введите число:");
        console.log(num);
        sum += Number(num);
        console.log(sum);
    }while(sum <= 100)
}


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const title = document.querySelectorAll('h4');
const getBlueTitle = () =>{
    for(let item of title){
    item.style.backgroundColor = '#00f';
    }
}
getBlueTitle();

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
while(randomString.length < 6){
    const index = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[index];
}
console.log(randomString);
