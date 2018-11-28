### 1. 生命周期函数指在某一时刻组件会自动执行的函数 .

### 2. componentWillMount() 在组件即将被挂载到页面的时候自动执行

### 3. componentDidMount() 组件被挂载到页面之后,自动执行

### 4. 执行顺序: componentWillMount() --> render() --> componentDidMount()

### 5  提升性能:

- this.handleDelete = this.handleDelete.bind(this); 放在constructor()中保证只绑定一次,避免子组件的无谓渲染.
- setState内置的性能提升,将多次的setState结合成一次来做,降低虚拟DOM的比对频率
- react 底层的虚拟DOM, 同层比对, key值概念, 来提升虚拟DOM的比对性能从来提升react的性能
- 借助shouldComponentUpdate() 提升react组件的性能,避免无谓的组件的render函数的运行