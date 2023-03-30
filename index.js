// Code your solution here
function findMatching(drivers, driverName){
   return  drivers.filter(function(driver){
        return driver.toUpperCase()==driverName.toUpperCase()
    })
}
function fuzzyMatch(drivers, string){
    return  drivers.filter(function(driver){
        return driver.startsWith(string);
    })
}

function matchName(drivers, string){
    return  drivers.filter(function(driver){
        return driver.name.toUpperCase()==string.toUpperCase()
    })
}
