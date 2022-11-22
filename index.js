module.exports = {
	add: addCalc,
	subtract: subtractCalc,
	ride: rideCalc,
	divide: divideCalc
};

// 加法 例如: 2.22 + 0.1
function addCalc(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw '相加的两个数 非数字!';
	}
	let numLen1 = getPointBackLen(num1); // 2
	let numLen2 = getPointBackLen(num2); // 1
	let maxLen = Math.max(numLen1, numLen2); // 2
	// 没有小数位 直接返回计算结果
	if (maxLen === 0) return num1 + num2;

	let num1Str = clearPoint(num1); // 222
	let num2Str = clearPoint(num2); // 01

	// 根据numLenDiff的正负来判断哪个数字的位数是短的，来走补全
	let numLenDiff = numLen1 - numLen2; // 1 走第二个小数补全位数
	// 第一个数字补全位数
	if (numLenDiff < 0) {
		num1Str = addZeroBack(num1Str, numLenDiff);
	}
	// 第一个数字补全位数 第二个数字补全位数
	if (numLenDiff > 0) {
		num2Str = addZeroBack(num2Str, numLenDiff); // 010
	}
	// 222 + 010 = 232
	let preResult = Number(num1Str) + Number(num2Str);
	// 结尾把之前预处理的计算结果 除以最大小数位 例如 223 / 100 ==> 2.23
	return preResult / Math.pow(10, maxLen);
}
// 减法 1.55 - 1.2
function subtractCalc(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw '相加的两个数 非数字!';
	}
	let numLen1 = getPointBackLen(num1); // 2
	let numLen2 = getPointBackLen(num2); // 1
	let maxLen = Math.max(numLen1, numLen2); // 2
	// 没有小数位 直接返回计算结果
	if (maxLen === 0) return num1 - num2;

	let num1Str = clearPoint(num1); // 155
	let num2Str = clearPoint(num2); // 12

	// 根据numLenDiff的正负来判断哪个数字的位数是短的，来走补全
	let numLenDiff = numLen1 - numLen2; // 1 走第二个小数补全位数
	// 第一个数字补全位数
	if (numLenDiff < 0) {
		num1Str = addZeroBack(num1Str, numLenDiff);
	}
	// 第一个数字补全位数 第二个数字补全位数
	if (numLenDiff > 0) {
		num2Str = addZeroBack(num2Str, numLenDiff); // 120
	}
	// 155 - 120 = 35
	let preResult = Number(num1Str) - Number(num2Str);
	// 结尾把之前预处理的计算结果 除以最大小数位 例如 35 / 100 ==> 0.35
	return preResult / Math.pow(10, maxLen);
}
// 乘法 39.7 * 100
function rideCalc(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw '相加的两个数 非数字!';
	}
	let numLen1 = getPointBackLen(num1); // 1
	let numLen2 = getPointBackLen(num2); // 0
	let maxLen = Math.max(numLen1, numLen2); // 1
	// 没有小数位 直接返回计算结果
	if (maxLen === 0) return num1 * num2;

	let num1Str = clearPoint(num1); // 397
	let num2Str = clearPoint(num2); // 100

	// 小数位数的总数
	let digitLen = numLen1 + numLen2; // 1 走第二个小数补全位数
	// 397 * 100 = 39700
	let preResult = Number(num1Str) * Number(num2Str);
	// 结尾把之前预处理的计算结果 除以最大小数位 例如 39700 / 10 ==> 3970
	return preResult / Math.pow(10, digitLen);
}
// 除法 0.69 / 10
function divideCalc(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw '相加的两个数 非数字!';
	}
	let numLen1 = getPointBackLen(num1); // 2
	let numLen2 = getPointBackLen(num2); // 0
	let maxLen = Math.max(numLen1, numLen2); // 2
	// 没有小数位 直接返回计算结果
	if (maxLen === 0) return num1 / num2;

	let num1Str = clearPoint(num1); // '069'
	let num2Str = clearPoint(num2); // '10'

	let digitLen = numLen1 - numLen2; //小数位数的差数
	// 69 / 10 = 6.9
	let preResult = Number(num1Str) / Number(num2Str);
	// 除法计算后可能的小数位数
	resultLen = getPointBackLen(preResult);

	digitLen += resultLen; // 1
	// 6.9 => 69
	preResult = Number(clearPoint(preResult));

	return preResult / Math.pow(10, digitLen);
}

// 取得小数位数
function getPointBackLen(num) {
	try {
		return String(num).split('.')[1].length;
	} catch (e) {
		return 0;
	}
}

// 数字清除小数位后转字符串
function clearPoint(num) {
	return String(num).replace('.', '');
}

//后补0补够位数,str是当前的字符串，len是应该补的位数
function addZeroBack(str, len) {
	let tmpLen = Math.abs(len);
	let result = str;
	while (tmpLen) {
		result += '0';
		tmpLen--;
	}
	return result;
}
