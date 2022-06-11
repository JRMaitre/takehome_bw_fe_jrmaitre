import styled from "styled-components";

/**
 * Styled Components
 */
const StyledInput = styled.input`
  padding-left: 8px;
  height: 32px;
  border: none;
  background: none;
  color: white;
  width: 100%;

  :active,
  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(176, 176, 176, 1);
  }
`;

const InputContainer = styled.div`
  padding-left: 8px;
  height: 32px;

  background: rgba(37, 39, 54, 1);
  color: rgba(119, 112, 255, 1);
  border-radius: 4px;
  font-size: 13px;

  display: flex;
  flex-direction: row;
  align-items: center;

  :active,
  :focus,
  :focus-within {
    outline: 1px solid rgba(91, 83, 255, 1);

    > svg > path {
      fill: rgba(245, 245, 248, 0.9);
    }
  }

  > svg > path {
    fill: rgba(176, 176, 176, 1);
  }
`;

export const Input = ({ leadingIcon, ...inputProps }) => {
  return (
    <InputContainer>
      {leadingIcon ? leadingIcon : null}
      <StyledInput {...inputProps} />
    </InputContainer>
  );
};
