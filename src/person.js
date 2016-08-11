function Person(attr) {
  this.selected_gender = attr.selected_gender;
  this.age = attr.age;
  this.distance_performed = attr.distance_performed;
  this.rating_of = attr.rating_of;
}

Person.prototype.get_rating = function () {
  this.rating_of = "Bad";
};
