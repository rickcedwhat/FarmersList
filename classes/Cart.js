class Cart{
    constructor(){
        this.products=[];
        this.total=0;
    }
    addProduct(prod){
        this.products.push(prod);
        this.total+=prod.price;
    }
    removeProduct(index){
        const [product] = this.products.splice(index,1);
        this.total-=product.price;
    }
}


module.exports = Cart;