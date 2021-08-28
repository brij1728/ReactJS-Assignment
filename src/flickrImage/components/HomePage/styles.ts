import styled from "styled-components";

export const wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;

  justify-content: space-between;

  min-height: 100%;

  > img {
    display: flex;
    width: auto;
    height: auto;
    flex-wrap: wrap;
    max-height: 20rem;
  }
`;
