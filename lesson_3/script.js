// Задание №1 
// с помощью JavaScript создать всплывающее диалоговое окно с произвольным текстом:
// например, «Привет, Мир!».
// alert('Привет, мир!');

// Задание №2 
// вычислить результат 158+2 и вывести значение выражения в диалоговое окно.
// alert(158+2); выведет 160
// alert(`158 + 2 = ${158+2}`); //158 + 2 = 160

// Задание №3 
// передать строковый параметр в диалоговое окно. 
// Например, вывести «Привет, Алевтина!», где имя — это передаваемый параметр.
// const name = 'Алевтина'
// alert(`Привет, ${name}`)

// Задание №4 
// вызвать диалоговое окно с заголовком «Как вас зовут?» 
// и подсказкой «Имя» в поле ввода. Затем вывести имя, которое ввели.
// const yourName = prompt('Введите Ваше имя', 'имя');
// alert(yourName)

// Задание №5 
// написать функцию, выводящую в диалоговом окне текст и переменную. 
// Например, «Привет, Алевтина». Где «Алевтина» — это внешняя переменная.
// const name = 'Алевтина';
// function greeting(newName) {
//     alert(`Привет, ${name}`);
//     alert(`Привет, ${newName}`);
// }
// greeting('Борис');

// Задание №6 
// вывести на экран в диалоговом окне текст с сообщением
// “Вы уверены?” и кнопками «ОК» , «Отмена».
// if (confirm('Вы уверены?')) {
//     alert('мы рады, что Вы уверены)');
// } else (confirm('Жаль, что Вы не уверены....'));

// Задание №7
// перепишите код, используя конструкцию switch-case, 
// запрашивая возраст пользователя через диалоговое окно.
let age = 10;
/*
if (age == 18) {
    alert('Вы совершеннолетний, всё можно!');
} else if (age == 10) {
    alert('Вам надо учить уроки');
} else if (age == 30) {
    alert('Ложитесь спать, завтра на работу');
} else {
    alert('мы не знаем, что Вам делать');
}
 */

switch (age) {
    case 18:
        alert('Вы совершеннолетний, всё можно!');
        break;
    case 10:
        alert('Вам надо учить уроки');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('мы не знаем, что Вам делать');
        break;
}



