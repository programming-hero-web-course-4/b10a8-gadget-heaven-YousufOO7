

const getStoredToCartLocal = () => {
    const storedListStr = localStorage.getItem('cart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}


const addCartToLocalStore = Product_id => {
    const storedList = getStoredToCartLocal();
    if(storedList.includes(Product_id)){
        console.log(Product_id, "This item is already added");
    }
    else{
        storedList.push(Product_id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart', storedListStr)
    }
}

const getStoredToHeartLocal = () => {
    const storedListStr = localStorage.getItem('heart');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addHeartToLocalStore = Product_id => {
    const storedList = getStoredToHeartLocal();
    if(storedList.includes(Product_id)){
        console.log(Product_id, "This item is already added");
    }
    else{
        storedList.push(Product_id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('heart', storedListStr);
    }
}

export {addCartToLocalStore, addHeartToLocalStore, getStoredToCartLocal, getStoredToHeartLocal}