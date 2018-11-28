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
        //当组件的state或者props发生改变的时候,render函数就会重新执行
        this.state = {
            //待办清单
            list: [],
            // 输入内容
            inputValue: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    /**
     * componentWillMount()在组件即将被挂载到页面的时候自动执行
     */
    componentWillMount() {
        console.log("componentWillMount()");
    }

    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递的参数
    // render在props 和state 发生改变的时候自动调用
    render() {
        console.log("parent --> render()");
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input-group-sm"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        // ref={(input) => {
                        //     this.input = input
                        // }}
                    />
                    <button className="red-btn" onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>

            </Fragment>
        );
    }

    /**
     * componentDidMount()组件被挂载到页面之后,自动执行
     */
    componentDidMount() {
        console.log("componentDidMount()");
    }

    /**
     * shouldComponentUpdate()组件被更新之前,他会自动被执行
     */
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate()");
        // true 则更新组件 false 则不更新
        return true;
    }

    /**
     * 组件被更新之前,他会自动执行,他在shouleComponentUpdate之后被执行
     * 如果shouldComponentUpdate 返回true 他才执行
     * 返回false,不会执行
     */
    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    /**
     * 组件更新完成之后,他会被执行
     */
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }

    /**
     * 处理按钮点击
     */
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ""
        }));

    }

    /**
     * 处理输入值改变
     * @param event
     */
    handleInputChange(event) {
        const value = event.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    };

    // ref 直接获取 DOM 操作 ,不建议使用,
    // 如果必须使用,在setState函数中,第二个参数用回调函数来写
    // handleInputChange(){
    //     const value = this.input.value;
    //     this.setState(() => ({
    //         inputValue: value
    //     }));
    // }

    /**
     * 删除
     * @param index
     */
    handleDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return ({list});
        });
    }

    /**
     * 获取item
     * @returns {*[]}
     */
    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (<TodoItem
                    handleDelete={this.handleDelete}
                    key={index}
                    index={index}
                    content={item}
                />);
            })
        )
    }
}

export default TodoList;
