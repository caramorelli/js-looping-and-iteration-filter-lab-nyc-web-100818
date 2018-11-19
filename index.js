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
    var driver = drivers[i]
    if (driver[:name]) {
      match_arr.push(drivers[i]);
    }
  }
  return match_arr;
  
  
  // var match_obj = {};
  // for (var keys in drivers) {
  //   if ( drivers[name] == string ) {
  //     match_obj
  //   }
  // }
  
}

// Write `matchName` - This function takes an array of `drivers` and a `string` as
// arguments. In this function, each element of the `drivers` array is a
// JavaScript object that has a property of `name`. The function should return
// each element whose `name` property matches the provided `string` argument.
