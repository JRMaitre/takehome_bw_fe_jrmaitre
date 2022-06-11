import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  outline: none;
`;

export const InputWrapper = styled.div`
  width: 400px;
`;

export const ResultsList = styled.ul`
  display: block;

  background: rgba(37, 39, 54, 1);
  border: 1px solid rgba(54, 56, 74, 1);
  border-radius: 8px;
  color: white;
  list-style: none;

  padding: 8px;

  > li {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    padding-left: 8px;
    text-align: left;
    padding-bottom: 4px;
  }

  > li.highlighted {
    background: rgba(119, 112, 255, 1);

    &:hover {
      background: rgba(119, 112, 255, 1);
      cursor: pointer;
    }
  }

  > li:hover {
    background: rgba(46, 47, 64, 1);
    cursor: pointer;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
`;

export const StyledInput = styled.input`
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

export const InputContainer = styled.div`
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

export const RowAttributes = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  > * {
    width: 200px;
  }
`;
