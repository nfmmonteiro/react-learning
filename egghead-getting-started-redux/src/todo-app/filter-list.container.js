import {connect} from "react-redux";
import {changeFilterAction} from "./state/action-creators";
import {Link} from "./link";

const mapStateToProps = (state, ownProps) => ({
    active: state.activeFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLinkClick() {
        dispatch(changeFilterAction(ownProps.filter))
    }
});

// container component (it is concerned about behaviour)
export const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);
