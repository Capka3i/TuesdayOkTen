// let time = new Date();
// let hour;
// let minute;
// function timer() {
// 	while (!(hour === 0) && !(minute===0)) {
// 		hour = 20 - time.getHours();
// 		minute = 60 - time.getMinutes();
// 		console.log(hour);
// 		setTimeout(minute,10000)
// 	}
// }
//
// timer(hour, minute);

console.time()
let n1 = '    Harry       Potter      ';
let n2 = '    Ron       Whisley      ';
let n3 = '    Hermione       Granger      ';

const normalize = (str) => {
	return str
		.split(' ')
	   .filter(x => x.length)
	   .join(' ')
};

console.log(normalize(n1));
console.log(normalize(n2));
console.log(normalize(n3));
console.timeEnd()


//- Дано список імен.
console.time()
let n4 = '    Harry       Potter      '
let n5 = '    Ron       Whisley      '
let n6 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
function normString(text) {
	text = text.trim()
	for (let i = 0; i < text.length; i++) {
		text = text.replaceAll('  ', ' ')
	}
	return text;
}
console.log(normString(n4));
console.log(normString(n5));
console.log(normString(n6));
console.timeEnd()