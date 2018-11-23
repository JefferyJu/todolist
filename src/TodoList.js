import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

/**
 * Item
 *
 * @author Jeffery_Ju@163.com
 * @date 2018/11/23 14:30:05
 */
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //待办清单
            list: [],
            // 输入内容
            inputValue: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }


    /**
     * 处理按钮点击
     */
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        });

    }

    /**
     * 处理输入值改变
     * @param event
     */
    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    };

    /**
     * 删除
     * @param index
     */
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list})
    }

    /**
     * 获取item
     * @returns {*[]}
     */
    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return <TodoItem
                    handleDelete={this.handleDelete}
                    key={index}
                    index={index}
                    content={item}
                />;
            })
        )
    }

    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递的参数
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button className="red-btn" onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        );
    }
}

export default TodoList;
