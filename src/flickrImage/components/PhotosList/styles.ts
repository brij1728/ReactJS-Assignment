import styled from "styled-components";

export const Wrapper = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    grid-gap: 1px;
  }

  .image{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.1rem
    flex-wrap: wrap


  }

  .columns {
      size: xs={6} sm={4} md={3} lg={2} xl={1}
  }
`;
