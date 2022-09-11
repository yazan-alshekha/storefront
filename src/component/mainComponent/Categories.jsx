import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import {useEffect} from "react";
import {reset , changeActiveCategory} from "../../store/categories";
import{getCategories} from "../../store/categories";



function Categories(props) {

    useEffect(() => {
        props.getCategories();
    }, [props.categories.categories]);
    
        {console.log("categor" , props.categories)}
    return (
        <>
            <h1>Browse our Categories</h1>
            {props.categories.map((category,idx)=>{
                
                return (
                    <button key={idx} onClick={ ()=> props.changeActiveCategory(category.name) }>{category.name}  </button>
                );
            })}
        </>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories
});


const mapDispatchToProps = { reset, changeActiveCategory ,getCategories }

// Instead of exporing our component, export it after it's been connected to the Redux store.
// export default connect(mapDispatchToProps,mapStateToProps)(Categories)
export default connect(mapStateToProps, mapDispatchToProps)(Categories);

