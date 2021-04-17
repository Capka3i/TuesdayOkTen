// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// let div = document.createElement('div');
// let button = document.createElement('button');
// button.id = 'hidden'
// button.style.height = '60px';
// button.style.width = '100px'
// button.innerHTML = 'Нажми щоб сховати квадрат'
// button.style.borderColor= 'black';
// button.style.marginLeft = '160px'
//
//
// div.id = 'text'
// div.style.height = '400px';
// div.style.width = '400px';
// div.style.backgroundColor = 'purple';
//
// document.body.appendChild(button);
// document.body.appendChild(div);
//
// document.getElementById('hidden').onclick = function() {
// 	document.getElementById('text').hidden = true;
// }

// 	- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
//
// let button = document.createElement('button');
// button.id = 'hidden'
// button.style.height = '60px';
// button.style.width = '100px'
// button.innerHTML = 'Нажми щоб сховати квадрат'
// button.style.borderColor= 'black';
//
//
// document.body.appendChild(button);
//
// document.getElementById('hidden').onclick = function() {
// 	document.getElementById('hidden').hidden = true;
// }
//

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// const div1 = document.createElement('div');
// const div2 = document.createElement('div');
// div1.style.display= 'flex';
// div1.style.justifyContent = 'flex-start'
// //
// const inputed = document.createElement('input');
// inputed.style.height = '25px';
// inputed.style.width = '100px';
// inputed.style.marginLeft = '20px'
// inputed.id = 'put'
// const butt = document.createElement('button')
// butt.style.border = '1px,,black';
// butt.id = 'butt';
// butt.innerHTML = 'OK'
// butt.style.marginLeft = '5px'
//
// //
// const text = document.createElement('p')
// text.style.fontSize = '16px';
// text.id = 'text'
//
// div2.appendChild(text);
// div1.appendChild(inputed);
// div1.appendChild(butt);
// document.body.appendChild(div1);
// document.body.appendChild(div2);
//
// document.getElementById('butt').onclick = ( event =>{
// 	let value = document.getElementById('put').value;
//
// 	if (+value>18){
// 		document.getElementById('text').innerHTML = `Тобі ${value} років , Це більше за 18`
// 	}}
// 	)

// - Створіть меню, яке розгортається/згортається при клику
//
// const keyComp = document.getElementById('keyComp');
// const comp = document.getElementById('compa');
// keyComp.style.border= '1 px black';
// let flag = true;
//
// keyComp.onclick = () => {
// 	comp.hidden = flag;
// 	flag = !flag;
// };

//- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//    Додайте кожному коментарю по кнопці для згортання його body.
//
// const coments = [{
// 	'postId': 1,
// 	'id': 1,
// 	'name': 'id labore ex et quam laborum',
// 	'email': 'Eliseo@gardner.biz',
// 	'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
// },
// 	{
// 		'postId': 1,
// 		'id': 2,
// 		'name': 'quo vero reiciendis velit similique earum',
// 		'email': 'Jayne_Kuhic@sydney.com',
// 		'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
// 	},
// 	{
// 		'postId': 1,
// 		'id': 3,
// 		'name': 'odio adipisci rerum aut animi',
// 		'email': 'Nikita@garfield.biz',
// 		'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
// 	},
// 	{
// 		'postId': 1,
// 		'id': 4,
// 		'name': 'alias odio sit',
// 		'email': 'Lew@alysha.tv',
// 		'body': 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
// 	},
// 	{
// 		'postId': 1,
// 		'id': 5,
// 		'name': 'vero eaque aliquid doloribus et culpa',
// 		'email': 'Hayden@althea.biz',
// 		'body': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
// 	},
// 	{
// 		'postId': 2,
// 		'id': 6,
// 		'name': 'et fugit eligendi deleniti quidem qui sint nihil autem',
// 		'email': 'Presley.Mueller@myrl.com',
// 		'body': 'doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in'
// 	},
// 	{
// 		'postId': 2,
// 		'id': 7,
// 		'name': 'repellat consequatur praesentium vel minus molestias voluptatum',
// 		'email': 'Dallas@ole.me',
// 		'body': 'maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor'
// 	},
// 	{
// 		'postId': 2,
// 		'id': 8,
// 		'name': 'et omnis dolorem',
// 		'email': 'Mallory_Kunze@marie.org',
// 		'body': 'ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque'
// 	},
// 	{
// 		'postId': 2,
// 		'id': 9,
// 		'name': 'provident id voluptas',
// 		'email': 'Meghan_Littel@rene.us',
// 		'body': 'sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus'
// 	},
// 	{
// 		'postId': 2,
// 		'id': 10,
// 		'name': 'eaque et deleniti atque tenetur ut quo ut',
// 		'email': 'Carmen_Keeling@caroline.name',
// 		'body': 'voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis'
// 	},
// 	{
// 		'postId': 3,
// 		'id': 11,
// 		'name': 'fugit labore quia mollitia quas deserunt nostrum sunt',
// 		'email': 'Veronica_Goodwin@timmothy.net',
// 		'body': 'ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea'
// 	},
// 	{
// 		'postId': 3,
// 		'id': 12,
// 		'name': 'modi ut eos dolores illum nam dolor',
// 		'email': 'Oswald.Vandervort@leanne.org',
// 		'body': 'expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit'
// 	},
// 	{
// 		'postId': 3,
// 		'id': 13,
// 		'name': 'aut inventore non pariatur sit vitae voluptatem sapiente',
// 		'email': 'Kariane@jadyn.tv',
// 		'body': 'fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et'
// 	},
// 	{
// 		'postId': 3,
// 		'id': 14,
// 		'name': 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
// 		'email': 'Nathan@solon.io',
// 		'body': 'vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum'
// 	},
// 	{
// 		'postId': 3,
// 		'id': 15,
// 		'name': 'debitis magnam hic odit aut ullam nostrum tenetur',
// 		'email': 'Maynard.Hodkiewicz@roberta.com',
// 		'body': 'nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia'
// 	}];
//
//
// coments.forEach(value => {
// 	let elementDiv = document.createElement('div');
// 	let elementH3 = document.createElement('h3');
// 	let elementP = document.createElement('p');
// 	let button = document.createElement('button');
// 	button.innerHTML = 'Hidden'
// 	elementH3.innerHTML = value.name;
// 	elementP.innerHTML = value.body;
// 	elementDiv.appendChild(elementH3);
// 	elementDiv.appendChild(elementP);
// 	elementDiv.appendChild(button);
// 	button.onclick = () => {
// 		elementP.hidden = !elementP.hidden;
// 	};
// 	document.body.appendChild(elementDiv);
// });

//- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let input1 = document.createElement('input');
// input1.name = 'inputs'
// let input2 = document.createElement('input');
// input2.name = 'inputs'
// let input3 = document.createElement('input');
// input3.name = 'inputs'
// let input4 = document.createElement('input');
// input4.name = 'inputs'
// let button = document.createElement('button');
// button.name = 'button';
// button.innerText = 'OK';
// let form1 = document.createElement('form');
// let form2 = document.createElement('form');
// button.onclick = ev =>{
// 	let form = document.forms;
// 	for (const formElement of form) {
// 		for (const formElementElement of formElement) {
// 			console.log(formElementElement.value);
// 		}
// 	}
// }
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form2.appendChild(input3);
// form2.appendChild(input4);
// document.body.appendChild(form1);
// document.body.appendChild(form2);
// document.body.appendChild(button);

