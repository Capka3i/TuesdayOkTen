// 1) створити функцію яка приймає масив та виводить його
// //
// let arrayList = [];
// let bool = true;
// while (bool) {
// 	bool = prompt('Enter numb.If you want stop clean string and press Enter');
// 	while (bool) {
// 		arrayList.push(bool);
// 		break;
// 	}
// }
// function arrayShow() {
// 	for (const argument of arguments) {
// 		console.log(argument);
// 		document.write(argument);
// 	}
// }
// arrayShow(arrayList);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
// arrayList = [];
// function radndomGen(){
// 	return numb = Math.floor(Math.random() * 100);
// }
// radndomGen();
// lengthArray = radndomGen();
// for (let i = 0; i < lengthArray; i++) {
// 	arrayList.push(radndomGen());
// }
// function arrayShow() {
// 	for (const argument of arguments) {
// 		document.write(argument);
// 	}
// 	console.log(arguments);
// }
// arrayShow(arrayList);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function minNumber(arrayList =[]) {
//
// 	let min = arrayList[0];
// 	for (let i = 0; i < arrayList.length; i++) {
// 		if (arrayList[i]< min) {
// 			min = arrayList[i];
// 		}
// 	}
// 	return min;
// }
// min = minNumber([8,5,10]);
// document.write(`<p> Minimal numbers is: ${min}</p>`);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function arrayMax(arraylist2 = []) {
// 	let max = arraylist2[0]
// 	for (let i = 1; i < arraylist2.length; i++) {
// 		arraylist2[i];
// 		if (arraylist2[i] > max) {
// 			max = arraylist2[i];
// 		}
//
// 	}
// 	return max;
// }
// document.write(`<p> Maximal numbers is: ${arrayMax([9,5,8])}</p>`);

//5) створити функцію яка повертає найбільше число з масиву
// let arrayList = [];
// for (let i = 0; i < 3; i++) {
// 	arrayList.push(+prompt());
// }
// console.log(arrayList);
//
// function arrayMax(arraylist2 = []) {
// 	let max = arraylist2[0]
// 	for (let i = 1; i < arraylist2.length; i++) {
// 		arraylist2[i];
// 		if (arraylist2[i] > max) {
// 			max = arraylist2[i];
// 		}
//
// 	}
// 	return max;
// }
// document.write(`<p> Maximal numbers is: ${arrayMax(arrayList)}</p>`);

// 6) створити функцію яка повертає найменьше число з масиву
//
// arrayList = [];
// function radndomGen(){
// 	return numb = Math.floor(Math.random() * 100);
// }
// radndomGen();
// lengthArray = radndomGen();
// for (let i = 0; i < lengthArray; i++) {
// 	arrayList.push(radndomGen());
// }
// console.log(arrayList);
//
// function minNumb(arrayMin =[]){
// 	min = arrayMin[0];
// 	for (let i = 0; i < arrayMin.length; i++) {
// 		if (min<arrayMin[i] ){
// 			min = arrayMin[i];
// 		}
// 	}
// 	return min;
// }
//
// console.log(minNumb(arrayList));

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
// arrayList = [];
// function radndomGen(){
// 	return numb = Math.floor(Math.random() * 100);
// }
// radndomGen();
// lengthArray = radndomGen();
// for (let i = 0; i < lengthArray; i++) {
// 	arrayList.push(+radndomGen());
// }
// console.log(arrayList);
//
// function summNumb(summNum = []) {
// 	let summ = 0;
// 	for (let i = summNum.length-1; i>=0 ; i--) {
// 		summ=summNum[i]+summ;
// 	}
// 	return summ;
// }
//
// console.log(summNumb(arrayList));

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// arrayList = [];
// function radndomGen(){
// 	return numb = Math.floor(Math.random() * 100);
// }
// radndomGen();
// lengthArray = radndomGen();
// for (let i = 0; i < lengthArray; i++) {
// 	arrayList.push(+radndomGen());
// }
// console.log(arrayList);
//
// function summNumb(summNum = []) {
// 	let summ = 0;
// 	for (let i = summNum.length-1; i>=0 ; i--) {
// 		summ=summNum[i]+summ;
// 	}
// 	let midl = summ/summNum.length
// 	return midl;
// }
//
// console.log(summNumb(arrayList));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'},{sity: 'Lviv'}];
//
// function keyReturn() {
// 	let mas = [];
// 	for (const argument of arguments) {
// 		for (const argumentElement of argument) {
// 			for (const argumentElementElement of argumentElement) {
// 				mas.push(argumentElementElement);
// 				console.log(`${argumentElementElement}`);
// 			}
//
// 		}
// 	}
// 	return mas;
// }
//
// console.log(keyReturn(mass));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//
// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'},{sity: 'Lviv'}];
//
// function keyReturn() {
// 	let mas = [];
// 	for (const argument of arguments) {
// 		for (const argumentElement of argument) {
// 			for (const argumentElementElement in argumentElement) {
// 				mas.push(argumentElement[argumentElementElement]);
// 				console.log(`${argumentElement[argumentElementElement]}`);
// 			}
//
// 		}
// 	}
// 	return mas;
// }
//
// console.log(keyReturn(mass));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//
// let mass1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// let mass2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let sumMass = [];
// let lenthMass;
//
// function summMass(massSum1 = [], massSum2 = []) { //1 варіант вирішення, це точно зроблено по умові. з костилем по розмірах масивів.
// 	massSum1.length > massSum2.length ? lenthMass = massSum1.length: lenthMass = massSum2.length
// 	for (let i = 0; i < lenthMass; i++) {
// 		if (!massSum2[i]) massSum2[i] = 0;
// 		if (!massSum1[i]) massSum1[i] = 0;
// 			sumMass.push(massSum1[i] + massSum2[i]);
// 	}
// 	return sumMass;
// }
//
// function summMass(massSum1 = [], massSum2 = []) { // 2 варіант рішення.
// 	for (let i = 0; i < massSum1.length; i++) {
// 		sumMass.push(massSum1[i] + massSum2[i]);
// 	}
// 	return sumMass;
// }
//
// console.log(summMass(mass1, mass2));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function array() {
// 	let minimal = arguments[0];
// 	let maximal = minimal;
// 	for (let i = 1; i < arguments.length; i++) {
// 		if (minimal > arguments[i]) minimal = arguments[i];
// 		if (maximal < arguments[i]) maximal = arguments[i];
// 	}
// 	console.log('max = ' + maximal);
// 	return 'min = ' + minimal;
// }
//
// console.log(array(9, 2, 5, 8, 6, 4, 8, 3, 7));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// 	Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//
// let mass = [{name: 'Dima', age: 13}, {model: 'Camry'}, {sity: 'Lviv'}];
// let youWant = 'iWantN1ame';// iWantName else was key
// function fullReturn(massin, obj = 'Key') {
// 	let mas1 = [];
// 	for (const mas1Element of massin) {
// 		for (const mas1ElementElement in mas1Element) {
// 			obj === 'iWantName' ? console.log(mas1Element[mas1ElementElement]): console.log(mas1ElementElement)
// 		}
// 	}
// return mas1;
// }
// console.log(fullReturn(mass,youWant));;

//- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// let mass = [9,25,68,8,75,3,0,4]
// let i = +prompt('Set i')
// function exchange(mass, i){
// 	if (mass[i+1]) {
// 		let temp = mass[i];
// 		mass[i] = mass[i + 1];
// 	mass[i+1]= temp;
// 	}
// return mass;
// }
// console.log(exchange(mass, i));

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
//
// let arrayNumb = [0, 5, 3, 57, 0, 4, 8, 0, 3, 4, 0, 0, 0, 2, 0];
// let temp = 0;
//
// function nullInEnd(arrayNumb) {
// 	console.log(arrayNumb);
// 	for (let i = arrayNumb.length - 1; i >= 0; i--) {
// 		if (arrayNumb[i] === temp) {
// 			arrayNumb.splice(i, 1);
// 			arrayNumb.push(temp);
// 		}
//
// 	}
// 	return arrayNumb;
// }
//
// console.log(nullInEnd(arrayNumb));

//- Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// function normString(text) {
// 	text = text.trim()
// 	for (let i = 0; i < text.length; i++) {
// 		text = text.replaceAll('  ', ' ')
// 	}
// 	return text;
// }
// console.log(normString(n1));
// console.log(normString(n2));
// console.log(normString(n3));

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
// function enterBody() {
// 	let divElement = document.createElement('div');
// 	divElement.innerHTML = `<h1>Hello owu</h1>`;
// 	document.body.appendChild(divElement);
//
// }
// enterBody();

//Створити функцію яка :
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let textForBody = prompt('Enter text for body')
// let element = prompt('Enter element')
// function addText(el, text) {
// 	let element1 = document.createElement(el);
// 	element1.innerHTML = `<el>${text}</el>`;
// 	document.body.appendChild(element1);
// }
// addText(element, textForBody);

////Створити функцію яка :
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// 	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//
let cars = [
	{
		model: 'Audi:A3',
		class: 'C',
		year: 2005
	},
	{
		model: 'Saturn:Vue',
		class: 'Compact SUV',
		year: 2001
	},
	{
		model: 'Mini:Countryman',
		class: 'Crossover',
		year: 2010,
	},
	{
		model: 'Dodge:Ram',
		class: 'Picap',
		year: 1981
	},
	{
		model: 'BMW:X6',
		class: 'Crossover',
		year: 2008
	}

];
let element = 'div';

function showCars(cars, el) {
	for (const car of cars) {

		let element1 = document.createElement(el);
		console.log(car);
		element1.innerHTML = `<div>model: ${car.model}<br> class:${car.class}<br> year:${car.year}</div><hr>`
		document.body.appendChild(element1);

	}
}

showCars(cars, element);

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// 	Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// 	Для кожної властивості створити всередені блока автомоблія свій блок
// function showCars2(cars, el) {
// 	for (const car of cars) {
// 		document.element.id;
// 		let element1 = document.createElement(el);
// 		for (const carElement in car) {
// 			let element2 = document.createElement(el);
// 			element2.innerHTML = `<el>${carElement}: ${car[carElement]}</el>`;
// 			document.body.appendChild(element2);
//
// 		}
// 		element1.innerHTML = `<hr>`
// 		document.body.appendChild(element1);
//
// 	}
// }
//
// showCars2(cars, element);