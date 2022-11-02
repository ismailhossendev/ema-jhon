const getOldData = () =>{
    let carts = {}
    const oldData = localStorage.getItem('cart')
    const converted = JSON.parse(oldData);
    if(converted){
        carts = converted;
    }
    return carts;
}

const setLs = (id) =>{
    const getData = getOldData();
    const quantity = getData[id]
    if(quantity){
        const newQuantity = quantity + 1; 
        getData[id] = newQuantity;
    }
    else{
        getData[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(getData));
};

const removeCard = id =>{
    const oldData = localStorage.getItem('cart');
    if(oldData){
        const shoppingCart = JSON.parse(oldData);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('cart',JSON.stringify(shoppingCart));
        }
    }
}
export {getOldData , setLs}