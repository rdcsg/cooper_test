describe("rating_of", function() {

  beforeEach(function() {
    var person = new Person ({ selected_gender: "male", age: 21, distance_performed: 1980 });
  });

  it("finds the cooper test rating to be \"Bad\"", function() {
    person.get_rating();
    expect(person.rating).toEqual("Bad");
  });

});
