import { useEffect, useState } from "react";

import { Results } from "./Results";
import { Input } from "./Input";
import { PAGE_SIZE } from "../../utils/constants";
import { useDebounce } from "../../hooks/useDebounce";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 400px;
`;

/**
 * Allows a user to input a query, see suggestions, and select a result
 */
export const SearchWithAutocomplete = ({
  data,
  onSelect,
  onQueryChange,
  maxResultsDisplayed = PAGE_SIZE,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState();
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [highlightedResultIndex, setHighlightedResultIndex] = useState(0);

  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  const onSearchInputChange = (e) => {
    // The user's search string
    const query = e.target.value;

    // Update the value, this is a controlled component
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
      case "Escape":
        setSearchQuery("");
        setResults([]);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const fetchNewData = async () => {
      setAreResultsLoading(true);
      await onQueryChange(debouncedSearchTerm);
      setAreResultsLoading(false);
    };

    if (debouncedSearchTerm) {
      fetchNewData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const formatData = ({ data, pageSize }) => {
    return (data ?? []).slice(0, pageSize);
  };

  useEffect(() => {
    setResults(formatData({ data, pageSize: maxResultsDisplayed }));
  }, [maxResultsDisplayed, data]);

  return (
    <SearchContainer>
      <Input
        autoComplete="off"
        className="search-autocomplete"
        onChange={onSearchInputChange}
        type="search"
        value={searchQuery}
        placeholder={"Search..."}
        onKeyDown={handleKeyDown}
        leadingIcon={<SearchIcon />}
      />
      {areResultsLoading ? (
        <div>Loading...</div>
      ) : (
        <Results
          onSelect={onSelect}
          results={results}
          highlightedIndex={highlightedResultIndex}
        />
      )}
    </SearchContainer>
  );
};
