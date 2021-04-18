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
// const forms = document.getElementById('forms');
// for (const form of forms) {
// 	if (form.name==='gender'&&localStorage.getItem(form.name) === form.id) {
// 		form.checked=true;
// 	} else if ( form.type==='checkbox'){
// 		form.checked = JSON.parse(localStorage.getItem(form.id));
// 	} else {
// 		form.value = localStorage.getItem(form.id)
// 	}
// }
// forms.oninput = ({target: {id, value, type, name, checked}}) => {
// 	if (type === 'radio' && checked) {
// 		console.log(checked);
// 		localStorage.setItem(name, id);
// 	} else if (type === 'checkbox') {
// 		localStorage.setItem(id, checked);
// 	} else {
// 		localStorage.setItem(id, value)
// 	}
// };

//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по
// истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// const texterea = document.getElementById('texterea');
// const save = document.getElementById('save');
// const but1 = document.getElementById('but1');
// const but2 = document.getElementById('but2');
// const STOR = 'arc';
//
// if (!localStorage.getItem(STOR)) {
// 	localStorage.setItem(STOR, JSON.stringify([]));
// }
//
// save.onclick = () => {
// 	let temp = localStorage.getItem(STOR);
// 	let acc = JSON.parse(temp);
// 	acc.push(texterea.value);
// 	localStorage.setItem(STOR, JSON.stringify(acc));
// };
// let i = 0;
// const s = JSON.parse(localStorage.getItem(STOR));
//
// but1.onclick = () => {
// 	if (!i) {
// 		i = s.length - 1;
// 	} else {
// 		i--;
// 	}
// 	texterea.value = s[i];
// };
// but2.onclick = () => {
// 	if (i === s.length - 1) {
// 		i = 0;
// 	} else {
// 		i++;
// 	}
// 	texterea.value = s[i];
// };

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// 	Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта
//
// const forma = document.getElementById('forma');
// const save = document.getElementById('save');
// const editing = document.getElementById('editing');
// const id = document.getElementById('id');
// let key = 0;
// save.onclick = () => {
// 	if (+localStorage.key(key) === key)
// 		key++;
// 	let array = [];
// 	for (const argument of forma) {
// 		array.push(argument.value);
//
// 	}
//
// 	localStorage.setItem(key, JSON.stringify(array));
// 	console.log(array);
// 	alert(`Your ID ${key}`);
// 	id.value = key;
//
// };
//
// editing.onclick = () => {
// 	let i = 0;
// 	if (key === +localStorage.key(key)) {
// 		let acc = JSON.parse(localStorage.getItem(key));
// 		for (const form of forma) {
// 			form.value = acc[i];
// 			i++;
// 		}
// 	}
// 	localStorage.removeItem(key);
// };