//- Створити функцію, яка генерує таблицю.
// 	Перший аргумент визначає кількість строк.
// 	Другий параметр визначає кількість ячейок в кожній строці.
// 	Третій параметр визначає елемент в який потрібно таблицю додати.
//
// function createTable(str, rad, tagName) {
// 	let tagOfTablet = document.createElement(tagName);
// 	let table = document.createElement('table');
//
// 	for (let i = 0; i < str; i++) {
// 		let tr = document.createElement('tr');
// 		for (let j = 0; j < rad; j++) {
// 			let td = document.createElement('td');
// 			tr.appendChild(td)
// 		td.innerHTML= 'text'
// 		}
// 		table.appendChild(tr)
// 	}
// 	tagOfTablet.appendChild(table)
// 	document.body.appendChild(tagOfTablet);
// }
// createTable(5,5,'div')

//- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
// let buttons = document.createElement('div');
// let index = 0;
// let image = document.createElement('div');
//
// let images = document.createElement('img');
// images.style.width = '300px'
// images.style.height = '300px'
// let buttLeft = document.createElement('button');
// buttLeft.innerHTML = 'Left';
// buttLeft.style.marginRight = '200px';
// let buttRight = document.createElement('button');
// buttRight.innerHTML = 'Right';
//
//
// const imageArray = [
// 	{
// 		image: 'image1',
// 		url: 'img/chick1.jpg'
// 	},
// 	{
// 		image: 'image1',
// 		url: 'img/chick2.jpg'
// 	},
// 	{
// 		image: 'image1',
// 		url: 'img/chick3.jpg'
// 	},
// 	{
// 		image: 'image1',
// 		url: 'img/chick4.jpg'
// 	}
// ];
// images.src = `${imageArray[index].url}`
// buttLeft.onclick = () => {
// if (index){
// 	index--;
// 	images.src = `${imageArray[index].url}`;
// }else {
//
// 	index = imageArray.length-1;
// 	images.src = `${imageArray[index].url}`;
// }
// };
// buttRight.onclick = () => {
// if (index < imageArray.length-1){
// 	index++;
// 	images.src = `${imageArray[index].url}`;
// }else {
//
// 	index = 0;
// 	images.src = `${imageArray[index].url}`;
// }
// };
// image.appendChild(images);
// buttons.appendChild(buttLeft);
// buttons.appendChild(buttRight);
// document.body.appendChild(image);
// document.body.appendChild(buttons);

//- Сворити масив нецензцрних слів.

