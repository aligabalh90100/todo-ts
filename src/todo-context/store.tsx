import { ReactNode, createContext, useCallback, useState } from "react";

type todoObject = {
  items: string[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void;
  replaceTodo: (list: string[]) => void;
};
const TodoContext = createContext<todoObject>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
  replaceTodo: () => {},
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodoHandler = useCallback((text: string) => {
    setTodos((prevState) => {
      const updatedTodos = [...prevState, text];
      localStorage.setItem("list", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const removeTodoHandler = (text: string) => {
    setTodos((prevState) => {
      const updatedTodos = prevState.filter((item: string) => item !== text);
      localStorage.setItem("list", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };
  const replaceTodo = (list: string[]) => {
    setTodos(list);
  };

  const ctxValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    replaceTodo,
  };
  return (
    <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContext;
