import styled from 'styled-components';

export const CoursesContainer = styled.section`
  display: grid;
  place-items: center;
  padding: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  border: 1px solid red;
  margin: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
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
