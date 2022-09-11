
let initialState = [];


export default ( state = initialState , action)=>{
    let {type,payload} = action ;
    
    switch(type){
        case "ADD_TO_CART":
        let cart=state.filter((item)=> item.name !== payload.name)
        return [...cart,payload];

        case 'DELETE_ITEM_FROM_CART':
            let stateAfterDelete=state.filter( (item) => item.name!== payload);
            return [...stateAfterDelete];

        default :
            return state;
    }
}

// function to add new item to the cart
export function add(name){
    return{
        type:"ADD_TO_CART",
        payload:name,
    }
}

// function to delete an item fro the cart
export function delete_item(name){
    return{
        type:"DELETE_ITEM_FROM_CART",
        payload:name,
    }
}