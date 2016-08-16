function rating_of(obj) {
  var gender = obj.selected_gender;
  var age = obj.age;
  var achievement = obj.distance_performed;
  var agegroup = determineAgeGroup(age);
  obj.rating = rate(agegroup, gender, achievement);
}
function determineAgeGroup(age) {
  if( age >= 50 ) agegroup = 7;
  else if( age >= 40 ) agegroup = 6;
  else if( age >= 30 ) agegroup = 5;
  else if( age >= 20 ) agegroup = 4;
  else if( age >= 17 ) agegroup = 3;
  else if( age >= 15 ) agegroup = 2;
  else agegroup = 1;
}
function rate(ag, g, ac) {
  var s = "";
  if (ag == 7) {
      if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) ) s = "Excellent";
      else if ( ( g == "male" && ac > 2000) || ( g == "female" && ac > 1700 ) ) s = "Above Average";
      else if ( ( g == "male" && ac > 1600) || ( g == "female" && ac > 1400 ) ) s = "Average";
      else if ( ( g == "male" && ac > 1300) || ( g == "female" && ac > 1100 ) ) s = "Below Average";
  }
  if (ag == 6) {
    if ( ( g == "male" && ac > 2500) || ( g == "female" && ac > 2300 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2100) || ( g == "female" && ac > 1900 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 1700) || ( g == "female" && ac > 1500 ) ) s = "Average";
    else if ( ( g == "male" && ac > 1400) || ( g == "female" && ac > 1200 ) ) s = "Below Average";
  }
  if (ag == 5) {
    if ( ( g == "male" && ac > 2700) || ( g == "female" && ac > 2500 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2300) || ( g == "female" && ac > 2000 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 1900) || ( g == "female" && ac > 1700 ) ) s = "Average";
    else if ( ( g == "male" && ac > 1500) || ( g == "female" && ac > 1400 ) ) s = "Below Average";
  }
  if (ag == 4) {
    if ( ( g == "male" && ac > 2800) || ( g == "female" && ac > 2700 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 2200 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 2200) || ( g == "female" && ac > 1800 ) ) s = "Average";
    else if ( ( g == "male" && ac > 1600) || ( g == "female" && ac > 1500 ) ) s = "Below Average";
  }
  if (ag == 3) {
    if ( ( g == "male" && ac > 3000) || ( g == "female" && ac > 2300 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2700) || ( g == "female" && ac > 2100 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 2500) || ( g == "female" && ac > 1800 ) ) s = "Average";
    else if ( ( g == "male" && ac > 2300) || ( g == "female" && ac > 1700 ) ) s = "Below Average";
  }
  if (ag == 2) {
    if ( ( g == "male" && ac > 2800) || ( g == "female" && ac > 2100 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2500) || ( g == "female" && ac > 2000 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 2300) || ( g == "female" && ac > 1700 ) ) s = "Average";
    else if ( ( g == "male" && ac > 2200) || ( g == "female" && ac > 1600 ) ) s = "Below Average";
  }
  if (ag == 1) {
    if ( ( g == "male" && ac > 2700) || ( g == "female" && ac > 2000 ) ) s = "Excellent";
    else if ( ( g == "male" && ac > 2400) || ( g == "female" && ac > 1900 ) ) s = "Above Average";
    else if ( ( g == "male" && ac > 2200) || ( g == "female" && ac > 1600 ) ) s = "Average";
    else if ( ( g == "male" && ac > 2100) || ( g == "female" && ac > 1500 ) ) s = "Below Average";
  } else s = "Poor";
  return s;
}
