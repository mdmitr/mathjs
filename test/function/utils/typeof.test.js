// test typeOf
import assert from 'assert'

import math from '../../../src/main'
const Index = math.type.Index
const Range = math.type.Range
const Help = math.type.Help
const Unit = math.type.Unit
const Complex = math.type.Complex
const Fraction = math.type.Fraction

describe('typeOf', function () {
  it('should return number type for a number', function () {
    assert.strictEqual(math.typeOf(2), 'number')
    assert.strictEqual(math.typeOf(Number(2)), 'number')
    assert.strictEqual(math.typeOf(Number(2.3)), 'number')
    assert.strictEqual(math.typeOf(NaN), 'number')
  })

  it('should return bignumber type for a bignumber', function () {
    assert.strictEqual(math.typeOf(math.bignumber(0.1)), 'BigNumber')
    assert.strictEqual(math.typeOf(new math.type.BigNumber('0.2')), 'BigNumber')
  })

  it('should return string type for a string', function () {
    assert.strictEqual(math.typeOf('hello there'), 'string')
    assert.strictEqual(math.typeOf(String('hello there')), 'string')
  })

  it('should return complex type for a complex number', function () {
    assert.strictEqual(math.typeOf(new Complex(2, 3)), 'Complex')
    assert.strictEqual(math.typeOf(math.complex(2, 3)), 'Complex')
  })

  it('should return complex type for a fraction', function () {
    assert.strictEqual(math.typeOf(new Fraction(2, 3)), 'Fraction')
    assert.strictEqual(math.typeOf(math.fraction(2, 3)), 'Fraction')
  })

  it('should return array type for an array', function () {
    assert.strictEqual(math.typeOf([1, 2, 3]), 'Array')
  })

  it('should return array type for an array', function () {
    assert.strictEqual(math.typeOf([1, 2, 3]), 'Array')
  })

  it('should return matrix type for a matrix', function () {
    assert.strictEqual(math.typeOf(math.matrix()), 'Matrix')
    assert.strictEqual(math.typeOf(math.matrix()), 'Matrix')
  })

  it('should return unit type for a unit', function () {
    assert.strictEqual(math.typeOf(new Unit(5, 'cm')), 'Unit')
    assert.strictEqual(math.typeOf(math.unit('5cm')), 'Unit')
  })

  it('should return boolean type for a boolean', function () {
    assert.strictEqual(math.typeOf(true), 'boolean')
    assert.strictEqual(math.typeOf(false), 'boolean')
    assert.strictEqual(math.typeOf(Boolean(true)), 'boolean')
  })

  it('should return null type for null', function () {
    assert.strictEqual(math.typeOf(null), 'null')
  })

  it('should return undefined type for undefined', function () {
    assert.strictEqual(math.typeOf(undefined), 'undefined')
  })

  it('should return date type for a Date', function () {
    assert.strictEqual(math.typeOf(new Date()), 'Date')
  })

  it('should return the type of a regexp', function () {
    assert.strictEqual(math.typeOf(/regexp/), 'RegExp')
  })

  it('should return function type for a function', function () {
    function f1 () {}
    assert.strictEqual(math.typeOf(f1), 'Function')
  })

  it('should return function type for a chain', function () {
    assert.strictEqual(math.typeOf(math.chain(3)), 'Chain')
  })

  it('should return function type for a ResultSet', function () {
    assert.strictEqual(math.typeOf(math.eval('a=2\nb=3')), 'ResultSet')
    assert.strictEqual(math.typeOf(new math.type.ResultSet([2, 3])), 'ResultSet')
  })

  it('should return function type for nodes', function () {
    const constantNode = new math.expression.node.ConstantNode(2)
    const symbolNode = new math.expression.node.SymbolNode('x')
    const indexNode = new math.expression.node.IndexNode([])

    assert.strictEqual(math.typeOf(new math.expression.node.AccessorNode(symbolNode, indexNode)), 'AccessorNode')
    assert.strictEqual(math.typeOf(new math.expression.node.ArrayNode([])), 'ArrayNode')
    assert.strictEqual(math.typeOf(new math.expression.node.AssignmentNode(symbolNode, constantNode)), 'AssignmentNode')
    assert.strictEqual(math.typeOf(new math.expression.node.BlockNode([])), 'BlockNode')
    assert.strictEqual(math.typeOf(new math.expression.node.ConditionalNode(symbolNode, constantNode, constantNode)), 'ConditionalNode')
    assert.strictEqual(math.typeOf(constantNode), 'ConstantNode')
    assert.strictEqual(math.typeOf(new math.expression.node.FunctionAssignmentNode('f', [], constantNode)), 'FunctionAssignmentNode')
    assert.strictEqual(math.typeOf(new math.expression.node.FunctionNode('f', [])), 'FunctionNode')
    assert.strictEqual(math.typeOf(indexNode), 'IndexNode')
    assert.strictEqual(math.typeOf(new math.expression.node.ObjectNode({})), 'ObjectNode')
    assert.strictEqual(math.typeOf(new math.expression.node.ParenthesisNode(constantNode)), 'ParenthesisNode')
    assert.strictEqual(math.typeOf(new math.expression.node.RangeNode(constantNode, constantNode)), 'RangeNode')
    assert.strictEqual(math.typeOf(symbolNode), 'SymbolNode')
  })

  it('should return function type for an index', function () {
    assert.strictEqual(math.typeOf(new Index([0, 10])), 'Index')
  })

  it('should return function type for a range', function () {
    assert.strictEqual(math.typeOf(new Range(0, 10)), 'Range')
  })

  it('should return function type for a help object', function () {
    assert.strictEqual(math.typeOf(new Help({}, {})), 'Help')
  })

  it('should return object type for an object', function () {
    assert.strictEqual(math.typeOf({}), 'Object')
  })

  it('should throw an error if called with a wrong number of arguments', function () {
    assert.throws(function () { math.typeOf() })
    assert.throws(function () { math.typeOf(1, 2) })
  })

  it('should LaTeX typeOf', function () {
    const expression = math.parse('typeOf(1)')
    assert.strictEqual(expression.toTex(), '\\mathrm{typeOf}\\left(1\\right)')
  })

  it('should throw an error in case of wrong number of arguments', function () {
    assert.throws(function () { math.typeOf() }, /Too few arguments in function typeOf/)
    assert.throws(function () { math.typeOf(1, 2, 3) }, /Too many arguments in function typeOf/)
  })

  it('should still allow using the deprecated function math.typeof', () => {
    // deprecated in v6.0.0. Clean up some day
    const warnOriginal = console.warn
    const logs = []
    console.warn = (...args) => logs.push(args)

    assert.strictEqual(math.typeof(true), 'boolean')

    assert.deepStrictEqual(logs, [
      ['Function "typeof" has been renamed to "typeOf", please use the new function instead.']
    ])

    console.warn = warnOriginal
  })
})
