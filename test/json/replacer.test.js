var assert= require('assert');
var math = require('../../index');


describe('replacer', function () {

  it('should stringify generic JSON', function () {
    var data = {foo: [1,2,3], bar: null, baz: 'str'};
    var json = '{"foo":[1,2,3],"bar":null,"baz":"str"}';
    assert.deepEqual(JSON.stringify(data), json);
  });

  it('should stringify a Complex number', function () {
    var c = new math.type.Complex(2, 4);
    var json = '{"mathjs":"Complex","re":2,"im":4}';

    assert.deepEqual(JSON.stringify(c), json);
  });

  it('should stringify a BigNumber', function () {
    var b = new math.type.BigNumber(5);
    var json = '{"mathjs":"BigNumber","value":"5"}';

    assert.deepEqual(JSON.stringify(b), json);
  });

  it('should stringify a Range', function () {
    var r = new math.type.Range(2, 10);
    var json = '{"mathjs":"Range","start":2,"end":10,"step":1}';
    assert.deepEqual(JSON.stringify(r), json);
  });

  it('should stringify an Index', function () {
    var i = new math.type.Index([0, 10], 2);
    var json = '{"mathjs":"Index","ranges":[' +
        '{"mathjs":"Range","start":0,"end":10,"step":1},' +
        '{"mathjs":"Range","start":2,"end":3,"step":1}' +
        ']}';
    assert.deepEqual(JSON.stringify(i), json);
  });

  it('should stringify a Range (2)', function () {
    var r = new math.type.Range(2, 10, 2);
    var json = '{"mathjs":"Range","start":2,"end":10,"step":2}';
    assert.deepEqual(JSON.stringify(r), json);
  });

  it('should stringify a Unit', function () {
    var u = new math.type.Unit(5, 'cm');
    var json = '{"mathjs":"Unit","value":5,"unit":"cm","fixPrefix":false}';
    assert.deepEqual(JSON.stringify(u), json);
  });

  it('should stringify a Matrix', function () {
    var m = new math.type.Matrix([[1,2],[3,4]]);
    var json = '{"mathjs":"Matrix","data":[[1,2],[3,4]]}';

    assert.deepEqual(JSON.stringify(m), json);
  });

  it('should stringify a ResultSet', function () {
    var r = new math.type.ResultSet([1,2,new math.type.Complex(3,4)]);
    var json = '{"mathjs":"ResultSet","entries":[1,2,{"mathjs":"Complex","re":3,"im":4}]}';
    assert.deepEqual(JSON.stringify(r), json);
  });

  it('should stringify a Matrix containing a complex number', function () {
    var c = new math.type.Complex(4, 5);
    var m = new math.type.Matrix([[1,2],[3,c]]);
    var json = '{"mathjs":"Matrix","data":[[1,2],[3,{"mathjs":"Complex","re":4,"im":5}]]}';

    assert.deepEqual(JSON.stringify(m), json);
  });

  it('should stringify Help', function () {
    var h = new math.type.Help({name: 'foo', description: 'bar'});
    var json = '{"mathjs":"Help","name":"foo","description":"bar"}';

    assert.deepEqual(JSON.parse(JSON.stringify(h)), JSON.parse(json));
  });

});
