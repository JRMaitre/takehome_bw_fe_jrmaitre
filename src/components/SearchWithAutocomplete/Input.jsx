import { InputContainer, StyledInput } from "./styles";

export const Input = ({ leadingIcon, ...inputProps }) => {
  return (
    <InputContainer>
      {leadingIcon ? leadingIcon : null}
      <StyledInput {...inputProps} />
    </InputContainer>
  );
};
