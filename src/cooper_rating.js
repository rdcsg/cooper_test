function CooperRating() {

}

CooperRating.prototype.rating_of = function(obj) {
  var gender = obj.selected_gender;
  var age = obj.age;
  var achievement = obj.distance_performed;
  var rating = obj.rating;
  obj.rating = "Bad";
  //findRating();
};


/*function findRating(obj) {
  this.rating = "Bad";
}*/
