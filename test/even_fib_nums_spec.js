var fibonnaciNums = require( './../even_fib_nums.js' );
var chai = require( 'chai' );
var should = chai.should();

describe( 'Sum of even numbers in the Fibonnacci sequence', function() {

  it( 'should return the sum of all even Fibonacci numbers when given 13', function() {
    var sum = fibonnaciNums.sumFibs( 13, 1, 2 );
    sum.should.equal( 10 );
    console.log('Sum = ', sum);
  });

  it( 'should return the sum of all even Fibonacci numbers when given 34', function() {
    var sum = fibonnaciNums.sumFibs( 34, 1, 2 );
    sum.should.equal( 44 );
    console.log('Sum = ', sum);
  });

  it( 'should return the sum of all even Fibonacci numbers when given 4,000,000', function() {
    var sum = fibonnaciNums.sumFibs( 4000000, 1, 2 );
    sum.should.equal( 4613732 );
    console.log('Sum = ', sum);
  });
});
