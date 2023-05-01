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