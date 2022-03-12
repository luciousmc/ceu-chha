import styled from 'styled-components';

export const CoursesContainer = styled.section`
  display: grid;
  place-items: center;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  margin: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    > h3 {
      font-weight: normal;
      font-size: 1.4rem;
    }
  }

  table {
    width: 100%;
  }

  thead th {
    /* text-align: left; */
    padding: 5px;
  }

  tbody td:not(td:first-child) {
    text-align: center;
  }
`;
