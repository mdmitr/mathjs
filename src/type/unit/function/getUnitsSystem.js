'use strict'

function factory (type, config, load, typed) {
  
  const getUnitsSystem = typed('getUnitsSystem', {
    // Same as above but without the options.
    'string': function (name) {
      return type.Unit.getUnitsSystem(name);
    },
  })

  return getUnitsSystem;
}

exports.name = 'getUnitsSystem'
exports.factory = factory
