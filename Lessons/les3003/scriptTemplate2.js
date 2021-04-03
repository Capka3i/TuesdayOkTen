//1) Напишіть код, який :

//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// let byId = document.getElementById('main_header');
// byId.style.color = 'blue';
// byId.innerText = '(mon-year)';

//b) робить шириниу елементу ul 400px
// let tagName = document.getElementsByTagName("ul");
// for (const tagNameElement of tagName)
//     {
//     tagNameElement.style.width = '400px';
//     }

//c) робить шириниу всіх елементів з класом linkList шириною 50%
// let classLinkList = document.getElementsByClassName('linkList');
// for (const classLinkListElement of classLinkList)
//     {
//     classLinkListElement.style.width = '50%';
//     }

//d) отримує текст який зберігається в елементі з класом listElement2
//
// let listClassName = document.getElementsByClassName('listElement2');
// console.log(listClassName);
// const enterText = 'Hello why constanta';
// for (let i = 0; i < listClassName.length; i++)
//     {
//  //   listClassName[i].innerHTML =`${prompt()}`;
//     listClassName[i].innerHTML = `${enterText}`;
//
//     }

// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let tagNameLi = document.getElementsByTagName('li');
// for (const tagNameLiElement of tagNameLi)
//     {
//     tagNameLiElement.style.backgroundColor = 'grey';
//     }

//f) отримує всі елементи 'a' та додає їм клас anchor
//
// let byTagNameA = document.getElementsByTagName('a');
//
// for (const byTagNameAElement of byTagNameA)
//     {
//     byTagNameAElement.classList.add('anchor')
//     }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на
// 40 пікселів  let tagNameA = document.getElementsByTagName('a'); for (let i = 0; i < tagNameA.length; i++) {
// if(tagNameA[i].innerHTML==='link3'){ tagNameA[i].style.fontSize= '40px'; } }

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// let tagNameA = document.getElementsByTagName('a');
// for (const tagNameAElement of tagNameA)
//     {
//     let textA = tagNameAElement.innerText;
//     tagNameAElement.classList.add('element_'+textA);
//     }

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let byClassName = document.getElementsByClassName('sub-header');
// console.log(byClassName);
// for (const byClassNameElement of byClassName)
//     {
//     byClassNameElement.style.backgroundColor= prompt('Enter color','white');
//     }

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
//
// let byClassName = document.getElementsByClassName('sub-header');
// for (const byClassNameElement of byClassName)
//     {
//     if (byClassNameElement.innerText === 'content 2 segment')
//         {
//         byClassNameElement.style.color = prompt('Enter color font','black');
//         }
//     }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let byClassName = document.getElementsByClassName('content_1');
// for (const byClassNameElement of byClassName) {
// 	byClassNameElement.innerText = prompt('Enter Text');
// }

// l) отримати елементи p та змінити їм padding на 20px
//
// let byTagName = document.getElementsByTagName('p');
// for (const byTagNameElement of byTagName) {
//     byTagNameElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// let byClassName = document.getElementsByClassName('text2');
// for (const byClassNameElement of byClassName) {
//     byClassNameElement.innerHTML = '(mon-year)';
// }

//2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
// let htmlDivElement = document.createElement('div');
// for (const rule of rules) {
//     let divElement = document.createElement('div');
//     divElement.innerHTML = `<div><h2>${rule.title}</h2><p>${rule.body}</p></div>`;
//     htmlDivElement.appendChild(divElement);
// }
// document.body.appendChild(htmlDivElement);

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
// let usersWithId = [
// 	{id: 1, name: 'vasya', age: 31, status: false},
// 	{id: 2, name: 'petya', age: 30, status: true},
// 	{id: 3, name: 'kolya', age: 29, status: true},
// 	{id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
// 	{user_id: 3, country: 'USA', city: 'Portland'},
// 	{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// 	{user_id: 2, country: 'Poland', city: 'Krakow'},
// 	{user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// for (let j = usersWithId.length - 1; j >= 0; j--) {
// 	for (let i = citiesWithId.length - 1; i >= 0; i--) {
// 		if (citiesWithId[i].user_id === usersWithId[j].id) {
// 			usersWithId[j].adress = citiesWithId[i];
//
// 		}
// 	}
// }
// console.table(usersWithId)

//