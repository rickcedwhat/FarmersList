class Customer{
    constructor(name,email,shippingAddress){
        this.name=name;
        this.email=email;
        this.shippingAddress=shippingAddress;
        this.orderHistory=[];
        this.rewardPoints = 0; 
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart);
    }
    getRewardPoints(){
        return this.orderHistory.reduce((total,cart)=>{
            return total+=cart.products.reduce((sum, product)=>{
                return sum+product.rewardPoints;
            },0);
        },0);
    }
}

module.exports=Customer;