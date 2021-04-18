// Реалізовуємо свій компютерний магазин.

//Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
//
// class Computer {
// 	constructor() {
// 		this.rAM = 16;
// 		this.processor = 950;
// 		this.name = 'Asus';
// 	}
//
// 	On = function () {
// 		return 'ON';
// 	};
// }
//
// //Від базового компютрера треба реалізувати ноутбук.
// // Він має нову властивість дюймаж монітора.
// //
// // У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//
// class Laptop extends Computer {
// 	constructor(rAm, processor, name, on, inch) {
// 		super(rAm, processor, name, on);
// 		this.inch = 15.6;
// 	}
//
// 	Battery = function () {
// 		return this.processor / (this.inch * this.rAM);
// 	};
//
// }
//
// //Від ноутбука потрібно зробити ультрабук.
// // Він має нову змінну ваги.
// // При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//
// class Ultrabook extends Laptop {
// 	constructor(rAM, processor, name, on, inch, power,weight) {
// 		super(rAM, processor, name, on, inch, power);
// 		this.weight = 1.745;
//
// 	}
//
// 	On = function () {
// 		if (!(this.weight > 2)) {
// 			return 'вага більша за 2кг,батарея тримаж менше ніж 4 години.';
// 		}
//
// 	};
// }
//
//
// class GeneralPC extends Computer {
// 	constructor(rAM, processor, name, on, inch, FPS) {
// 		super(rAM, processor, name, on, inch);
// 		this.FPS = this.processor * this.rAM;
// 	}
//
//
// 	StartGame = function (nameGame = 'Socar') {
// 		return `You are playing ${nameGame} with ${this.FPS} FSP`;
//
// 	};
// 	UpProcessor = function (procent = 10) {
// 		procent <= 10 ? this.processor * procent : this.processor * 10;
// 	};
// 	UpRAM = function () {
// 		return this.rAM * 2;
// 	};
//
// }
//
// class GamePC extends GeneralPC {
// 	constructor(rAM, processor, name, on, inch, FPS) {
// 		super(rAM, processor, name, on, inch, FPS);
// 		this.FPS = FPS*2;
// 	}
//
// 	StartGame = function (){
// 		let sg =this.processor*0.9
// 		if (sg<500&&this.rAM<8){
// 			return 'На цьому відрі ігри не запускаються.'
// 		}
//
// 			return `Game is starting `;
// 	}
//
//
// }
//
//
// let pc = new Computer();
// let cg = new GamePC()
// let lap = new Laptop();
// let ult = new Ultrabook();
// let gen = new GeneralPC();
//
// console.log(pc);
// console.log(pc.On());
// console.log(gen.StartGame('GIT'));
// console.log(lap.Battery());
// console.log(lap.On());
// console.log(ult.On());
// console.log(cg.StartGame());

