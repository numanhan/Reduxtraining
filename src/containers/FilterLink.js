import {connect} from 'react-redux';
import {setvisibilityFilter} from '../actions';
import Link from '../components/Link';



const mapStateToProps = (state, ownProps) => ({

    active: ownProps.filter === state.VisibilityFilters
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setvisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);