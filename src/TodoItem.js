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

    //子组件如果想和父组件通信,子组件要调用父组件传递过来的方法
    render() {
        console.log("child --> render()");
        const {content, test} = this.props;
        return (
            <div onClick={this.handleDelete}>{test}-{content}</div>
        );
    }

    /**
     * 删除
     */
    handleDelete() {
        const {handleDelete, index} = this.props;
        handleDelete(index);
    };

    /**
     * setState
     *
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * componentWillReceiveProps()
     * 一个组件从父组件接受了参数,
     * 如果这个组件第一次存在于父组件中,不会被执行
     * 如果这个组件之前已经存在于父组件中,才会执行
     */
    componentWillReceiveProps() {
        console.log("child --> componentWillReceiveProps()");
    }

    /**
     * 当这个组件即将被从页面剔除的时候,会被执行
     */
    componentWillUnmount() {
        console.log("child -->  componentWillUnmount()");
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