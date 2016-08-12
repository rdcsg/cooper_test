function rating_of(obj) {
  var gender = obj.selected_gender;
  var age = obj.age;
  var achievement = obj.distance_performed;
  var agegroup = determineAgeGroup(age);
  obj.rating = rate(agegroup, gender, achievement);
}
function determineAgeGroup(age) {
  if ( age >= 20 ) {
    for (i = 5; i >=2 ; i--) {
      if (age >= i*10) agegroup = i+2;
    }
  }
  else {
    if (age >= 15) {
     if (age >= 17)
      agegroup = 3;
     agegroup = 2;
    }
    agegroup = 1;
  }
}
function rate(ag, g, ac) {
  var s = "";
  var a = ["Excellent", "Above Average", "Average", "Below Average", "Poor"];
  if (ag == 7) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 6) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 5) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 4) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 3) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 2) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  if (ag == 1) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[0];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[1];
      else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) )
        s = a[2];
      else s = a[3];
  }
  return s;
}
