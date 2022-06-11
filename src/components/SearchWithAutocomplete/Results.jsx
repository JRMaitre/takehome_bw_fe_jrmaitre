import styled from "styled-components";

/**
 * Styled Components
 */
const ResultsList = styled.ul`
  display: block;

  background: rgba(37, 39, 54, 1);
  border: 1px solid rgba(54, 56, 74, 1);
  border-radius: 8px;
  color: white;
  list-style: none;

  padding: 8px;

  > li {
    height: 28px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    padding-left: 8px;
    text-align: left;
  }

  > li.highlighted {
    background: rgba(119, 112, 255, 1);
  }

  > li:hover {
    background: rgba(46, 47, 64, 1);
    cursor: pointer;
  }
`;

/**
 * A list of search results
 */
export const Results = ({ results, onSelect, highlightedIndex }) => {
  if (!results || results.length === 0) {
    return null;
  }
  const indexToUse =
    typeof highlightedIndex === "number" && highlightedIndex >= 0
      ? highlightedIndex
      : -1;

  return (
    <ResultsList>
      {results.map((result, index) => (
        <li
          key={result.value}
          onClick={() => onSelect && onSelect(result)}
          className={index === indexToUse ? "highlighted" : ""}
        >
          {result.text}
        </li>
      ))}
    </ResultsList>
  );
};
