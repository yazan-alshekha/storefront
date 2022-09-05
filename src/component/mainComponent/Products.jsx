import { connect } from "react-redux";
import { add } from "../../store/cart";

function Products(props) {
    const products=props.store.filter((item)=> item.category == props.categories.activeCategory );
    // console.log('filtered array ',products);
    return (
        <>
            {products.map((item,idx) => {
                return (
                    
                    <div key={idx}>
                        <img src={`https://source.unsplash.com/random?${item.name}`} style={{height:'100px' , width:"100px"}}/>
                        <p>{item.name}</p>
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


const mapDispatchToProps = { add }

// Instead of exporing our component, export it after it's been connected to the Redux store.
// export default connect(mapDispatchToProps,mapStateToProps)(Categories)
export default connect(mapStateToProps, mapDispatchToProps)(Products);