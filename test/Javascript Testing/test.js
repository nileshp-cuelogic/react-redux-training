import {assert,expect,should} from 'chai';


should();



describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(1, [1, 2, 3].indexOf(2));
    });
  });
});


var testObject = {
  id: 1
}

describe('Testing length', function () {
  it('length should be 4', function () {
    // chaiAssert.lengthOf("sass", 4);
    assert.isBoolean(false, "[dsdsd]");
    assert.ok(1 == 1, "[message]");
    assert.property(testObject, 'id', "[message]");
  });
});


describe('Testing Expect', function () {
  it('expect string', function () {
    // chaiAssert.lengthOf("sass", 4);
    expect(1).to.be.a("number");
    //expect(new Date()).to.be.an("string");
  });
});


describe('Testing should', function () {
  it('should string', function () {
    testObject.should.be.a('object');
  });
});

var foo = "sss";

describe('Testting type of foo', function () {
  it('length should be 4', function () {
    expect(foo).to.be.a('string');
  });
});