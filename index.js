// Code your solution here
function findMatching(names, string){
  return names.filter(function(name){ return name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(names, string){
  return names.filter(function(name) {
    return name.slice(0,2).toLowerCase() === string.toLowerCase();
  })
}

function matchName(drivers, name){
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase()
  )
}
