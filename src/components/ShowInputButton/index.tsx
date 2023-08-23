import styled from '@emotion/styled';
import { Button } from 'components/Button';

interface IShowInputButton {
  show: boolean;
  onClick: () => void;
}
const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 50px;
`;
export const ShowInputButton = ({ show, onClick }: IShowInputButton) => {
  return (
    <Container>
      <Button
        text={!show ? '할 일 추가' : '닫기'}
        color={!show ? 'rgb(52,152,218)' : undefined}
        onClick={onClick}
      />
    </Container>
  );
};
