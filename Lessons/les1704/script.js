//Зробити свій розпорядок дня, використовуючи при цьому лише Callback,Promis та async await.
// повино бути зроблено не менше 8 умов.
//
const numb = prompt('set day');
function uping(day, up) {
	setTimeout( () => {
	if (day<7){
		console.log('got up now');
		up(1);
	} else {
		console.log('off clock and sleep');
		up(10,true);
	}
	},day*1000)
}
function cook(goShop, product){
	if (!product){
		goShop();
	} else {
		console.log(`cook something ${product}`);

	}

}

uping(numb, (beer, lonelySleep)=>{
	if (lonelySleep){
		console.log('hard up');
		cook(null,`aggs`)
	}

	setTimeout()

})

function goToShop(money, ){

}
