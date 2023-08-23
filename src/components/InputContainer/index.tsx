import { ShowInputButton } from 'components/ShowInputButton';
import { TodoInput } from 'components/TodoInput';

import { useState } from 'react';

export const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onClose = () => {
    setShowTodoInput(false);
  };
  return (
    <>
      {showTodoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton onClick={() => setShowTodoInput((prev) => !prev)} show={showTodoInput} />
    </>
  );
};
