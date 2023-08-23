import styled from '@emotion/styled';

interface IInputProps {
  value: string;
  onChange: (text: string) => void;
}
const Input = styled.input`
  padding: 8px;
  font-size: 1.2rem;
`;

export const TextInput = ({ value, onChange }: IInputProps) => {
  return <Input value={value} onChange={(e) => onChange(e.currentTarget.value)} />;
};
