import { useEffect, useState } from "react";
import { getCats } from "../api/catRequest";
import AppFilter from "../AppSearch/AppSearch";
import Cats from "../Cats/Cats";
import { Container, StyledTitle } from "./Styled.js";
import "./Styled.js";

function App() {
  const [cats, setCats] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCats().then((data) => {
      setCats(data);
      setLoading(false);
    });
  }, []);

  const onSearchCat = (items, term) => {
    if (items.length === 0) {
      return items;
    }
    const findCat = items.filter(
      (cat) => cat.country.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
    return findCat;
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const visibleData = onSearchCat(cats, term);

  return (
    <Container>
      <StyledTitle>Welcome to Cat Fact App</StyledTitle>
      <AppFilter onUpdateSearch={onUpdateSearch} />
      {loading && <h4>Loading data...</h4>}
      <Cats cats={visibleData} />
      <StyledTitle>Cat Fact App</StyledTitle>
    </Container>
  );
}

export default App;
