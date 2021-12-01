import React, { useState } from "react";
import { StyledInput } from "./Styled";

const AppSearch = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onUpdateSearch(term);
  };

  return (
    <StyledInput
      type="text"
      placeholder="Filter cats by country "
      onChange={handleChange}
      value={term}
    />
  );
};

export default AppSearch;
