import styled from '@emotion/styled';

interface ITitleProps {
  label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin: 0;
`;

export const Title = ({ label }: ITitleProps) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};
