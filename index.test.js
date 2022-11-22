const jsCalc = require('./index.js');

/**
 * 加法
 */
test('add 0.1 + 0.2 to equal 0.3', () => {
	expect(jsCalc.add(0.1, 0.2)).toBe(0.3);
});

test('add 0.7 + 0.1 to equal 0.8', () => {
	expect(jsCalc.add(0.7, 0.1)).toBe(0.8);
});

test('add 0.2 + 0.4 to equal 0.6', () => {
	expect(jsCalc.add(0.2, 0.4)).toBe(0.6);
});

test('add 2.22 + 0.1 to equal 2.32', () => {
	expect(jsCalc.add(2.22, 0.1)).toBe(2.32);
});

test('add 2.26 + 0.1 to equal 2.36', () => {
	expect(jsCalc.add(2.26, 0.1)).toBe(2.36);
});

/**
 * 减法
 */
1.5 - 1.2; // 0.30000000000000004
0.3 - 0.2; // 0.09999999999999998
test('subtract 1.5 - 1.2 to equal 0.3', () => {
	expect(jsCalc.subtract(1.5, 1.2)).toBe(0.3);
});

test('subtract 0.3 - 0.2 to equal 0.1', () => {
	expect(jsCalc.subtract(0.3, 0.2)).toBe(0.1);
});

/**
 * 乘法
 */
test('ride 19.9 * 100 to equal 1990', () => {
	expect(jsCalc.ride(19.9, 100)).toBe(1990);
});

test('ride 1306377.64 * 100 to equal 130637764', () => {
	expect(jsCalc.ride(1306377.64, 100)).toBe(130637764);
});

test('ride 0.7 * 180 to equal 126', () => {
	expect(jsCalc.ride(0.7, 180)).toBe(126);
});

test('ride 9.7 * 100 to equal 970', () => {
	expect(jsCalc.ride(9.7, 100)).toBe(970);
});

test('ride 39.7 * 100 to equal 3970', () => {
	expect(jsCalc.ride(39.7, 100)).toBe(3970);
});

/**
 * 除法
 */
test('divide 0.3 / 0.1 to equal 3', () => {
	expect(jsCalc.divide(0.3, 0.1)).toBe(3);
});

test('divide 0.69 / 10 to equal 0.069', () => {
	expect(jsCalc.divide(0.69, 10)).toBe(0.069);
});
