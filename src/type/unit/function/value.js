'use strict'

function factory(type, config, load, typed) {

    const value = typed('value', {
        'Unit': function (x) {
            return x.toNumber();
        },
        'string': function (x) {
            if (type.Unit.isValuelessUnit(x)) {
              return 1; // a pure unit
            }
      
            return type.Unit.parse(x, { allowNoUnits: true }).toNumber() // a unit with value, like '5cm'
          },
      
          'number | BigNumber | Fraction | Complex, string': function (value, unit) {
            return new type.Unit(value, unit).toNumber()
          },
    })

    return value;
}

exports.name = 'value'
exports.factory = factory
