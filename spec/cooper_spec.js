describe ('CooperChallenge', function() {
  var calculator;
  var person;
  var age;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 31, distance: 1657});
    calculator = new CooperChallenge();
  });

  it('has an age selected', function() {
    expect(person.age(18)).toEqual('17-19');
  });

  it('calculate the fitness level of the athlete', function() {
    calculator.cooper(person);
    expect(person.distance(1657)).toEqual('below average');
  });

});
