'use strict'

function factory (type, config, load, typed) {
  
  const createUnitsSystem = typed('createUnitsSystem', {
    // Same as above but without the options.
    'string, Object': function (name, obj) {
      return type.Unit.createUnitsSystem(name, obj);
    },
  })

  return createUnitsSystem;
}

exports.name = 'createUnitsSystem'
exports.factory = factory
