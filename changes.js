    // remove all 'д.е.', 'де'
    expr = expr.replace(/д\.е\./g, "");
    expr = expr.replace(/де/g, "");


  parse.isValidLatinOrGreek = function isValidLatinOrGreek(c) {
    return (/^[a-zA-Zа-яА-Я_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(c)
    );
  };



  function parseUnit() {
    var unitName = '';

    // Alphanumeric characters only; matches [a-zA-Z0-9а-яА-Я.%]
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
      'да': { name: 'да', value: 1e1, scientific: false },
      'г': { name: 'г', value: 1e2, scientific: false },
      'к': { name: 'к', value: 1e3, scientific: true },
      'М': { name: 'М', value: 1e6, scientific: true },
      'Г': { name: 'Г', value: 1e9, scientific: true },
      'Т': { name: 'Т', value: 1e12, scientific: true },
      'П': { name: 'П', value: 1e15, scientific: true },
      'Э': { name: 'Э', value: 1e18, scientific: true },
      'З': { name: 'З', value: 1e21, scientific: true },
      'И': { name: 'И', value: 1e24, scientific: true },

      'д': { name: 'д', value: 1e-1, scientific: false },
      'с': { name: 'с', value: 1e-2, scientific: false },
      'м': { name: 'м', value: 1e-3, scientific: true },
      'мк': { name: 'мк', value: 1e-6, scientific: true },
      'н': { name: 'н', value: 1e-9, scientific: true },
      'п': { name: 'п', value: 1e-12, scientific: true },
      'ф': { name: 'ф', value: 1e-15, scientific: true },
      'а': { name: 'а', value: 1e-18, scientific: true },
      'з': { name: 'з', value: 1e-21, scientific: true },
      'и': { name: 'и', value: 1e-24, scientific: true }
















      //rus
      'дека': { name: 'дека', value: 1e1, scientific: false },
      'гекто': { name: 'гекто', value: 1e2, scientific: false },
      'кило': { name: 'кило', value: 1e3, scientific: true },
      'мега': { name: 'мега', value: 1e6, scientific: true },
      'гига': { name: 'гига', value: 1e9, scientific: true },
      'тера': { name: 'тера', value: 1e12, scientific: true },
      'пета': { name: 'пета', value: 1e15, scientific: true },
      'экса': { name: 'экса', value: 1e18, scientific: true },
      'зетта': { name: 'зетта', value: 1e21, scientific: true },
      'иотта': { name: 'иотта', value: 1e24, scientific: true },

      'деци': { name: 'деци', value: 1e-1, scientific: false },
      'санти': { name: 'санти', value: 1e-2, scientific: false },
      'мили': { name: 'мили', value: 1e-3, scientific: true },
      'микро': { name: 'микро', value: 1e-6, scientific: true },
      'нано': { name: 'нано', value: 1e-9, scientific: true },
      'пико': { name: 'пико', value: 1e-12, scientific: true },
      'фемто': { name: 'фемто', value: 1e-15, scientific: true },
      'атто': { name: 'атто', value: 1e-18, scientific: true },
      'зепто': { name: 'зепто', value: 1e-21, scientific: true },
      'иокто': { name: 'иокто', value: 1e-24, scientific: true }




      //rus
      ,
      'да': { name: 'да', value: 1e2, scientific: false },
      'г': { name: 'г', value: 1e4, scientific: false },
      'к': { name: 'к', value: 1e6, scientific: true },
      'М': { name: 'М', value: 1e12, scientific: true },
      'Г': { name: 'Г', value: 1e18, scientific: true },
      'Т': { name: 'Т', value: 1e24, scientific: true },
      'П': { name: 'П', value: 1e30, scientific: true },
      'Э': { name: 'Э', value: 1e36, scientific: true },
      'З': { name: 'З', value: 1e42, scientific: true },
      'И': { name: 'И', value: 1e48, scientific: true },

      'д': { name: 'д', value: 1e-2, scientific: false },
      'с': { name: 'с', value: 1e-4, scientific: false },
      'м': { name: 'м', value: 1e-6, scientific: true },
      'мк': { name: 'мк', value: 1e-12, scientific: true },
      'н': { name: 'н', value: 1e-18, scientific: true },
      'п': { name: 'п', value: 1e-24, scientific: true },
      'ф': { name: 'ф', value: 1e-30, scientific: true },
      'а': { name: 'а', value: 1e-36, scientific: true },
      'з': { name: 'з', value: 1e-42, scientific: true },
      'и': { name: 'и', value: 1e-48, scientific: true }




      //rus
      'к': { name: 'к', value: 1e3, scientific: true },
      'М': { name: 'М', value: 1e6, scientific: true },
      'Г': { name: 'Г', value: 1e9, scientific: true },
      'Т': { name: 'Т', value: 1e12, scientific: true },
      'П': { name: 'П', value: 1e15, scientific: true },
      'Э': { name: 'Э', value: 1e18, scientific: true },
      'З': { name: 'З', value: 1e21, scientific: true },
      'И': { name: 'И', value: 1e24, scientific: true },





      // rus
      'кило': { name: 'кило', value: 1e3, scientific: true },
      'мега': { name: 'мега', value: 1e6, scientific: true },
      'гига': { name: 'гига', value: 1e9, scientific: true },
      'тера': { name: 'тера', value: 1e12, scientific: true },
      'пета': { name: 'пета', value: 1e15, scientific: true },
      'экса': { name: 'экса', value: 1e18, scientific: true },
      'зетта': { name: 'зетта', value: 1e21, scientific: true },
      'иотта': { name: 'иотта', value: 1e24, scientific: true },





var isValidAlpha = function isValidAlpha(p) {
        return (/^[a-zA-Zа-яА-Я.%]$/.test(p)
        );
      };
