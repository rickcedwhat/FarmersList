const Customer = require('./Customer');


class Auth {
    constructor() {
        this.customers = [];
    }
    register(name, email,shippingAddress) {
        let newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
        return newCustomer;
    }
    login(email) {
        let customer = this.customers.find(customer => customer.email === email) || null;
            return customer;
    }
}

module.exports = Auth;