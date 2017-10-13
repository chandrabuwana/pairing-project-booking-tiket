function fullName(fName, lName){

  let fUpper = fName.charAt(0).toUpperCase() + fName.slice(1)
  let lUpper = lName.charAt(0).toUpperCase() + lName.slice(1)

  return fUpper + ' ' + lUpper

}

module.exports = fullName