// const lay = ['А я ебу',
// 	'Без пиздежа',
// 	'Без пизды',
// 	'Бля',
// 	'Бля буду',
// 	'Блядина',
// 	'Блядистка',
// 	'Блядища',
// 	'Блядки',
// 	'Блядовать',
// 	'Блядовитый',
// 	'Блядовозка',
// 	'Блядский',
// 	'Блядство',
// 	'Блядствовать',
// 	'Блядун',
// 	'Блядь',
// 	'Блядюга',
// 	'Блядюган',
// 	'Бляха муха',
// 	'В ахуе',
// 	'Вздрючить',
// 	'Взъебать',
// 	'Вот блядь!',
// 	'В пизду',
// 	'Въебать',
// 	'Выблядок',
// 	'Выебанный',
// 	'Выебать',
// 	'Выебины',
// 	'Выебнуться',
// 	'Выебоны',
// 	'Выебосы',
// 	'Выёбисто',
// 	'Выёбистый',
// 	'Выёбываться',
// 	'Глухуеватый',
// 	'Говно',
// 	'Говнюк',
// 	'Гондон',
// 	'Доёбывать',
// 	'Долбоёб',
// 	'Допиздеться',
// 	'До пизды',
// 	'До святого проеба',
// 	'До хуя',
// 	'Дрочилка',
// 	'Дрочить',
// 	'Дрочун',
// 	'Ебала жаба гадюку',
// 	'Ебало',
// 	'Ебальник',
// 	'Ебандей',
// 	'Ебанутый',
// 	'Ебануть',
// 	'Ебануться',
// 	'Ебать',
// 	'Ебать-ебать',
// 	'Ебать-копать',
// 	'Ебаться',
// 	'Ебать ту Люську',
// 	'Ебать-тарахтеть',
// 	'Ебеныть',
// 	'Ебиздить',
// 	'Ебись ты злоебучим проебом',
// 	'Ебическая',
// 	'Еблысь',
// 	'Ебля',
// 	'Ебловать',
// 	'Еблом торговать',
// 	'Ебстись',
// 	'Ебуня',
// 	'Ебучий',
// 	'Ёбан(н)ый в рот',
// 	'Ёбарь',
// 	'Ёби-ёби',
// 	'Ёбнутый',
// 	'Ёбнуться',
// 	'Ёб твою мать',
// 	'Жопа',
// 	'Заебать',
// 	'Заебаться',
// 	'Заебись',
// 	'Заёб',
// 	'Заёбанный',
// 	'Залупа',
// 	'Залупиться',
// 	'Запиздячить',
// 	'Захуярить',
// 	'Злоебучий',
// 	'Злопидар',
// 	'Какого хуя',
// 	'Как хуем',
// 	'К ебеням',
// 	'Клара Целкин',
// 	'Колдоёбины',
// 	'Кончать',
// 	'Конченный',
// 	'Курва',
// 	'Лярва',
// 	'Мозги ебать',
// 	'Мозгоёб',
// 	'Мудак',
// 	'Мудило',
// 	'Мудозвон',
// 	'Мудопоёбище',
// 	'Наебать',
// 	'Наебнуть',
// 	'Наёбка',
// 	'Наёбник',
// 	'Наперепиздяй',
// 	'Напидарасить ботинки',
// 	'Напиздеть',
// 	'Нахуй',
// 	'Нахуя?',
// 	'Нахуяриться',
// 	'Невъебезно',
// 	'Не ебите мне мозги',
// 	'Нездоровая хуйня',
// 	'Не пиздеть была команда',
// 	'Нехуёвый',
// 	'Нехуй – нічого',
// 	'Ни в пизду, ни в Красную Армию',
// 	'Ни с хуя',
// 	'Объебать',
// 	'Однохуйственный',
// 	'Опизденение',
// 	'Остоебенить',
// 	'Остоебеть',
// 	'Отпиздить',
// 	'Отпиздохать',
// 	'Отхуярить',
// 	'Отъебать',
// 	'Отъебаться',
// 	'Охуение',
// 	'Охуенно',
// 	'Охуенный',
// 	'Охуеть',
// 	'Охуйный',
// 	'Педрило',
// 	'Переебать',
// 	'Пидар',
// 	'Пидарас',
// 	'Пидарасить',
// 	'Пидарастический',
// 	'Пизда',
// 	'Пизданутый',
// 	'Пиздануть',
// 	'Пиздарики',
// 	'Пизда рулям',
// 	'Пиздатый',
// 	'Пиздень',
// 	'Пиздеть',
// 	'Пиздец',
// 	'Пиздец на холодец',
// 	'Пиздец подкрался незаметно',
// 	'Пиздёж',
// 	'Пиздилка',
// 	'Пиздить',
// 	'Пиздиться',
// 	'Пиздишь',
// 	'Пиздливый',
// 	'Пиздоблядский',
// 	'Пиздобол',
// 	'Пиздобратия',
// 	'Пиздоватизм',
// 	'Пиздоватый',
// 	'Пиздовать',
// 	'Пиздожадность',
// 	'Пиздозавр',
// 	'Пиздой накрыться',
// 	'Пиздопротивный',
// 	'Пиздотня',
// 	'Пиздрон',
// 	'Пиздун',
// 	'Пиздун твоя фамилия',
// 	'Пиздык',
// 	'Пиздыкнуться',
// 	'Пиздюк',
// 	'Пиздюлей дать',
// 	'Пиздюлина',
// 	'Пиздячить',
// 	'Поблядушка',
// 	'Подпёздывать',
// 	'Подъёб',
// 	'Подъёбщик',
// 	'Подъёбывать',
// 	'Поебать',
// 	'Поебеньщик',
// 	'Поебень',
// 	'Поеботина',
// 	'Попиздеть',
// 	'Попиздить',
// 	'Попизженный',
// 	'Похуист',
// 	'Похуистический',
// 	'Похуй',
// 	'По хую',
// 	'Приебаться',
// 	'Припиздяч(ш)ить',
// 	'Припизженный',
// 	'Проблядь',
// 	'Проебать',
// 	'Проебом',
// 	'Пропиздон',
// 	'Разбляду ж твою мать',
// 	'Разъебать',
// 	'Разъебошить',
// 	'Разъёбанный',
// 	'Распиздеть',
// 	'Распиздеться',
// 	'Распиздяй',
// 	'Распоебаться',
// 	'Расхуярить',
// 	'Семихуй',
// 	'Скосопиздить',
// 	'Скурвиться',
// 	'Смехуёчки',
// 	'Спиздеть',
// 	'Спиздить',
// 	'Сука',
// 	'Съебаться',
// 	'Съебнуть',
// 	'Триебущий',
// 	'Тристапиздоблядоящер',
// 	'Уебать',
// 	'Уёбище',
// 	'Уёбок',
// 	'Уёбывать',
// 	'Уёбен зи биттэ',
// 	'Упиздень',
// 	'Упиздить',
// 	'Упиздюхать',
// 	'Ухуярить',
// 	'Ухты',
// 	'Фак ю',
// 	'Хитровыебанный',
// 	'Хуева гора',
// 	'Хуеплёт',
// 	'Хуесос',
// 	'Хуетень',
// 	'Хуеть',
// 	'Хуёвина',
// 	'Хуёво',
// 	'Хуёвый',
// 	'Хуиный',
// 	'Хуи пинать',
// 	'Хуй',
// 	'Хуй его',
// 	'Хуйло',
// 	'Хуй на',
// 	'Хуй на ны',
// 	'Хуй на палочке',
// 	'Хуйнёй страдать',
// 	'Хуйнуть',
// 	'Хуйня',
// 	'Хуй там',
// 	'Хуюшки',
// 	'Хуя',
// 	'Хуяк',
// 	'Хуярить',
// 	'Хуячить',
// 	'Целка',
// 	'Целка',
// 	'ЦПХ',
// 	'Центральное пиздохранилище',
// 	'Чмо',
// 	'Чмошный',
// 	'Что за нахуй',
// 	'Шароёбиться'];

