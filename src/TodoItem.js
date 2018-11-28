import React, {Component} from 'react';
import PropTypes from "prop-types";
import TodoList from "./TodoList";

/**
 * List
 *
 * @author Jeffery_Ju@163.com
 * @date 2018/11/23 14:14
 */
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    /**
     * 删除
     */
    handleDelete() {
        const {handleDelete, index} = this.props;
        handleDelete(index);
    };

    //子组件如果想和父组件通信,子组件要调用父组件传递过来的方法
    render() {
        const {content, test} = this.props;
        return (
            <div onClick={this.handleDelete}>{test}-{content}</div>
        );
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleDelete: PropTypes.func,
    index: PropTypes.number,
};

TodoItem.defaultProps = {
    test: 'hello world'
};

TodoItem.defaultProps = {
    test: 'hello world'
}


export default TodoItem;