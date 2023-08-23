import { createContext, useState } from 'react';

interface Context {
  todoList: string[];
  onAdd: (todo: string) => void;
  onDelete: (todo: string) => void;
}

const TodoListContext = createContext<Context>({
  todoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

interface Props {
  children: React.ReactNode;
}

const TodoListContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState(['리액트 공부', '운동', '독서']);

  const onDelete = (todo: string) => setTodoList(todoList.filter((item) => todo !== item));
  const onAdd = (todo: string) => setTodoList([...todoList, todo]);

  return (
    <TodoListContext.Provider value={{ onAdd, onDelete, todoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListContext, TodoListContextProvider };
