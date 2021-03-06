// Code your solution in this file

function findMatching(drivers, string) {
   var match_arr = [];
  for ( var i = 0; i < drivers.length; i++) {
    var driver = (drivers[i]).toLowerCase()
    if (driver.startsWith(string.toLowerCase())) {
      match_arr.push(drivers[i]);
    }
  }
  return match_arr;
}

function fuzzyMatch(drivers, string) {
  var match_arr = [];
  for ( var i = 0; i < drivers.length; i++) {
    if (drivers[i].startsWith(string)) {
      match_arr.push(drivers[i]);
    }
  }
  return match_arr;
}

function matchName(drivers, string) {
  var match_arr = [];
  for ( var i = 0; i < drivers.length; i++) {
    var driv = drivers[i]
    if (driv['name'] == string) {
      match_arr.push(driv);
    }
  }
  return match_arr;
}
