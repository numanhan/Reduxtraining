import {connect} from 'react-redux';
import {VisibilityFilters, toggleTodo} from '../actions';
import TodoList from '../components/TodoList';


const getVisibleTodos = (todos, filter)=>{
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(task => task.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(task=>!task.completed);
        default:
            throw new Error('Unknown Filter' +filter )
    }
}

const  mapStatesToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

 const mapDispatchToProps = dispatch => ({
    toggleTodo: id => {
        dispatch(toggleTodo(id));
    }
 });


export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(TodoList);
