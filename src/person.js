function Person(attr) {
  this.name = attr.name;
  this.gender = attr.gender;
  this.age = attr.age;
}
Person.prototype.calculate_cooper = function(method) {
  calculator = new CooperChallenge();
  calculator.cooper(this, method);
};
