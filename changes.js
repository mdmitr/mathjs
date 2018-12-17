    // remove all '�.�.', '��'
    expr = expr.replace(/�\.�\./g, "");
    expr = expr.replace(/��/g, "");


  parse.isValidLatinOrGreek = function isValidLatinOrGreek(c) {
    return (/^[a-zA-Z�-��-�_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(c)
    );
  };



  function parseUnit() {
    var unitName = '';

    // Alphanumeric characters only; matches [a-zA-Z0-9�-��-�.%]
    // . = 46
    // % = 37
    var code = text.charCodeAt(index);
    while (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 1040 && code <= 1103 || code == 37 || code == 46 ) {
      unitName += c;
      next();
      code = text.charCodeAt(index);
    }

    // Must begin with [a-zA-Z%]
    code = unitName.charCodeAt(0);
    if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 1040 && code <= 1103 || code == 37) {
      return unitName || null;
    } else {
      return null;
    }
  }



  Unit.prototype.toSystemBase = function (system_base) {
    var ret = this.clone();

    var proposedUnitList = [];

    // Multiple units or units with powers are formatted like this:
    // 5 (kg m^2) / (s^3 mol)
    // Build an representation from the base units of the SI unit system
    for (var i = 0; i < BASE_DIMENSIONS.length; i++) {
      var baseDim = BASE_DIMENSIONS[i];
      if (Math.abs(ret.dimensions[i] || 0) > 1e-12) {
        if (UNIT_SYSTEMS[system_base].hasOwnProperty(baseDim)) {
          proposedUnitList.push({
            unit: UNIT_SYSTEMS[system_base][baseDim].unit,
            prefix: UNIT_SYSTEMS[system_base][baseDim].prefix,
            power: ret.dimensions[i] || 0
          });
        } else {
          throw new Error('Cannot express custom unit ' + baseDim + ' in ' + system_base + 'units');
        }
      }
    }

    // Replace this unit list with the proposed list
    ret.units = proposedUnitList;

    ret.isUnitListSimplified = true;

    return ret;
  };







      //rus
      '��': { name: '��', value: 1e1, scientific: false },
      '�': { name: '�', value: 1e2, scientific: false },
      '�': { name: '�', value: 1e3, scientific: true },
      '�': { name: '�', value: 1e6, scientific: true },
      '�': { name: '�', value: 1e9, scientific: true },
      '�': { name: '�', value: 1e12, scientific: true },
      '�': { name: '�', value: 1e15, scientific: true },
      '�': { name: '�', value: 1e18, scientific: true },
      '�': { name: '�', value: 1e21, scientific: true },
      '�': { name: '�', value: 1e24, scientific: true },

      '�': { name: '�', value: 1e-1, scientific: false },
      '�': { name: '�', value: 1e-2, scientific: false },
      '�': { name: '�', value: 1e-3, scientific: true },
      '��': { name: '��', value: 1e-6, scientific: true },
      '�': { name: '�', value: 1e-9, scientific: true },
      '�': { name: '�', value: 1e-12, scientific: true },
      '�': { name: '�', value: 1e-15, scientific: true },
      '�': { name: '�', value: 1e-18, scientific: true },
      '�': { name: '�', value: 1e-21, scientific: true },
      '�': { name: '�', value: 1e-24, scientific: true }
















      //rus
      '����': { name: '����', value: 1e1, scientific: false },
      '�����': { name: '�����', value: 1e2, scientific: false },
      '����': { name: '����', value: 1e3, scientific: true },
      '����': { name: '����', value: 1e6, scientific: true },
      '����': { name: '����', value: 1e9, scientific: true },
      '����': { name: '����', value: 1e12, scientific: true },
      '����': { name: '����', value: 1e15, scientific: true },
      '����': { name: '����', value: 1e18, scientific: true },
      '�����': { name: '�����', value: 1e21, scientific: true },
      '�����': { name: '�����', value: 1e24, scientific: true },

      '����': { name: '����', value: 1e-1, scientific: false },
      '�����': { name: '�����', value: 1e-2, scientific: false },
      '����': { name: '����', value: 1e-3, scientific: true },
      '�����': { name: '�����', value: 1e-6, scientific: true },
      '����': { name: '����', value: 1e-9, scientific: true },
      '����': { name: '����', value: 1e-12, scientific: true },
      '�����': { name: '�����', value: 1e-15, scientific: true },
      '����': { name: '����', value: 1e-18, scientific: true },
      '�����': { name: '�����', value: 1e-21, scientific: true },
      '�����': { name: '�����', value: 1e-24, scientific: true }




      //rus
      ,
      '��': { name: '��', value: 1e2, scientific: false },
      '�': { name: '�', value: 1e4, scientific: false },
      '�': { name: '�', value: 1e6, scientific: true },
      '�': { name: '�', value: 1e12, scientific: true },
      '�': { name: '�', value: 1e18, scientific: true },
      '�': { name: '�', value: 1e24, scientific: true },
      '�': { name: '�', value: 1e30, scientific: true },
      '�': { name: '�', value: 1e36, scientific: true },
      '�': { name: '�', value: 1e42, scientific: true },
      '�': { name: '�', value: 1e48, scientific: true },

      '�': { name: '�', value: 1e-2, scientific: false },
      '�': { name: '�', value: 1e-4, scientific: false },
      '�': { name: '�', value: 1e-6, scientific: true },
      '��': { name: '��', value: 1e-12, scientific: true },
      '�': { name: '�', value: 1e-18, scientific: true },
      '�': { name: '�', value: 1e-24, scientific: true },
      '�': { name: '�', value: 1e-30, scientific: true },
      '�': { name: '�', value: 1e-36, scientific: true },
      '�': { name: '�', value: 1e-42, scientific: true },
      '�': { name: '�', value: 1e-48, scientific: true }




      //rus
      '�': { name: '�', value: 1e3, scientific: true },
      '�': { name: '�', value: 1e6, scientific: true },
      '�': { name: '�', value: 1e9, scientific: true },
      '�': { name: '�', value: 1e12, scientific: true },
      '�': { name: '�', value: 1e15, scientific: true },
      '�': { name: '�', value: 1e18, scientific: true },
      '�': { name: '�', value: 1e21, scientific: true },
      '�': { name: '�', value: 1e24, scientific: true },





      // rus
      '����': { name: '����', value: 1e3, scientific: true },
      '����': { name: '����', value: 1e6, scientific: true },
      '����': { name: '����', value: 1e9, scientific: true },
      '����': { name: '����', value: 1e12, scientific: true },
      '����': { name: '����', value: 1e15, scientific: true },
      '����': { name: '����', value: 1e18, scientific: true },
      '�����': { name: '�����', value: 1e21, scientific: true },
      '�����': { name: '�����', value: 1e24, scientific: true },





var isValidAlpha = function isValidAlpha(p) {
        return (/^[a-zA-Z�-��-�.%]$/.test(p)
        );
      };
