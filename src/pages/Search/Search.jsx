import { useState } from "react";
import { SearchWithAutocomplete } from "../../components/SearchWithAutocomplete/SearchWithAutocomplete";
import { fetchEndpoint } from "../../api/fetchEndpoint";
import "./Search.css";

function Search() {
  const [autoCompleteData, setAutoCompleteData] = useState([]);
  const onSelect = (result) => {
    alert(`${result.text} - ${result.value}`);
  };

  const onQueryChange = async (query) => {
    const data = await fetchEndpoint(query);
    setAutoCompleteData(data);
  };

  return (
    <div className="Search">
      <SearchWithAutocomplete
        data={autoCompleteData}
        onSelect={onSelect}
        onQueryChange={onQueryChange}
        maxResultsDisplayed={5}
      />
    </div>
  );
}

export default Search;
