import CatItem from "../CatItem/CatItem";
import { GridContainer, StyledLi, StyledList } from "./Styled";

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
      <StyledList>{catsList}</StyledList>
    </GridContainer>
  );
};

export default Cats;
