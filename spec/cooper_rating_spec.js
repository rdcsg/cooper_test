describe("CooperRating", function() {

  beforeEach(function() {
    person = new Person ({ selected_gender: "male", age: 21, distance_performed: 1980 });
    //what_is_the = new CooperRating();
  });

  it("finds the cooper test rating to be \"Bad\"", function() {
    what_is_the = new CooperRating();
    what_is_the.rating();
    expect(person.rating_of).toEqual("Bad");
  });

});



//var what_is_the = new CooperCalculation();
