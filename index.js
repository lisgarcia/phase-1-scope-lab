// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
    customerName=customerName.toUpperCase()
}
  
function setBestCustomer() {
   bestCustomer='not bob'
    return bestCustomer
}

function overwriteBestCustomer(name) {
    bestCustomer=name
}

const leastFavoriteCustomer = 'probably bob'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer='definitely bob'
}



//attempt1  return customerName.toUpperCase()  <--this passes the "returns the customerName" requirement

//attempt2a    customerName = customerName.toUpperCase()
//attempt2b    return customerName

//attempt3a    var upper = customerName.toUpperCase()
//attempt3b    customerName = upper    
//attempt3c    return customerName
