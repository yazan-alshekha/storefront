import { createStore, combineReducers } from 'redux';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products';
import categories from "./categories";
import cart from "./cart"

// Combine reducers isn't really necessary when you only have one reducer
// But ... it's nice to create these with a name (counter in this case) so that your
// components have easy access to them.
// And ... 99.99% of all Redux apps will have more than one reducer to 'combine'
let reducers = combineReducers({ products,categories ,cart});

const store = () => {
    return createStore(reducers, composeWithDevTools());
};

export default store();