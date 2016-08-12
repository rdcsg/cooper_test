function CooperRating() {

}

CooperRating.prototype.rating_of = function(obj) {
  var gender = obj.selected_gender;
  var age = obj.age;
  var achievement = obj.distance_performed;
  var rating = obj.rating;

// choose database depending on gender
  if (gender == "female")
    obj.rating = RateFemale(age, achievement);
  else
    obj.rating = RateMale(age, achievement);
};

function RateMale(age, achievement) {
  var rating = "Bad";
  return rating;
}

function RateFemale(age, achievement) {
  var rating = "Bad";
  return rating;
}


// Which solution is the best?
// alt 1, do ifs just testing for one interval endpoint value (the smaller one) for each age grp
// start from the highest interval and going down to the lowest - this seems to be the fastes code
// nest the if statements with elses , do not nest inside other ifs

// alt 2, create dbl arrays and call for the smaller value in each column with a switch
// but then you have to include both interval endpoint values

// var myArray = new Array();
// myArray[row][column] = value;
// var thirteen_fourteen_interval[”13-14”][0] = 2000;

// the dbl array solution relies on the array being create and the valued assigned
// before you can check the values in a switch-case
// which means that from a rapid workflow perspective it adds an extra step of assigning
// the necessary values to the array. In contrast, the if-statement-solution just needs
// to have the assigning of values in the if-statement itself. that makes this workflow
// much faster as the assigning and conditional check takes place at the same time
