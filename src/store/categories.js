
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
        case 'INIT_CATEGORIES':
            return { ...state, categories: payload.results }
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

// request the categories from an API
export const getCategories = () => async dispatch => {
    let results = await fetch(`${process.env.REACT_APP_API}/categories`);
    let records = await results.json();
    dispatch(setCategories(records));
};

const setCategories = (list) => {
    return {
    type: 'INIT_CATEGORIES',
    payload: list
    };
}
