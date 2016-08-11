describe("CooperRating", function() {

  beforeEach(function() {
    var person = new Person ({ selected_gender: "male", age: 21, distance_performed: 1980 });
    //var what_is = new CooperRating();
  });

  it("finds the cooper test rating to be \"Bad\"", function() {
    //what_is.the_cooper_rating_of(person);
    person.get_rating();
    expect(person.rating_of).toEqual("Bad");
  });

});
