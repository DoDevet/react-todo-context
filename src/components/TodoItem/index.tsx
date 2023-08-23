import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { TodoListContext } from 'contexts/TodoList';
import { useContext } from 'react';

interface ITodoItemProps {
  todoLabel: string;
  onDelete?: (todo: string) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;
const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

export const TodoItem = ({ todoLabel }: ITodoItemProps) => {
  const { onDelete } = useContext(TodoListContext);
  return (
    <Container>
      <Label>{todoLabel}</Label>
      <Button text="삭제" onClick={() => typeof onDelete === 'function' && onDelete(todoLabel)} />
    </Container>
  );
};
