/*
6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
calc(10, 3, 1); // => 7
*/
const openTask = document.querySelector("#taskSix");

openTask.addEventListener('click', function () {
    console.log("Task №6");
    console.log(calc(10, 3, 1)); // 7
    console.log(calc(10, 0, 3)); // Division by zero is not allowed
    alert("You need to open the console to view.");
});

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