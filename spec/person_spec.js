describe ("Person", function() {

  //set gender, age and performance
  beforeEach(function() {
    person = new Person ({selected_gender: "male", age: 21, distance_performed: 1980 });
  });

  it("has the selected gender to \'male\' ", function() {
    expect(person.selected_gender).toEqual("male");
  });

  it("has the age of 21", function() {
    expect(person.age).toEqual(21);
  });

  it("has the result of 1980 metres run", function() {
    expect(person.distance_performed).toEqual(1980);
  });

  it("has a calculated cooper test value of 32,98", function() {
    person.calculate_cooper_value();
    expect(person.cooper_value).toEqual(32.98);
  });
});
