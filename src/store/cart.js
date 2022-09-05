
let initialState = [];


export default ( state = initialState , action)=>{
    let {type,payload} = action ;
    
    switch(type){
        case "ADD_TO_CART":
        let cart=state.filter((item)=> item.name !== payload.name)
        return [...cart,payload];
    default :
        return state;
    }
}

export function add(name){
    return{
        type:"ADD_TO_CART",
        payload:name,
    }
}