//===================================================================================

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car(model, producer, year, maxSpeed, engineCapacity) {
// 	this.model = model;
// 	this.producer = producer;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.engineCapacity = engineCapacity;
// 	this.drive = function () {
// 		console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
// 	},
// 		this.info = function () {
// 			console.log(`model: ${this.model}\n producer: ${this.producer}\n year:${this.year}\n maxSpeed:${this.maxSpeed}\n engineCapacity:${this.engineCapacity}`);
//
//
// 		},
// 		this.increaseMaxSpeed = function (newSpeed) {
// 			this.maxSpeed += newSpeed;
// 		},
// 		this.changeYear = function (newValue) {
// 			this.year += newValue;
// 		},
// 		this.addDriver = function () {
// 			let drive = {
// 				name: 'Nik',
// 				age: 30,
// 				work: 'driver'
// 			};
// 			Car.driver = drive;
// 		};
// }
//
//
// let newCar = new Car('Lancer Evolution VIII', 'Mitsubishi', 2003, 253, 2.0,);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.addDriver();
// newCar.changeYear(2);
// newCar.increaseMaxSpeed(50);
// newCar.info();

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// class Car {
// 	constructor(model, producer, year, maxSpeed, engineCapacity) {
// 		this.model = model;
// 		this.producer = producer;
// 		this.year = year;
// 		this.maxSpeed = maxSpeed;
// 		this.engineCapacity = engineCapacity;
// 	}
//
// 	drive() {
// 		console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
// 	}
//
// 	info() {
// 		console.log(`model: ${this.model}\n producer: ${this.producer}\n year:${this.year}\n maxSpeed:${this.maxSpeed}\n engineCapacity:${this.engineCapacity}`);
//
//
// 	};
// 	increaseMaxSpeed(newSpeed=50) {
// 		this.maxSpeed += newSpeed;
// 	};
// 	changeYear(newValue= 2) {
// 		this.year += newValue;
// 	};
// 	addDriver() {
// 		let drive = {
// 			name: 'Nik',
// 			age: 30,
// 			work: 'driver'
// 		};
// 		Car.driver = drive;
// 	};
// }
//
// let car = new Car('Lancer Evolution VIII', 'Mitsubishi', 2003, 253, 2.0,);
// car.info();
// car.drive();
// car.changeYear(2);
// car.increaseMaxSpeed(50);
// car.addDriver();
// car.info()

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
//
//
// class Human{
// 	constructor(name,age) {
// 		this.name = name;
// 		this.age = age;
// 	}
//
// }
//
// class Prince extends Human{
// 	constructor(name,age,slipper) {
// 		super(name,age)
// 		this.slipper = slipper;
// 	}
// }
//
// class Cinderella extends Human{
// 	constructor(name, age, foodSize) {
// 		super(name,age);
// 		this.foodSize = foodSize;
// 	}
//
// }
// const cinderella =[
// new Cinderella('Джулія Ормонд', 56, 37),
// new Cinderella('Рене Зеллвеґер', 51, 39),
// new Cinderella('Дженніфер Лопес', 51, 39),
// new Cinderella('Хіларі Дафф', 33, 37.5),
// new Cinderella('Енн Хетеуей', 38, 42.5),
// new Cinderella('Одрі Тоту', 44, 41),
// new Cinderella('Ешлі Г\'юїтт', 33, 40),
// new Cinderella('Фелісіті Джонс', 37, 41),
// new Cinderella('Лілі Джеймс', 32, 40),
// new Cinderella('Дакота Джонсон', 31, 39),
// ]
// let prince = new Prince('Прінс Ро́джерс Не́льсон',38,37)
//
//
// for (let i = 0; i < cinderella.length; i++) {
// 	if(cinderella[i].foodSize===prince.slipper){
// 		console.log(`Princess ${cinderella[i].name} mast is to be with ${prince.name}. She have ${cinderella[i].age} age. he have ${prince.age} age`);
//
// 	}
// }

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
// function Cinderella(name,age,foodSize) {
// 	this.name = name;
// 	this.age = age;
// 	this.foodSize = foodSize;
// }
// function Prince(name,age,slipper) {
// 		this.name = name;
// 		this.age = age;
// 		this.slipper = slipper;
// 		this.findCinderella = function (cinderella){
// 			for (let i = 0; i < cinderella.length; i++) {
// 				if (cinderella[i].foodSize === this.slipper){
// 							console.log(`Princess ${cinderella[i].name} mast is to be with ${this.name}. She have ${cinderella[i].age} age. He have ${this.age} age`);
// 				}
//
// 			}
// 	}
// }
//
// const cinderella =[
// new Cinderella('Джулія Ормонд', 56, 37),
// new Cinderella('Рене Зеллвеґер', 51, 39),
// new Cinderella('Дженніфер Лопес', 51, 39),
// new Cinderella('Хіларі Дафф', 33, 37.5),
// new Cinderella('Енн Хетеуей', 38, 42.5),
// new Cinderella('Одрі Тоту', 44, 41),
// new Cinderella('Ешлі Г\'юїтт', 33, 40),
// new Cinderella('Фелісіті Джонс', 37, 41),
// new Cinderella('Лілі Джеймс', 32, 40),
// new Cinderella('Дакота Джонсон', 31, 39),
// ]
// let prince = new Prince('Прінс Ро́джерс Не́льсон',38,37)
// prince.findCinderella(cinderella);


//==================================================================================

// -  Створити функцію конструктор для об'єкту який описує теги
//
//
// let title;
// let action;
// let atribytes;
//
// function Tag(titleOfTag, action, attrs) {
// 	this.titleOfTag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// }
//
// title = '<a>';
// action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ' +
// 	'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. ' +
// 	'Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. ' +
// 	'При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// atribytes = [
// 	{
// 		titleOfAttr: 'accesskey',
// 		actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
// 	},
// 	{
// 		titleOfAttr: 'coords',
// 		actionOfAttr: 'Устанавливает координаты активной области'
// 	},
// 	{
// 		titleOfAttr: 'download',
// 		actionOfAttr: 'Предлагает скачать указанный по ссылке файл'
// 	},
//
// ];
// let a = new Tag(title, action, atribytes);
//
//
// title = '<div>';
// action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа ' +
// 	'с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы ' +
// 	'не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для ' +
// 	'тега добавить атрибут class или id с именем селектора.';
// atribytes = [{
// 	titleOfAttr: 'align',
// 	actionOfAttr: 'Задает выравнивание содержимого тега < div >.'
// },
// 	{
// 		titleOfAttr: 'title',
// 		actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
// 	}
// ];
//
//
// let divka = new Tag(title, action, atribytes);
//
// title = '<form>';
// action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными ' +
// 	'между пользователем и сервером. Область применения форм не ограничена отправкой данных на ' +
// 	'сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять ' +
// 	'его и применять по своему усмотрению.' + `<br>` +
// 	'Документ может содержать любое количество форм, но ' +
// 	'одновременно на сервер может быть отправлена только одна форма. По этой причине данные форм ' +
// 	'должны быть независимы друг от друга.';
// atribytes = [
// 	{
// 		titleOfAttr: 'accept-charset',
// 		actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
// 	},
// 	{
// 		titleOfAttr: 'action',
// 		actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
// 	},
// 	{
// 		titleOfAttr: 'autocomplete',
// 		actionOfAttr: 'Включает автозаполнение полей формы.'
// 	}];
//
//
// let form = new Tag(title, action, atribytes);
// console.log(form);
// console.log(divka);
// console.log(a);

// Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
// 	titleOfTag: 'area',
// 		action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// 	attrs: [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{/*some props and values*/},
// 	{/*...*/},
// 	{/*...*/},
// ]
//
// }
// let title;
// let action;
// let atribytes;
//
//
// class Tags {
// 	constructor(titleOfTag, action, attrs) {
// 		this.titleOfTag = titleOfTag;
// 		this.action = action;
// 		this.attrs = attrs;
// 	}
// }
//
// title = '<hr>';
// action = 'Рисует горизонтальную линию, которая по своему виду зависит от используемых параметров, ' +
// 	'а также браузера. Тег <hr> относится к блочным элементам, линия всегда начинается с новой строки, ' +
// 	'а после нее все элементы отображаются на следующей строке.';
// atribytes = [
// 	{
// 		titleOfAttr: 'align',
// 		actionOfAttr: 'Определяет выравнивание линии.'
// 	},
// 	{
// 		titleOfAttr: 'color',
// 		actionOfAttr: 'Цвет линии.'
// 	},
// 	{
// 		titleOfAttr: 'noshade',
// 		actionOfAttr: 'Рисует линию без трехмерных эффектов.'
// 	}
// ];
//
// let hring = new Tags(title, action, atribytes);
//
// title = '<select>';
// action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также ' +
// 	'список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования ' +
// 	'атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется ' +
// 	'самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ' +
// 	'Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. ' +
// 	'Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> ' +
// 	'внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// atribytes = [
// 	{
// 		titleOfAttr: 'disabled',
// 		actionOfAttr: 'Блокирует доступ и изменение элемента.'
// 	},
// 	{
// 		titleOfAttr: 'name',
// 		actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'
// 	},
// 	{
// 		titleOfAttr: 'tabindex',
// 		actionOfAttr: 'Определяет последовательность перехода между элементами при нажатии на клавишу <button>tab</button>'
// 	}];
//
//
// let select = new Tags(title, action, atribytes);
//
// title = '<input>';
// action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные ' +
// 	'элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> ' +
// 	'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя ' +
// 	'элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если ' +
// 	'введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная ' +
// 	'программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с ' +
// 	'помощью клиентских приложений, например, скриптов на языке JavaScript.';
// atribytes = [
// 	{
// 		titleOfAttr: 'alt',
// 		actionOfAttr: 'Альтернативный текст для кнопки с изображением.'
// 	},
// 	{
// 		titleOfAttr: 'border',
// 		actionOfAttr: 'Толщина рамки вокруг изображения.'
// 	},
// 	{
// 		titleOfAttr: 'formaction',
// 		actionOfAttr: 'Определяет адрес обработчика формы.'
// 	}];
//
// let input = new Tags(title, action, atribytes);
// console.log(hring);
// console.log(select);
// console.log(input);

// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// let car = {
// 	model: 'Lancer Evolution VIII',
// 	producer: 'Mitsubishi',
// 	year: 2003,
// 	maxSpeed: 253,
// 	engineCapacity: 2.0,
// 	drive() {
// 		console.log(`їдемо зі швидкістю ${car.maxSpeed} км на годину`);
// 	},
// 	info() {
// 		console.log(car);
// 	},
// 	increaseMaxSpeed(newSpeed) {
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear(newValue) {
// 		this.year += newValue;
// 	},
// 	addDriver(driver) {
// 		let drive = {
// 			name: 'Nik',
// 			age: 30,
// 			work: 'driver'
// 		};
// 		car.driver = drive;
// 	}
// }
// 	car.drive();
// 	car.info();
// 	car.changeYear(2)
// 	car.increaseMaxSpeed(50);
// 	car.addDriver();
// 	car.info();
