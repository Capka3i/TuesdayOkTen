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
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let stringify = JSON.stringify(users);
let map = users.map((value, index) =>{
	value.index = index;
	return value;
}) ;
console.log(map);
console.log(JSON.parse(stringify))
console.log(stringify);