//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
//
// let div = document.createElement('div');
// const input = document.createElement('input');
// const button = document.createElement('button');
// button.innerHTML = 'Enter'
// div.appendChild(input)
// div.appendChild(button)
// button.onclick = () => {
// 	for (let i = 0; i < lay.length; i++) {
// 		if (lay[i].toLowerCase()===input.value.toLowerCase()){
// 		alert('Не лайся');
// 		return;
// 		}
// 	}
// 		document.write(input.value);
//
// 	}
// 	document.body.appendChild(div);

//    Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// let div = document.createElement('div');
// let input = document.createElement('input');
// const button = document.createElement('button');
// button.innerHTML = 'Enter'
// div.appendChild(input)
// div.appendChild(button)
//
//
// button.onclick = () => {
// 	let split = input.value.split(' ');
// 	console.log(split);
// 	for (let i = 0; i < lay.length; i++) {
// 		for (let j = 0; j < split.length; j++) {
// 			if (lay[i].toLowerCase()===split[j].toLowerCase()){
// 				alert('Не лайся');
// 				return;
// 			}
//
// 		}
// 	}
// 	document.write(input.value);
//
// }
// document.body.appendChild(div);

//-- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
//
// const ul = document.createElement('ul');
// const div = document.createElement('div');
// const tagsName = document.getElementsByTagName('h2');
// for (let i = 0; i < tagsName.length; i++) {
// 	console.log(tagsName[i]);
// 	const li = document.createElement('li');
// 	tagsName[i].id = `href${i}`;
// 	const ashka = document.createElement('a');
// 	ashka.href = `#htref${i}`;
// 	ashka.innerHTML = `${tagsName[i].innerHTML}`;
// 	li.appendChild(ashka);
// 	ul.appendChild(li);
// ashka.style.fontSize = '25px'
// }
//
// div.appendChild(ul)
// const body = document.getElementsByTagName('body');
// console.log(body[0]);
// body[0].style.display = 'flex';
// body[0].style.flexDirection = 'row-reverse';
// body[0].style.justifyContent = 'flex-start';
// document.body.appendChild(div);
// console.log(tagsName);


