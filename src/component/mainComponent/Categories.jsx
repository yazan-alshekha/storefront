import { connect } from "react-redux";
// import { useDispatch } from "react-redux";

import {reset , changeActiveCategory} from "../../store/products"

function Categories(props) {
    // const dispatch = useDispatch();
    return (
        <>
            <h1>Browse our Categories</h1>
            {props.categories.map((category,idx)=>{
                
                return (
                    // <a key={idx} onClick={ ()=> props.changeActiveCategory(category.name) }>{category.displayName}  </a>
                    <button key={idx} onClick={ ()=> props.changeActiveCategory(category.name) }>{category.displayName}  </button>
                );
            })}
        </>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});


const mapDispatchToProps = { reset, changeActiveCategory }

// Instead of exporing our component, export it after it's been connected to the Redux store.
// export default connect(mapDispatchToProps,mapStateToProps)(Categories)
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

