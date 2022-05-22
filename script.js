function isLucky(num) { // Проверяем, счастливый ли билет
	let str = String(num);

    let str1 = str.slice(0, str.length / 2);
    let str2 = str.slice(str.length / 2);

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < str1.length; i++) {
        sum1 += +str1[i];
        sum2 += +str2[i];
    }
	return sum1 == sum2;
}

function normalizeNum(num, digitsAmount) { // Добавляем нули если цифр мало
	let str = String(num);
	return formStr('0', digitsAmount - str.length) + str; 
}

function formStr(data, length) { // Формируем строку
	let str = '';

    for (let i = 0; i < length; i++) {
        str = data + str;
    }
    return str;
}

function getLast(digitsAmount) { // Ищем билет, до которого надо искать
    let str = '';

    for (let i = 0; i < digitsAmount; i++) {
        str += '9';
    }
    return str;
}

function getFirst(digitsAmount) { // Ищем билет, с которого надо искать
    let str = '';

    while (str.length < digitsAmount / 2 - 1) {
        str += '0';
    }
    str = '1' + str + '1';
    return str;
}

function getLuckyTickets(digitsAmount) { // Получаем все счастливые билеты с заданым кол-вом цифр
	let result = [];
	
	let first = getFirst(digitsAmount);
	let last  = getLast(digitsAmount);
	
	for (let i = first; i <= last; i++) {
		let ticketNum = normalizeNum(i, digitsAmount);
		
		if (isLucky(ticketNum)) {
			result.push(ticketNum);
		}
	}
	
	return result;
}

console.log(getLuckyTickets(4)); // !!!Осторожно, вызов функции нагружает проц!!!