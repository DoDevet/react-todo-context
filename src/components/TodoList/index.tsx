import styled from '@emotion/styled';
import { TodoItem } from 'components/TodoItem';
import { TodoListContext } from 'contexts/TodoList';
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoList = () => {
  const { todoList } = useContext(TodoListContext);
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoItem todoLabel={todo} key={todo} />
      ))}
    </Container>
  );
};
