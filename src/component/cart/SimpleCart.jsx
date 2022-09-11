import { connect } from "react-redux";
import {delete_item} from "../../store/cart";


function SimpleCart(props) {

    return (
        <>
        <span>Cart( {props.cartItems.length} )</span>
            <ul>

                {props.cartItems.map((item, idx) => {
                    return (
                        <li key={item.name}>{item.name} <button onClick={ ()=> {props.delete_item(item.name)} } >X</button></li>

                    )
                })}

            </ul>
        </>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart,
})


const mapDispatchToProps = { delete_item }

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCart);