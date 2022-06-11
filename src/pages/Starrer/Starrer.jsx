import { useState, useEffect } from "react";
import { SearchWithAutocomplete } from "../../components/SearchWithAutocomplete/SearchWithAutocomplete";
import {
  getStarredCount,
  searchByQuery,
  toggleStarResult,
} from "../../api/products";
import {
  SearchContainer,
  TitleSection,
  StarrerContainer,
  Title,
  Subtitle,
  StarCallout,
} from "./styles";

function Starrer() {
  const [results, setResults] = useState([]);
  const [totalStarCount, setTotalStarCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const starredCount = await getStarredCount();
      setTotalStarCount(starredCount);
    };

    fetchData();
  }, []);

  const onSelect = async (result) => {
    const updatedStarredValue = !result.starred;

    // Optimistic updates first so the UI is responsive.
    setResults((results) =>
      results.map((el) => {
        if (el.id === result.id) {
          return { ...el, starred: result.updatedStarredValue };
        } else {
          return el;
        }
      })
    );
    setTotalStarCount((prevCount) => {
      if (updatedStarredValue === false) {
        if (prevCount > 0) {
          return prevCount - 1;
        }
      } else {
        return prevCount + 1;
      }
    });

    // After updating UI we trigger endpoints to make sure data is accurately displayed
    const updatedResult = await toggleStarResult(
      result.id,
      updatedStarredValue
    );
    setResults((results) =>
      results.map((el) => {
        if (el.id === updatedResult.id) {
          return { ...el, starred: updatedResult.starred };
        } else {
          return el;
        }
      })
    );

    const starredCount = await getStarredCount();
    setTotalStarCount(starredCount);
  };

  const onInputChange = async (query) => {
    const data = await searchByQuery(query);
    setResults(data);
  };

  return (
    <StarrerContainer>
      <TitleSection>
        <Title>Component Starrer</Title>
        <Subtitle>
          Search for element using the auto complete, and select a record to
          star or unstar it!
        </Subtitle>
        <Subtitle>You can use arrows up and down to navigate results.</Subtitle>
      </TitleSection>
      <StarCallout>
        Total number of elements starred: {totalStarCount}
      </StarCallout>
      <SearchContainer>
        <SearchWithAutocomplete
          results={results}
          onSelect={onSelect}
          onInputChange={onInputChange}
        />
      </SearchContainer>
    </StarrerContainer>
  );
}

export default Starrer;
