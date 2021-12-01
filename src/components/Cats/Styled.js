import styled from "styled-components";

export const GridContainer = styled.div`
  margin: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: space-around;
  row-gap: 3vh;
  column-gap: 3vh;
`;

export const StyledLi = styled.li`
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.5s;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.6) 0px 8px 24px;
  }
  h4 {
    margin-bottom: 8px;
  }
`;
