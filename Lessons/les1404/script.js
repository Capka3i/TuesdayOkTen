//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// const textrea = document.createElement('textarea');
// document.body.appendChild(textrea);
// const keys = 'acc';
// textrea.value = localStorage.getItem(keys)
// textrea.onchange = ({target:{value}}) => {
// 	localStorage.setItem(keys,value);
// }

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
//
const button = document.getElementById('button');
const forms = document.forms.forms;
	console.log(forms.value);
button.onclick= () =>{

	localStorage.setItem()

}