//-- Взяти масив юзерів
const usersWithAddress = [
	{id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
	{id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
	{id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
	{id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
	{id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
	{id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
	{id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
	{id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
	{id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
	{id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
	{id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
let array = [];
const checkMarried = document.createElement('input');
const checkAge = document.createElement('input');
const checkCity = document.createElement('input');
const laberMarried = document.createElement('label');
const laberAge = document.createElement('label');
const laberCity = document.createElement('label');
checkAge.type = 'checkbox';
checkMarried.type = 'checkbox';
checkCity.type = 'checkbox';
const divka = document.createElement('div');
checkMarried.onchange = () => {
	if (!array.length) {
		array = usersWithAddress.filter(value => !value.isMarried);
	} else {
		array = array.filter(value => !value.isMarried);
	}
	for (const argument of array) {
		const peshka = document.createElement('p');
		divka.appendChild(peshka)
		peshka.innerHTML = `id: ${argument.id}, name: ${argument.name}, age: ${argument.age}, isMarried:
		 ${argument.isMarried}, address: {city: ${argument.address.city}, street: ${argument.address.street}, number: ${argument.address.number}} `;
	}
	divka.appendChild('---------------------------------------------------------------------------------------------------')
};
checkAge.onchange = () => {
	if (!array.length) {
		array = usersWithAddress.filter(value => value.age > 29);
	} else {
		array = array.filter(value => value.age > 29);
	}
	for (const argument of array) {
		const peshka = document.createElement('p');
		divka.appendChild(peshka)
		peshka.innerHTML = `id: ${argument.id}, name: ${argument.name}, age: ${argument.age}, isMarried:
		 ${argument.isMarried}, address: {city: ${argument.address.city}, street: ${argument.address.street}, number: ${argument.address.number}} `;
	}
	divka.innerText('---------------------------------------------------------------------------------------------------')
	// console.log(array);
};
checkCity.onchange = () => {
	if (!array.length) {
		array = usersWithAddress.filter(value => value.address.city === 'Kyiv');
	} else {
		array = array.filter(value => value.address.city === 'Kyiv');
	}
	for (const argument of array) {
		const peshka = document.createElement('p');
		divka.appendChild(peshka)
		peshka.innerHTML = `id: ${argument.id}, name: ${argument.name}, age: ${argument.age}, isMarried:
		 ${argument.isMarried}, address: {city: ${argument.address.city}, street: ${argument.address.street}, number: ${argument.address.number}} `;

	}
	divka.innerText('---------------------------------------------------------------------------------------------------')
	// console.log(array);
};
laberMarried.innerHTML = 'false';
laberAge.innerHTML = 'age 29';
laberCity.innerHTML = 'Kyiv';
laberMarried.appendChild(checkMarried);
laberAge.appendChild(checkAge);
laberCity.appendChild(checkCity);
document.body.appendChild(laberMarried);
document.body.appendChild(laberAge);
document.body.appendChild(laberCity);
document.body.appendChild(divka);

