const arrayPrefer = require("../index.js");
const should = require('should');
const assert = require('assert');

describe('', function(){
    it('arrayPrefer is a function', function(){
	     arrayPrefer.should.be.type('function');
    });

    it("arrayPrefer() returns undefined", function(){
	     assert.ok(arrayPrefer()===undefined);
    });

    it("arrayPrefer(12345) returns undefined", function(){
      assert.ok(arrayPrefer()===undefined);
    });

    it("arrayPrefer([3,1,2]) returns [3,1,2]", function(){
      arrayPrefer([3,1,2]).should.deepEqual([3,1,2]);
    });

    it("arrayPrefer([3,1,2], (x)=>(x<3)) returns [1,2,3]", function(){
      arrayPrefer([3,1,2], (x)=>(x<3)).should.deepEqual([1,2,3]);
    });

    it("arrayPrefer([3,1,2], (x)=>(x<3), 0) returns [3,1,2]", function(){
      arrayPrefer([3,1,2], (x)=>(x<3), 0).should.deepEqual([3,1,2]);
    });

    it("arrayPrefer([3,1,2], (x)=>(x<3), 1) returns [1,3,2]", function(){
      arrayPrefer([3,1,2], (x)=>(x<3), 1).should.deepEqual([1,3,2]);
    });

    it("arrayPrefer([3,1,2], (x)=>(x<3), 2) returns [1,2,3]", function(){
      arrayPrefer([3,1,2], (x)=>(x<3), 2).should.deepEqual([1,2,3]);
    });


});
