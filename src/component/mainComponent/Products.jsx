import { useEffect } from "react";
import { connect } from "react-redux";
import { add } from "../../store/cart";
import {getProducts} from "../../store/products"
function Products(props) {

    const { activeCategory, products, add, getProducts } = props;

    // re-fetch the product list whenever the activeCategory changes
    useEffect(() => {
        getProducts(props.categories.activeCategory);
    }, [props.categories.activeCategory]);
    
    // const products=props.store.filter((item)=> item.category == props.categories.activeCategory );
    // console.log('filtered array ',products);
    return (
        <>
            {props.store.map((item,idx) => {
                return (
                    
                    <div key={idx}>
                        <img src={`https://source.unsplash.com/random?${item.name}`} style={{height:'100px' , width:"100px"}}/>
                        <h4>{item.name}</h4>
                        <p>{item?.description}</p>
                        <p>Price:{item.price}</p>
                        <p>Available {item.inStock}</p>
                        <button onClick={ ()=> props.add(item) }>ADD TO CART</button>
                        <button>VIEW DETAILS</button>
                    </div>
                    );
            })}
        </>
    );
};

const mapStateToProps = (state) => ({
    store: state.products,
    categories:state.categories
});


const mapDispatchToProps = { add ,getProducts }

// Instead of exporing our component, export it after it's been connected to the Redux store.
// export default connect(mapDispatchToProps,mapStateToProps)(Categories)
export default connect(mapStateToProps, mapDispatchToProps)(Products);