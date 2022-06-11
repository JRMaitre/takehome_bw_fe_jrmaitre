import { useEffect, useState } from "react";

import { Results } from "./Results";
import { Input } from "./Input";
import { useDebounce } from "../../hooks/useDebounce";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import { SearchWrapper, InputWrapper } from "./styles";

export const SearchWithAutocomplete = ({
  results,
  onSelect,
  onInputChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [highlightedResultIndex, setHighlightedResultIndex] = useState(0);

  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  const onSearchInputChange = (e) => {
    const query = e.target.value;

    setSearchQuery(query);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        setHighlightedResultIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : 0
        );
        break;
      case "ArrowDown":
        if (results && Array.isArray(results)) {
          setHighlightedResultIndex((prevIndex) =>
            prevIndex < results.length - 1 ? prevIndex + 1 : results.length - 1
          );
        }
        break;
      case "Enter":
        if (highlightedResultIndex >= 0 && results) {
          onSelect(results[highlightedResultIndex]);
        }
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const fetchNewData = async () => {
      setAreResultsLoading(true);
      await onInputChange(debouncedSearchTerm);
      setAreResultsLoading(false);
    };

    if (debouncedSearchTerm) {
      fetchNewData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <SearchWrapper onKeyDown={handleKeyDown} tabIndex={0}>
      <InputWrapper>
        <Input
          autoComplete="off"
          className="search-autocomplete"
          onChange={onSearchInputChange}
          type="search"
          value={searchQuery}
          placeholder={"Search..."}
          leadingIcon={<SearchIcon />}
        />
      </InputWrapper>
      {areResultsLoading ? (
        <div>Loading...</div>
      ) : (
        <Results
          onSelect={onSelect}
          results={results}
          highlightedIndex={highlightedResultIndex}
        />
      )}
    </SearchWrapper>
  );
};
