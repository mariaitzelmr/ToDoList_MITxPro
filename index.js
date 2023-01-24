function App() {
    const [todos, setTodos] = React.useState([
        {
            text: "learn react",
            isCompleted: false,
        },
        {
            text: "meet friend for lunch",
            isCompleted: false,
        },
        {
            text: "build todo app",
            isCompleted: false,
        },
    ]);
    const addTodo = (text) => {
        const newTodos = [...todos, { text: text, isCompleted: false }];
        setTodos(newTodos);
    };
    const removeTodo = (index) => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    };
    return (
        <div className="app">
            <div className="title"><h1>ToDo List</h1></div>
            <div className="todo-list">
                <div className="input">
                    <TodoForm addTodo={addTodo} />
                </div>
                <div>
                    {todos.map((todo, index) => (
                        <Todo
                            index={index}
                            todo={todo}
                            key={index}
                            remove={removeTodo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
