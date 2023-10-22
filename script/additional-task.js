/*
***(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.  (потребує використання closure)
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
*/
const openTask = document.querySelector("#taskEight");

openTask.addEventListener('click', function () {
    console.log("Task Additionals");
    console.log(tom("pass_for_Tom")); // Повертає true
    console.log(tom("pass_for_tom")); // Повертає false
    alert("You need to open the console to view.");
});

function create(password) {
    return function(input) {
      return input === password;
    };
  }
  const tom = create("pass_for_Tom");