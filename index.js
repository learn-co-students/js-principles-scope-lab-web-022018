// Write your solution in this file!
function customerName(){
 return 'bob'
}
var customerName = customerName()

function upperCaseCustomerName(){
customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = "Won't Work."

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Will Work."
}
