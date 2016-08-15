function rating_of(obj) {
  var gender = obj.selected_gender;
  var age = obj.age;
  var achievement = obj.distance_performed;
  if ( age >= 50 ) {
      if ( ( gender == "male" && achievement > 2400) || ( gender == "female" && achievement > 2200 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2000) || ( gender == "female" && achievement > 1700 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 1600) || ( gender == "female" && achievement > 1400 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 1300) || ( gender == "female" && achievement > 1100 ) ) obj.rating = "Below Average";
  } else if ( age >= 40 ) {
      if ( ( gender == "male" && achievement > 2500) || ( gender == "female" && achievement > 2300 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2100) || ( gender == "female" && achievement > 1900 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 1700) || ( gender == "female" && achievement > 1500 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 1400) || ( gender == "female" && achievement > 1200 ) ) obj.rating = "Below Average";
  } else if ( age >= 30 ) {
      if ( ( gender == "male" && achievement > 2700) || ( gender == "female" && achievement > 2500 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2300) || ( gender == "female" && achievement > 2000 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 1900) || ( gender == "female" && achievement > 1700 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 1500) || ( gender == "female" && achievement > 1400 ) ) obj.rating = "Below Average";
  } else if ( age >= 20 ) {
      if ( ( gender == "male" && achievement > 2800) || ( gender == "female" && achievement > 2700 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2400) || ( gender == "female" && achievement > 2200 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 2200) || ( gender == "female" && achievement > 1800 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 1600) || ( gender == "female" && achievement > 1500 ) ) obj.rating = "Below Average";
  } else if ( age >= 17 ) {
      if ( ( gender == "male" && achievement > 3000) || ( gender == "female" && achievement > 2300 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2700) || ( gender == "female" && achievement > 2100 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 2500) || ( gender == "female" && achievement > 1800 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 2300) || ( gender == "female" && achievement > 1700 ) ) obj.rating = "Below Average";
  } else if ( age >= 15 ) {
      if ( ( gender == "male" && achievement > 2800) || ( gender == "female" && achievement > 2100 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2500) || ( gender == "female" && achievement > 2000 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 2300) || ( gender == "female" && achievement > 1700 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 2200) || ( gender == "female" && achievement > 1600 ) ) obj.rating = "Below Average";
  } else if ( age < 15 ) {
      if ( ( gender == "male" && achievement > 2700) || ( gender == "female" && achievement > 2000 ) ) obj.rating = "Excellent";
      else if ( ( gender == "male" && achievement > 2400) || ( gender == "female" && achievement > 1900 ) ) obj.rating = "Above Average";
      else if ( ( gender == "male" && achievement > 2200) || ( gender == "female" && achievement > 1600 ) ) obj.rating = "Average";
      else if ( ( gender == "male" && achievement > 2100) || ( gender == "female" && achievement > 1500 ) ) obj.rating = "Below Average";
  } else obj.rating = "Poor";
}
