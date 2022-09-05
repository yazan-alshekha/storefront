import { connect } from "react-redux";
import { reset, changeActiveCategory } from "../../store/products";

function Products(props) {
    const products=props.store.products.filter((item)=> item.category == props.store.activeCategory );
    // console.log('filtered array ',products);
    return (
        <>
            {products.map((item,idx) => {
                return (
                    <>
                    <div key={idx}>
                        <img src={`https://source.unsplash.com/random?${item.name}`} style={{height:'100px' , width:"100px"}}/>
                        <p>{item.name}</p>
                        <p>Price:{item.price}</p>
                        <p>Available {item.inStock}</p>
                        <button>ADD TO CART</button>
                        <button>VIEW DETAILS</button>
                    </div>
                    </>);
            })}
        </>
    );
};

const mapStateToProps = (state) => ({
    store: state.categories
});


const mapDispatchToProps = { reset, changeActiveCategory }

// Instead of exporing our component, export it after it's been connected to the Redux store.
// export default connect(mapDispatchToProps,mapStateToProps)(Categories)
export default connect(mapStateToProps, mapDispatchToProps)(Products);