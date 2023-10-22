# JS_Fundamentals_homework

1.Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
початкове значення
кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
/--------------------------------------------------------------------------------------------/
function createArray(start, end){
  let result = [];
  for(let i= start; i<= end; i++){
    result.push(i);
  }
  return result;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]

2.Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
/--------------------------------------------------------------------------------------------/
function printNumbers(a, b){
  let result = [];
  let count = 0;
    for (let i=a; i<=b; i++){
      for (let j=0; j <=count; j++){
        result.push(i);
      }
      count++;
    }
  return result;
}

let printSequence = printNumbers(1, 5);
console.log(printSequence);

3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
randArray(5);  // [399,310,232,379,40]
/--------------------------------------------------------------------------------------------/
function randArray(k) {
  let result = [];
  for (let i = 0; i < k; i++) {
    let randomNumber = Math.floor(Math.random() * 500) + 1;
    result[i] = randomNumber;
  }
  return result;
}

let randomArray = randArray(5);
console.log(randomArray);
/--------------------------------------------------------------------------------------------/
4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]

function compact(arr) {
  const uniqueValues = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues[arr[i]]) {
      result.push(arr[i]);
      uniqueValues[arr[i]] = true;
    }
  }

  return result;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); // [5, 3, 4, 6, 7]

5.Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/
/--------------------------------------------------------------------------------------------/
function funcName(arr) {
    let newArr = [];
    for (const element of arr.flat(Infinity)) {
        let found = false;
        newArr.forEach((value) => {
            if (typeof value[0] === typeof element) {
                value.push(element);
                found = true;
            }
        });
        if (!found) {
            newArr.push([element]);
        }
    }
    return newArr;
}
let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = funcName(arr);
console.log(arrNew);

6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
calc(10, 3, 1); // => 7
/--------------------------------------------------------------------------------------------/
function calc(a, b, op) {
  let result;
  switch (op) {
    case 1:
      result = a - b;
      break;
    case 2:
      result = a * b;
      break;
    case 3:
      if (b !== 0) {
        result = a / b;
      } else {
        result = "Division by zero is not allowed";
      }
      break;
    default:
      result = a + b;
  }
  return result;
}

console.log(calc(10, 3, 1)); // 7
console.log(calc(10, 0, 3)); // Division by zero is not allowed


7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
/--------------------------------------------------------------------------------------------/
function findUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false; 
      }
    }
  }
  return true; 
}

console.log(findUnique([1, 2, 3, 5, 3]));  // false
console.log(findUnique([1, 2, 3, 5, 11])); // true

⭐⭐⭐
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
/--------------------------------------------------------------------------------------------/
function create(password) {
  return function(input) {
    return input === password;
  };
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom")); // Повертає true
console.log(tom("pass_for_tom")); // Повертає false
