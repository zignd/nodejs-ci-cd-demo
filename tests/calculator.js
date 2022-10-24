const test = require('ava')

const calculator = require('../src/calculator')

test('sum should sum', t => {
	const result = calculator.sum(2, 3)
  t.is(result, 5)
})

test('subtract should subtract', async t => {
	const result = calculator.subtract(7, 10)
  t.is(result, -3)
})

test('multiply should multiply', async t => {
	const result = calculator.multiply(3, 2)
  t.is(result, 6)
})

test('divide should divide', async t => {
	const result = calculator.divide(9, 3)
  t.is(result, 3)
})