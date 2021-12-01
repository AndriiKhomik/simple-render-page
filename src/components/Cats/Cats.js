import CatItem from "../CatItem/CatItem";
import { GridContainer, StyledLi } from "./Styled";

const Cats = ({ cats }) => {
  let id = 4;

  const catsList = cats.map((cat) => {
    return (
      <StyledLi key={id++}>
        <CatItem cat={cat} />
      </StyledLi>
    );
  });

  return (
    <GridContainer>
      <ul>{catsList}</ul>
    </GridContainer>
  );
};

export default Cats;
