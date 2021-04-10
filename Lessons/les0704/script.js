//1) Створити масив з 20 чисел та:

// let array = [63, 4, 82, 78, 90, 26, 31, 22, 13, 76, 100, 19, 44, 86, 8, 46, 32, 53, 84, 80];

//  a) відсортувати його від меншого до більшого.

// console.log(array.sort((a, b) => a - b));


//  b) відсортувати його від більшого до меншого.

// console.log(array.sort((a, b) => a - b));


//  c) Відфілтрувати числа які є кратними 3.

// console.log(array.filter(value => !(value % 3)));

//  d) Відфілтрувати числа які є більшими за 10.

// console.log(array.filter(value => value > 10));

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// array.forEach(value => document.write(`${value} <br>`) );

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.

// console.log(array.map(value => value * 3));

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let reduce = array.reduce((acc, currentValue) => {
// 	acc+=currentValue;
// 	return acc;
// },0);
// console.log(reduce);

//2) Створити масив з 20 стрічок та:
// let srin = ['Algerian', 'Forulka', 'Girl', 'Ladoine', 'Poprek', 'Posit', 'Regular', 'Rewind', 'Roll', 'Sofa', 'Croprotation',
// 	'Expendable', 'Ferryman', 'Gettingout', 'Khokhloma', 'Marauder', 'Shoes', 'Superscript', 'Usurper', 'Utopian'];
//  a) Відсортувати його в алфавітному порядку
// 1 варіант
//
// console.log(srin.sort());
//
//2 варіант
//
// console.log(srin.sort((a, b) => a - b));

//  b) Відсортувати в зворотньому порядку
//
// console.log(srin.sort((a, b) => a - b));

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//
// let strings = srin.filter(value => !(value.length>4));
// console.log(strings);

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// let str = srin.map(value =>  `Sam says ${value}`);
// console.log(str);

//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
	{name: 'vasya', age: 31, isMarried: false},
	{name: 'petya', age: 30, isMarried: true},
	{name: 'kolya', age: 29, isMarried: true},
	{name: 'olya', age: 28, isMarried: false},
	{name: 'max', age: 30, isMarried: true},
	{name: 'anya', age: 31, isMarried: false},
	{name: 'oleg', age: 28, isMarried: false},
	{name: 'andrey', age: 29, isMarried: true},
	{name: 'masha', age: 30, isMarried: true},
	{name: 'olya', age: 31, isMarried: false},
	{name: 'max', age: 31, isMarried: true}
];

//a) відсортувати його за  віком (зростання , а потім окремо спадання)
// const sortUp = users.sort((a, b) => a.age - b.age)
// console.log(sortUp);
//спадання
// const sortDown = users.sort((a, b) => b.age - a.age)
// console.log(sortDown);

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// const length1 = users.sort((a, b) => a.name.length-b.name.length)
// console.log(length1);
//спадання
// const length1 = users.sort((a, b) => b.name.length-a.name.length)
// console.log(length1);

//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //    та зберегти це в новий масив (первинний масив залишиться без змін)
//d) відсортувати його за індентифікатором
//
// let stringify = JSON.stringify(users);
// let map = users.map((value, index) =>{
// 	value.index = Math.floor(Math.random() * 100);
// 	return value;
// }) ;
// console.log(map);
// console.log(JSON.parse(stringify))
// console.log(stringify);
// let sort = map.sort((a, b) => a.index - b.index);
// console.log(sort);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let reduce = users.reduceRight((acc = [], currentValue,) => {
//
//
// 	if (currentValue.isMarried) {
// 		// console.log(acc);
// 		// console.log('______________________________');
// 		currentValue.house = true;
// 		acc.push(currentValue);
// 		// console.log(currentValue);
// 	}
// 	return acc;
// }, []);
// console.log(reduce);

//-=-=-=-=-==--=-=-==--==-=--=-=-==-=--=-=-=-=-=-=-=--=-=-=-=-=-=--=-=

const cars = [
	{producer: 'subaru', model: 'wrx', year: 2010, color: 'blue', type: 'sedan', engine: 'ej204x', volume: 2, power: 400},
	{producer: 'subaru', model: 'legacy', year: 2007, color: 'silver', type: 'sedan', engine: 'ez30', volume: 3, power: 250},
	{producer: 'subaru', model: 'tribeca', year: 2011, color: 'white', type: 'jeep', engine: 'ej20', volume: 2, power: 300},
	{producer: 'subaru', model: 'leone', year: 1998, color: 'yellow', type: 'sedan', engine: 'ez20x', volume: 2, power: 140},
	{producer: 'subaru', model: 'impreza', year: 2014, color: 'red', type: 'sedan', engine: 'ej204x', volume: 2, power: 200},
	{producer: 'subaru', model: 'outback', year: 2014, color: 'red', type: 'hachback', engine: 'ej204', volume: 2, power: 165},
	{producer: 'bmw', model: '115', year: 2013, color: 'red', type: 'hachback', engine: 'f15', volume: 1.5, power: 120},
	{producer: 'bmw', model: '315', year: 2010, color: 'white', type: 'sedan', engine: 'f15', volume: 1.5, power: 120},
	{producer: 'bmw', model: '650', year: 2009, color: 'black', type: 'coupe', engine: 'f60', volume: 6, power: 350},
	{producer: 'bmw', model: '320', year: 2012, color: 'red', type: 'sedan', engine: 'f20', volume: 2, power: 180},
	{producer: 'mercedes', model: 'e200', year: 1990, color: 'silver', type: 'sedan', engine: 'eng200', volume: 2, power: 180},
	{producer: 'mercedes', model: 'e63', year: 2017, color: 'yellow', type: 'sedan', engine: 'amg63', volume: 3, power: 400},
	{producer: 'mercedes', model: 'c250', year: 2017, color: 'red', type: 'sedan', engine: 'eng25', volume: 2.5, power: 230}
];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
//1 варіант
// let filter = cars.filter(value => value.volume >3
// );
// console.log(filter);
//2 Варіант
// let reduce = cars.reduce((acc, value)=> {
// 	if (value.volume > 3) {
// 		acc.push(value)
// 	}
// 	return acc;
// },[]);
//
// console.log(reduce);

// - двигун = 2л
//
// const filter = cars.filter(value => (value.volume===2));
// console.log(filter);
//
// //2 варінт
//
// const filter2 = cars.reduce((acc, value)=>{
// 	if (value.volume === 2){
// 		acc.push(value)
// 	}
// 	return acc;
// },[])
// console.log(filter);
// console.log(filter2);

//- виробник мерс
//
// let filter = cars.filter(value => value.producer ==='mercedes');
//
// console.log(filter);
// // 2 варіант
// let reduce = cars.reduce((acc, value)=> {
// 	if (value.producer === 'mercedes')
// 		acc.push(value);
// 	return acc;
// },[]);
// console.log(reduce);

// - двигун більше 3х літрів + виробник мерседес
//
// let filter = cars.filter(value=> value.producer=== 'mercedes'&&value.volume>3);
// console.log(filter);
// // 2 option
// let reduce = cars.reduce((acc, value) =>{
// 	if (value.producer === 'mercedes'&&value.volume>3)
// 		acc.push(value)
// 	return acc;
// },[]);
// console.log(reduce);

//- двигун більше 3х літрів + виробник субару
//
// let filter = cars.filter(value => ((value.volume > 3)&&(value.producer === 'subaru')));
// console.log(filter);
//2 option
// let reduce = cars.reduce((acc, value) => {
// 	if (value.producer === 'subaru' && value.volume > 3)
// 		acc.push(value);
// 	return acc;
// }, []);
// console.log(reduce);

//- сили більше ніж 300
//
// let filter = cars.filter(value => value.power >300);
// console.log(filter);
// // 2 option
// let reduce = cars.reduce((acc, value)=>{
// 	if (value.power>300)
// 		acc.push(value);
// 	return acc;
// },[]);
// console.log(reduce);

// - сили більше ніж 300 + виробник субару
//
// let filter = cars.filter(value => value.power>300&&value.producer === 'subaru');
// console.log(filter);
// // 2 option
// let reduce = cars.reduce((acc, value)=>{
// 	if (value.power >300&& value.producer === 'subaru')
// 		acc.push(value);
// 	return acc;
// },[]);
// console.log(reduce);

//- мотор серіі ej
//
// let filter = cars.filter(value=> value.engine.startsWith('ej'));
// console.log(filter);
// //2 option
// let reduce = cars.reduce((acc, value)=>{
// 	if (value.engine.startsWith('ej')){
// 		acc.push(value)
// 	}
// 	return acc;
// },[]);
// console.log(reduce);

//- сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let filter = cars.filter(value => value.power > 300 && value.producer === 'subaru' &&
// 	value.engine.startsWith('ej'));
// console.log(filter);
// //2 option
// let reduce = cars.reduce((acc, value) => {
// 	if ( value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'))
// 		acc.push(value);
// 	return acc;
// }, []);
// console.log(reduce);

//- двигун меньше 3х літрів + виробник мерседес
//
// let filter = cars.filter(value => value.volume<3 && value.producer === 'mercedes');
// console.log(filter);
// // 2 option
// let reduce = cars.reduce((acc, value)=>{
// 	if (value.volume<3 && value.producer=== 'mercedes')
// 		acc.push(value);
// 	return acc;
// },[]);
// console.log(reduce);

//- двигун більше 2л + сили більше 250
//
// let filter = cars.filter(value=> value.volume>2&& value.power > 250);
// console.log(filter);
// // 2 option
// let reduce = cars.reduce((acc, value)=> {
// 	if (value.volume>2&&value.power>250)
// 		acc.push(value);
// 	return acc;
// },[]);
// console.log(reduce);

// - сили більше 250  + виробник бмв
//
// let filter = cars.filter(value => value.producer === 'bmw'&& value.power> 250);
// console.log(filter);
// 2 option
// cars.reduce((acc, value) => {
// if (value.producer === 'bmw'&& value.power >250)
// 	acc.push(value);
// 		return acc;
// 	},[])
// назат в минуле
// function sort(cars){
// 	let array =[];
// 	for (let i = 0; i < cars.length; i++) {
// 		if (cars[i].power > 250&&cars[i].producer=== 'bmw' )
// 			array.push(cars[i])
// 	}
// 	return array;
// }
// console.log(sort(cars));

//- взять слдующий массив
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

//-- Відсортувати їх по ID
//
// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);
// 2 option
// function sorting(users){
// 	for (let i = 0; i < users.length; i++) {
// 		for (let j = 0; j < users.length; j++) {
// 			if (users[i].id<users[j].id&&i!==j){
// 				let acc;
// 				acc = users[i];
// 				users[i] = users[j];
// 				users[j] = acc;
// 			}
// 		}
// 	}
// 	return users;
// }
//
// console.log(sorting(usersWithAddress));

//-- Відсортувати їх по ID в зворотньому порядку
//
// usersWithAddress.sort((a,b)=>b.id - a.id);
// console.log(usersWithAddress);
//
// function sorting(users){
// 	for (let i = 0; i < users.length; i++) {
// 		for (let j = 0; j < users.length; j++) {
// 			if (users[i].id>users[j].id&&i!==j){
// 				let acc = users[i];
// 				users[i] = users[j];
// 				users[j] = acc;
// 			}
// 		}
// 	}
// 	return users;
// }
//
// console.log(sorting(usersWithAddress));

//-- Відсортувати по віку
// usersWithAddress.sort((a,b)=> a.age - b.age);
// console.log(usersWithAddress);

//-- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a,b)=> b.age - a.age);
// console.log(usersWithAddress);

//-- Відсорутвати по імені
// usersWithAddress.sort( (x,y)=>{
// 	if(x.name>y.name){
// 		return 1;
// 	}
// 	return -1;
// });
// console.log(usersWithAddress);

//-- Відсорутвати по назві вулиці
//
// usersWithAddress.sort((a,b)=> {
// 	if (a.address.street>b.address.street){
// 		return 1;
// 	}
// 	return -1;
// })
// console.log(usersWithAddress);

//-- Відсорутвати по номеру будинку
//
// let sort = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sort);

//-- Залишити тільки тих, хто молодший ніж 30 (filter)
//
// let filter = usersWithAddress.filter(value=> value.age<30);
// console.log(filter);

// -- Залишити тільки одружених
//
// let filter = usersWithAddress.filter(value => value.isMarried);
// console.log(filter);

//-- Залишити тільки одружених, які молодні за 30
//
// let filter = usersWithAddress.filter(value => value.isMarried&&value.age<30);
// console.log(filter);

// -- Залишити лише тих, в кого парні номери будинків.
//
// let filter = usersWithAddress.filter(value=> !(value.address.number%2));
// console.log(filter);

// -- Порахувати загальний вік всіх людей. (reduce)
// let reduce = usersWithAddress.reduce((acc, value) => {
// 	return acc += value.age;
//
// }, 0);
// console.log(reduce);

// const reduce = usersWithAddress.reduce((acc, value)=>{
// 	if (value.isMarried&&value.age>30){
// 		value.child = true;
// 		acc.push(value)
// 	}
// 	return acc
// },[]);
// console.log(reduce);

//----------------------------------------------------------------

// // Створити обєкт автомобіля з полями:
// // 	Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// // 	Власник автомобіля теж має бути обєкт, у якого є поля
// // Імя, вік, стаж водіння.
// // 	Створити не менше 7 та не більше 20 машинок.
// let obj1 = {model: 'mitsubishi lancer', power: 265, owner: {name: 'Nik', age: 25, experience: 2}, price: 24500, year: 2005};
// let obj2 = {model: 'tesla', power: 300, owner: {name: 'Kaylynn', age: 26, experience: 1}, price: 14208, year: 2020};
// let obj3 = {model: 'chrysler', power: 285, owner: {name: 'Caylee', age: 37, experience: 0.5}, price: 21995, year: 2006};
// let obj4 = {model: 'Campagna', power: 165, owner: {name: 'Katherine', age: 32, experience: 5}, price: 4319, year: 2019};
// let obj5 = {model: 'Ford', power: 200, owner: {name: 'Myah', age: 44, experience: 10}, price: 8470, year: 2011};
// let obj6 = {model: 'Invicta', power: 205, owner: {name: 'Harper', age: 27, experience: 2}, price: 13541, year: 2019};
// let obj7 = {model: 'Holden', power: 280, owner: {name: 'Rebecca', age: 30, experience: 1.5}, price: 8764, year: 2014};
//
//
// // Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//
// function upgrade(car) {
// 	car.power = Math.floor(car.power * 1.1);
// 	return car;
// }
//
// obj4 = upgrade(obj4);
// obj5 = upgrade(obj5);
// obj2 = upgrade(obj2);
// obj1 = upgrade(obj1);
//
// function owners(obj, name, age, exp) {
// 	obj.owner.name = name;
// 	obj.owner.age = age;
// 	obj.owner.experience = exp;
// 	return obj;
//
// }
// //На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// obj4 = owners(obj4, 'vova', 25, 2);
// obj5 = owners(obj5, 'lusi', 45, 10);
// obj2 = owners(obj2, 'kosta', 55, 20);
// obj1 = owners(obj1, 'jo', 19, 1);
// //Для початку вкладіть всі наші створені автомобілі в масив cars.
// let allCars = [obj1,obj2,obj3,obj4,obj5,obj6,obj7];
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// function upgrade(obj){
// 	obj.power=Math.floor(obj.power*1.1);
// 	obj.price=Math.floor(obj.price *1.05);
// 	return obj;
// }
//
// for (let i = 0; i < allCars.length; i+=2) {
// 	upgrade(allCars[i])
// }
// // console.log(allCars);
// //Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// // то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// allCars = allCars.reduce((acc,value)=>{
// if (value.owner.experience<5&& value.age>25){
// 	value.owner.experience++;
// 	acc.push(value)
// 	return acc;
// }
// 	 acc.push(value)
// 	return acc;
// },[])
// // console.log(allCars);
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let summ1 =allCars.reduce((acc,value)=> {
// 	acc+=value.price;
// 	return acc;
// },0)
// console.log(summ1);
