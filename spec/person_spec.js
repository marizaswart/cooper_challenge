describe ('Person', function() {
  var person;

  beforeEach(function() {
    person = new Person({gender: 'female', age: 31});
  });

  it('needs to show "female" when female gender is selected', function(){
    expect(person.gender).toEqual('female');
  });

  it('needs to show "31" when an age of 31 is selected', function() {
    expect(person.age).toEqual(31);
  });

});
