import { ReactComponent as StarFilledIcon } from "../../icons/star-filled.svg";
import { ReactComponent as StarEmptyIcon } from "../../icons/star-empty.svg";
import { IconWrapper, ResultsList } from "./styles";
import { AnimalRow } from "./AnimalRow";
import { ProductRow } from "./ProductRow";
import { CompanyRow } from "./CompanyRow";

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
      {results.map((result, index) => {
        return (
          <li
            key={result.id}
            onClick={() => onSelect && onSelect(result)}
            className={index === indexToUse ? "highlighted" : ""}
          >
            <IconWrapper>
              {result.starred ? <StarFilledIcon /> : <StarEmptyIcon />}
            </IconWrapper>
            {result.type === "animal" && <AnimalRow data={result} />}
            {result.type === "company" && <CompanyRow data={result} />}
            {result.type === "product" && <ProductRow data={result} />}
            <span>{result.text}</span>
          </li>
        );
      })}
    </ResultsList>
  );
};
