//Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.
const name = prompt('Введите Ваше имя');

function greeting(newName) {
    alert(`Привет, ${newName}`);
}

greeting(name);