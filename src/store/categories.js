
let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    activeCategory: ''
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'CATEGORY':
            return { ...state, activeCategory: payload }
        default:
            return state;
    }
};

export const changeActiveCategory = (name) => {
    return {
        type: 'CATEGORY',
        payload: name
    };
};


export const reset = () => {
    return {
        type: "reset"
    }
}