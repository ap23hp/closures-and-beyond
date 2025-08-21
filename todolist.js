const todoModule = () => {
let  privateTodoArray = [];
  const addTodo = (task) => {
    privateTodoArray.push(task);
    return privateTodoArray;
  }; //→ adds a new todo.

  const removeTodo = (index) => {
    console.log(`this item is removed : ${privateTodoArray[index]}`);

   return privateTodoArray.splice(index,1)
  }; //→ removes todo at given index.

  const getTodos = () => {
   return privateTodoArray
  }; // → returns the list of todos.

  const clearTodos = () => {
  return privateTodoArray.splice(0,privateTodoArray.length)
  }; //→ clears all todos.
  return {
    addTodo,
    removeTodo,
    getTodos,
    clearTodos,
  };
};

const todo = todoModule();
todo.addTodo("Make coffee");
todo.addTodo("Make tea");
console.log(todo.addTodo("read novel"));
console.log(todo.removeTodo(1));


todo.addTodo("Learn JS");
todo.addTodo("Practice factory functions");
console.log(todo.getTodos()); 


todo.removeTodo(0);
console.log(todo.getTodos()); 
// // ["Practice factory functions"]
todo.clearTodos();
console.log(todo.getTodos()); 
