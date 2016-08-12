function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance_performed = attr.distance_performed;
  this.rating = attr.rating;
}

Person.prototype.get_rating = function () {
  var what_is_the = new CooperRating();
  what_is_the.rating_of(this);
};
