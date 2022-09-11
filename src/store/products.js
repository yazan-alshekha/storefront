
let initialState = [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
];

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case"ADD_TO_CART":
            return state.map( (item) => payload.name===item.name ? { ...item, inStock: item.inStock - 1 } : item  )
        case 'RESET':
            return initialState;
        case 'LOAD_PRODUCTS':
            return payload;
        default:
            return state;
    }
};


export const getProducts = (category) => async dispatch => {
    let results = await fetch(`${process.env.REACT_APP_API}/products`);
    let data = await results.json();
    let records = data.results || [];
    
    console.log({records});
    console.log(category,"category" );
    // Yuck ... but our API doesn't filter, so we'll just do it here
    let products = records.filter(product => product.category === category);
    dispatch(setProducts(products));
};

  const setProducts = (list) => {
    return {
      type: 'LOAD_PRODUCTS',
      payload: list
    };
  }