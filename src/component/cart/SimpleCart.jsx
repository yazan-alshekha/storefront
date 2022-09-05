import { connect } from "react-redux";



function SimpleCart(props) {

    return (
        <>
        <span>Cart( {props.cartItems.length} )</span>
            <ul>

                {props.cartItems.map((item, idx) => {
                    return (
                        <li key={item.name}>{item.name} <span>X</span></li>

                    )
                })}

            </ul>
        </>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cart,
})

export default connect(mapStateToProps)(SimpleCart);