import {connect} from "react-redux";
import {changeFilterAction} from "./state/action-creators";
import {Link} from "./link";

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.activeFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLinkClick: () => dispatch(changeFilterAction(ownProps.filter))
    };
};

// container component (it is concerned about behaviour)
export const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);
