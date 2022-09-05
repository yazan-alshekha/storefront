import { connect } from "react-redux";

function CurrentCategory(props) {
    return (
    <>
    <h3>{props.activeCategory}</h3>
    <h6>category description goes here</h6>
    </>);
}

const mapStateToProps = (state) => ({
    activeCategory: state.categories.activeCategory
})

export default connect(mapStateToProps)(CurrentCategory);
