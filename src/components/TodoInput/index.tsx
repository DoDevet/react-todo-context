import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { TextInput } from 'components/TextInput';
import { Title } from 'components/Title';
import { TodoListContext } from 'contexts/TodoList';
import { useContext, useState } from 'react';

interface ITodoInputProps {
  onClose: () => void;
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoInput = ({ onClose }: ITodoInputProps) => {
  const { onAdd } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');
  const onAddTodo = () => {
    if (todo === '') return;
    onClose();
    onAdd(todo);
    setTodo('');
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput onChange={setTodo} value={todo} />
          <Button color="#3498db" text="추가" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};
